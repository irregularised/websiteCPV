
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, BookOpen, Award, LogOut, Plus, Settings, FileText, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStaffStats } from '@/hooks/useStaffStats';
import { CareProviderManager } from '@/components/CareProviderManager';
import { LearningResourceManager } from '@/components/LearningResourceManager';

const StaffPortal = () => {
  const [staffEmail, setStaffEmail] = useState('');
  const [showProviderDialog, setShowProviderDialog] = useState(false);
  const [showResourceDialog, setShowResourceDialog] = useState(false);
  const navigate = useNavigate();
  const { stats, updateStats } = useStaffStats();

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

  const statsData = [
    { 
      title: 'Active Care Providers', 
      value: stats.activeCareProviders.toString(), 
      icon: Users, 
      color: 'bg-blue-600',
      ariaLabel: `${stats.activeCareProviders} active care providers`
    },
    { 
      title: 'Scheduled Events', 
      value: stats.scheduledEvents.toString(), 
      icon: Calendar, 
      color: 'bg-green-600',
      ariaLabel: `${stats.scheduledEvents} scheduled events`
    },
    { 
      title: 'Learning Resources', 
      value: stats.learningResources.toString(), 
      icon: BookOpen, 
      color: 'bg-purple-600',
      ariaLabel: `${stats.learningResources} learning resources`
    },
    { 
      title: 'Recognition Awards', 
      value: stats.recognitionAwards.toString(), 
      icon: Award, 
      color: 'bg-orange-600',
      ariaLabel: `${stats.recognitionAwards} recognition awards`
    },
  ];

  const quickActions = [
    { 
      title: 'Add New Event', 
      icon: Calendar, 
      color: 'bg-green-600',
      action: () => navigate('/gallery'),
      ariaLabel: 'Navigate to gallery to add new event'
    },
    { 
      title: 'Upload Resources', 
      icon: FileText, 
      color: 'bg-purple-600',
      action: () => setShowResourceDialog(true),
      ariaLabel: 'Upload new learning resources'
    },
    { 
      title: 'Manage Users', 
      icon: Users, 
      color: 'bg-blue-600',
      action: () => setShowProviderDialog(true),
      ariaLabel: 'Manage care providers'
    },
    { 
      title: 'View Analytics', 
      icon: BarChart, 
      color: 'bg-orange-600',
      action: () => console.log('Analytics feature coming soon'),
      ariaLabel: 'View analytics dashboard'
    },
  ];

  const recentActivity = [
    { action: 'New care provider registered', time: '2 hours ago', type: 'user' },
    { action: 'Training material uploaded', time: '4 hours ago', type: 'resource' },
    { action: 'Monthly recognition published', time: '1 day ago', type: 'recognition' },
    { action: 'Calendar event created', time: '2 days ago', type: 'event' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Staff Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {staffEmail}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:ring-2 focus:ring-blue-500"
              aria-label="Logout from staff portal"
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
          {statsData.map((stat, index) => (
            <Card key={index} className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium" id={`stat-${index}-label`}>
                      {stat.title}
                    </p>
                    <p 
                      className="text-3xl font-bold text-gray-900 mt-2"
                      aria-labelledby={`stat-${index}-label`}
                      aria-describedby={`stat-${index}-description`}
                    >
                      {stat.value}
                    </p>
                    <span id={`stat-${index}-description`} className="sr-only">
                      {stat.ariaLabel}
                    </span>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center">
                  <Settings className="w-5 h-5 mr-2" aria-hidden="true" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={action.action}
                      className="h-20 flex flex-col items-center justify-center border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-label={action.ariaLabel}
                    >
                      <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                        <action.icon className="w-4 h-4 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Platform Management */}
            <Card className="bg-white shadow-md border border-gray-200 mt-6">
              <CardHeader>
                <CardTitle className="text-gray-900">Platform Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Calendar Events</h4>
                    <p className="text-sm text-gray-600">Manage training sessions and meetings</p>
                  </div>
                  <Button 
                    onClick={() => navigate('/gallery')}
                    className="bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-500"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Learning Resources</h4>
                    <p className="text-sm text-gray-600">Upload training materials and documents</p>
                  </div>
                  <Button 
                    onClick={() => setShowResourceDialog(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white focus:ring-2 focus:ring-purple-500"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Recognition Program</h4>
                    <p className="text-sm text-gray-600">Manage awards and achievements</p>
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white focus:ring-2 focus:ring-orange-500">
                    <Award className="w-4 h-4 mr-2" />
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2" aria-hidden="true"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.time}</p>
                      </div>
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
                >
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <CareProviderManager
        open={showProviderDialog}
        onOpenChange={setShowProviderDialog}
        onProviderAdded={updateStats}
      />
      <LearningResourceManager
        open={showResourceDialog}
        onOpenChange={setShowResourceDialog}
        onResourceAdded={updateStats}
      />
    </div>
  );
};

export default StaffPortal;
