
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, BookOpen, Award, LogOut, Plus, Settings, FileText, BarChart, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStaffStats } from '@/hooks/useStaffStats';
import { CareProviderManager } from '@/components/CareProviderManager';
import { LearningResourceManager } from '@/components/LearningResourceManager';
import { NewsletterManager } from '@/components/NewsletterManager';
import AwardNominationManager from '@/components/AwardNominationManager';

const StaffPortal = () => {
  const [staffEmail, setStaffEmail] = useState('');
  const [showProviderDialog, setShowProviderDialog] = useState(false);
  const [showResourceDialog, setShowResourceDialog] = useState(false);
  const [showNewsletterDialog, setShowNewsletterDialog] = useState(false);
  const [showAwardDialog, setShowAwardDialog] = useState(false);
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
      color: 'bg-steel-blue',
      ariaLabel: `${stats.activeCareProviders} active care providers`
    },
    { 
      title: 'Scheduled Events', 
      value: stats.scheduledEvents.toString(), 
      icon: Calendar, 
      color: 'bg-mint-green',
      ariaLabel: `${stats.scheduledEvents} scheduled events`
    },
    { 
      title: 'Learning Resources', 
      value: stats.learningResources.toString(), 
      icon: BookOpen, 
      color: 'bg-rose-pink',
      ariaLabel: `${stats.learningResources} learning resources`
    },
    { 
      title: 'Recognition Awards', 
      value: stats.recognitionAwards.toString(), 
      icon: Award, 
      color: 'bg-pale-blue',
      ariaLabel: `${stats.recognitionAwards} recognition awards`
    },
  ];

  const quickActions = [
    { 
      title: 'Add New Event', 
      icon: Calendar, 
      color: 'bg-mint-green',
      action: () => navigate('/gallery'),
      ariaLabel: 'Navigate to gallery to add new event'
    },
    { 
      title: 'Upload Resources', 
      icon: FileText, 
      color: 'bg-rose-pink',
      action: () => setShowResourceDialog(true),
      ariaLabel: 'Upload new learning resources'
    },
    { 
      title: 'Manage Users', 
      icon: Users, 
      color: 'bg-steel-blue',
      action: () => setShowProviderDialog(true),
      ariaLabel: 'Manage care providers'
    },
    { 
      title: 'Newsletter', 
      icon: Mail, 
      color: 'bg-pale-blue',
      action: () => setShowNewsletterDialog(true),
      ariaLabel: 'Manage newsletters'
    },
  ];

  const recentActivity = [
    { action: 'New care provider registered', time: '2 hours ago', type: 'user' },
    { action: 'Training material uploaded', time: '4 hours ago', type: 'resource' },
    { action: 'Monthly recognition published', time: '1 day ago', type: 'recognition' },
    { action: 'Calendar event created', time: '2 days ago', type: 'event' },
  ];

  return (
    <div className="min-h-screen bg-snow-white">
      {/* Header */}
      <header className="bg-snow-white shadow-sm border-b border-pale-blue/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/0e3b524e-6455-430a-a29c-380af7aad7ff.png" 
                alt="Care Providers' Voice Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-steel-blue">Staff Portal</h1>
                <p className="text-sm text-steel-blue/70">Welcome back, {staffEmail}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-steel-blue border-steel-blue/30 hover:bg-steel-blue/10 hover:text-steel-blue focus:ring-2 focus:ring-steel-blue"
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
            <Card key={index} className="bg-snow-white shadow-md border border-pale-blue/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-steel-blue/70 text-sm font-medium" id={`stat-${index}-label`}>
                      {stat.title}
                    </p>
                    <p 
                      className="text-3xl font-bold text-steel-blue mt-2"
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
                    <stat.icon className="w-6 h-6 text-snow-white" aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="bg-snow-white shadow-md border border-pale-blue/30">
              <CardHeader>
                <CardTitle className="text-steel-blue flex items-center">
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
                      className="h-20 flex flex-col items-center justify-center border-2 border-pale-blue/50 hover:border-steel-blue hover:bg-steel-blue/5 focus:ring-2 focus:ring-steel-blue focus:border-steel-blue"
                      aria-label={action.ariaLabel}
                    >
                      <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                        <action.icon className="w-4 h-4 text-snow-white" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-steel-blue">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Platform Management */}
            <Card className="bg-snow-white shadow-md border border-pale-blue/30 mt-6">
              <CardHeader>
                <CardTitle className="text-steel-blue">Platform Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-mint-green/10 border border-mint-green/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-steel-blue">Calendar Events</h4>
                    <p className="text-sm text-steel-blue/70">Manage training sessions and meetings</p>
                  </div>
                  <Button 
                    onClick={() => navigate('/gallery')}
                    className="bg-mint-green hover:bg-mint-green/90 text-steel-blue font-semibold focus:ring-2 focus:ring-mint-green"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-rose-pink/10 border border-rose-pink/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-steel-blue">Learning Resources</h4>
                    <p className="text-sm text-steel-blue/70">Upload training materials and documents</p>
                  </div>
                  <Button 
                    onClick={() => setShowResourceDialog(true)}
                    className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white font-semibold focus:ring-2 focus:ring-rose-pink"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-pale-blue/20 border border-pale-blue/50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-steel-blue">Newsletter Management</h4>
                    <p className="text-sm text-steel-blue/70">Create and send newsletters to subscribers</p>
                  </div>
                  <Button 
                    onClick={() => setShowNewsletterDialog(true)}
                    className="bg-steel-blue hover:bg-steel-blue/90 text-snow-white font-semibold focus:ring-2 focus:ring-steel-blue"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Manage
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow/10 border border-yellow/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-steel-blue">Recognition Awards</h4>
                    <p className="text-sm text-steel-blue/70">Nominate and manage recognition awards</p>
                  </div>
                  <Button 
                    onClick={() => setShowAwardDialog(true)}
                    className="bg-yellow hover:bg-yellow/90 text-steel-blue font-semibold focus:ring-2 focus:ring-yellow"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-snow-white shadow-md border border-pale-blue/30">
              <CardHeader>
                <CardTitle className="text-steel-blue">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-pale-blue/10 border border-pale-blue/30 rounded-lg">
                      <div className="w-2 h-2 bg-mint-green rounded-full mt-2" aria-hidden="true"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-steel-blue">{activity.action}</p>
                        <p className="text-xs text-steel-blue/70">{activity.time}</p>
                      </div>
                      <Badge variant="outline" className="text-xs border-pale-blue/50 text-steel-blue/70">
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 text-steel-blue border-pale-blue/50 hover:bg-steel-blue/5 focus:ring-2 focus:ring-steel-blue"
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
      <NewsletterManager
        open={showNewsletterDialog}
        onOpenChange={setShowNewsletterDialog}
        onNewsletterAdded={updateStats}
      />
      <AwardNominationManager
        open={showAwardDialog}
        onOpenChange={setShowAwardDialog}
        onAwardAdded={updateStats}
      />
    </div>
  );
};

export default StaffPortal;
