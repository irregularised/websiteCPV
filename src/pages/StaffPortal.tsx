
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, BookOpen, Award, LogOut, Plus, Settings, FileText, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffPortal = () => {
  const [staffEmail, setStaffEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('staffLoggedIn');
    const email = localStorage.getItem('staffEmail');
    
    if (!isLoggedIn) {
      navigate('/staff-login');
      return;
    }
    
    if (email) {
      setStaffEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('staffLoggedIn');
    localStorage.removeItem('staffEmail');
    navigate('/');
  };

  const stats = [
    { title: 'Active Care Providers', value: '1,234', icon: Users, color: 'bg-mint-green' },
    { title: 'Scheduled Events', value: '45', icon: Calendar, color: 'bg-rose-pink' },
    { title: 'Learning Resources', value: '89', icon: BookOpen, color: 'bg-steel-blue' },
    { title: 'Recognition Awards', value: '156', icon: Award, color: 'bg-warm-yellow' },
  ];

  const quickActions = [
    { title: 'Add New Event', icon: Calendar, color: 'bg-mint-green' },
    { title: 'Upload Resources', icon: FileText, color: 'bg-rose-pink' },
    { title: 'Manage Users', icon: Users, color: 'bg-steel-blue' },
    { title: 'View Analytics', icon: BarChart, color: 'bg-warm-yellow' },
  ];

  const recentActivity = [
    { action: 'New care provider registered', time: '2 hours ago', type: 'user' },
    { action: 'Training material uploaded', time: '4 hours ago', type: 'resource' },
    { action: 'Monthly recognition published', time: '1 day ago', type: 'recognition' },
    { action: 'Calendar event created', time: '2 days ago', type: 'event' },
  ];

  return (
    <div className="min-h-screen bg-pale-blue/30">
      {/* Header */}
      <header className="bg-snow-white shadow-sm border-b border-pale-blue">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-pink via-mint-green to-steel-blue rounded-xl flex items-center justify-center">
                <span className="text-snow-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-steel-blue">Staff Portal</h1>
                <p className="text-sm text-steel-blue/60">Welcome back, {staffEmail}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-steel-blue border-steel-blue hover:bg-steel-blue hover:text-snow-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-snow-white shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-steel-blue/60 text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-steel-blue mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-snow-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="bg-snow-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-steel-blue flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center border-2 border-pale-blue hover:border-rose-pink hover:bg-rose-pink/5"
                    >
                      <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                        <action.icon className="w-4 h-4 text-snow-white" />
                      </div>
                      <span className="text-sm font-medium text-steel-blue">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Platform Management */}
            <Card className="bg-snow-white shadow-lg border-0 mt-6">
              <CardHeader>
                <CardTitle className="text-steel-blue">Platform Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-pale-blue/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-steel-blue">Calendar Events</h4>
                    <p className="text-sm text-steel-blue/60">Manage training sessions and meetings</p>
                  </div>
                  <Button className="bg-mint-green hover:bg-mint-green/90 text-snow-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-pale-pink/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-steel-blue">Learning Resources</h4>
                    <p className="text-sm text-steel-blue/60">Upload training materials and documents</p>
                  </div>
                  <Button className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-warm-yellow/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-steel-blue">Recognition Program</h4>
                    <p className="text-sm text-steel-blue/60">Manage awards and achievements</p>
                  </div>
                  <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-steel-blue">
                    <Award className="w-4 h-4 mr-2" />
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-snow-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-steel-blue">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-pale-blue/20 rounded-lg">
                      <div className="w-2 h-2 bg-mint-green rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-steel-blue">{activity.action}</p>
                        <p className="text-xs text-steel-blue/60">{activity.time}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 text-steel-blue border-steel-blue hover:bg-steel-blue hover:text-snow-white">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
