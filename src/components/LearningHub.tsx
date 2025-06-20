
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink, GraduationCap, FileText, Users, Plus, Settings } from 'lucide-react';
import { useState } from 'react';

const LearningHub = () => {
  const [isStaffMode, setIsStaffMode] = useState(false);
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Care Provider Handbook 2024",
      type: "PDF",
      size: "2.5 MB",
      uploadDate: "2024-06-15",
      downloads: 234
    },
    {
      id: 2,
      title: "Weekly Training Materials",
      type: "ZIP",
      size: "8.2 MB",
      uploadDate: "2024-06-10",
      downloads: 156
    }
  ]);

  const learningResources = [
    {
      title: "FLOURISH E-Learning",
      description: "Free comprehensive courses designed for care professionals",
      icon: GraduationCap,
      type: "Course",
      status: "Free Access",
      action: "Start Learning"
    },
    {
      title: "Canvas Course Portal",
      description: "Access detailed course information and materials",
      icon: ExternalLink,
      type: "Platform",
      status: "External Link",
      action: "Visit Canvas"
    },
    {
      title: "Weekly Documents",
      description: "Latest training materials and industry updates",
      icon: FileText,
      type: "Download",
      status: "Updated Weekly",
      action: "Browse Resources"
    },
    {
      title: "Workforce Development",
      description: "Career advancement and professional development resources",
      icon: Users,
      type: "Support",
      status: "Available",
      action: "Learn More"
    }
  ];

  const featuredCourses = [
    {
      title: "Care Fundamentals",
      duration: "4 hours",
      level: "Beginner",
      completion: "2,345 completed"
    },
    {
      title: "Advanced Communication",
      duration: "6 hours",
      level: "Intermediate",
      completion: "1,890 completed"
    },
    {
      title: "Health & Safety Protocols",
      duration: "3 hours",
      level: "All Levels",
      completion: "3,120 completed"
    }
  ];

  return (
    <section id="learning" className="py-20 bg-snow-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-mint-green to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-snow-white" />
          </div>
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Learning Hub
          </h2>
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive educational resources, training materials, and professional development 
            opportunities designed specifically for care providers and candidates.
          </p>
        </div>

        {/* Main Learning Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {learningResources.map((resource, index) => (
            <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-pink/20 to-mint-green/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-8 h-8 text-rose-pink" />
                </div>
                <div className="mb-2">
                  <span className="px-3 py-1 bg-pale-blue text-steel-blue text-xs font-semibold rounded-full">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className="text-steel-blue text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-steel-blue/80 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                <div className="mb-4">
                  <span className="text-xs text-mint-green font-medium">
                    {resource.status}
                  </span>
                </div>
                <Button className="w-full bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Downloadable Resources Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-steel-blue">
              Downloadable Resources
            </h3>
            {isStaffMode && (
              <Button className="bg-mint-green hover:bg-mint-green/90 text-snow-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Resource
              </Button>
            )}
          </div>

          {resources.length === 0 ? (
            <Card className="bg-snow-white border-pale-blue shadow-lg">
              <CardContent className="p-12 text-center">
                <FileText className="w-16 h-16 text-steel-blue/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-steel-blue mb-2">No Resources Available</h3>
                <p className="text-steel-blue/60 mb-6">
                  Our staff will upload training materials and resources here. Check back soon!
                </p>
                {isStaffMode && (
                  <Button className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload First Resource
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-steel-blue mb-2">{resource.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-steel-blue/80">
                          <span className="px-2 py-1 bg-pale-blue text-steel-blue rounded text-xs">
                            {resource.type}
                          </span>
                          <span>{resource.size}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                      {isStaffMode && (
                        <Button size="sm" variant="outline" className="ml-2">
                          <Settings className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-steel-blue/60">
                        Uploaded: {resource.uploadDate}
                      </span>
                      <Button size="sm" className="bg-mint-green hover:bg-mint-green/90 text-snow-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Featured Courses Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-steel-blue text-center mb-8">
            Featured Courses
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="bg-gradient-to-br from-pale-pink to-pale-blue/30 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-steel-blue">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-steel-blue/80">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span className="font-semibold">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed:</span>
                      <span className="font-semibold text-mint-green">{course.completion}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-steel-blue to-mint-green text-snow-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="text-snow-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of care professionals advancing their careers through our comprehensive 
                educational platform. All courses are free and designed by industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold">
                  Browse All Courses
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-snow-white text-snow-white hover:bg-snow-white hover:text-steel-blue font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staff Mode Toggle (for demo purposes) */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => setIsStaffMode(!isStaffMode)}
            className="text-steel-blue border-steel-blue hover:bg-steel-blue hover:text-snow-white"
          >
            {isStaffMode ? 'Exit Staff Mode' : 'Staff Mode (Demo)'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningHub;
