
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink, GraduationCap, FileText, Users } from 'lucide-react';

const LearningHub = () => {
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
      action: "Download Latest"
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

        {/* Featured Courses Section */}
        <div className="max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default LearningHub;
