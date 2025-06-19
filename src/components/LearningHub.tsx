
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Video, Award } from 'lucide-react';

const LearningHub = () => {
  const courses = [
    {
      title: "Person-Centered Care Fundamentals",
      provider: "FLOURISH",
      type: "Free Course",
      duration: "2 hours",
      modules: 6,
      icon: BookOpen
    },
    {
      title: "Disability Awareness Training",
      provider: "Canvas",
      type: "Certification",
      duration: "4 hours",
      modules: 8,
      icon: Award
    },
    {
      title: "Communication Skills for Care",
      provider: "FLOURISH",
      type: "Free Course",
      duration: "1.5 hours",
      modules: 4,
      icon: Video
    }
  ];

  const resources = [
    {
      title: "Weekly Care Guidelines",
      type: "PDF Document",
      updated: "June 19, 2024",
      size: "2.3 MB"
    },
    {
      title: "Medication Management Checklist",
      type: "PDF Document", 
      updated: "June 17, 2024",
      size: "1.8 MB"
    },
    {
      title: "Emergency Procedures Manual",
      type: "PDF Document",
      updated: "June 15, 2024",
      size: "4.1 MB"
    }
  ];

  return (
    <section id="learning" className="py-20 bg-snow-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Learning Hub
          </h2>
          <p className="text-lg text-steel-blue/80 max-w-2xl mx-auto">
            Access free e-learning through FLOURISH, comprehensive course materials, 
            and downloadable resources for your professional development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Learning Platforms */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-rose-pink to-rose-pink/80 text-snow-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-snow-white/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-snow-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">FLOURISH</span>
                    <p className="text-snow-white/90 text-sm font-normal">Free E-Learning Platform</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-snow-white/90 mb-6">
                  Access comprehensive care training modules, interactive learning materials, 
                  and professional development courses—completely free for all users.
                </p>
                <Button className="bg-snow-white text-rose-pink hover:bg-snow-white/90 font-semibold">
                  Access FLOURISH
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-steel-blue to-steel-blue/80 text-snow-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-snow-white/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-snow-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">Canvas</span>
                    <p className="text-snow-white/90 text-sm font-normal">Course Information & Certification</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-snow-white/90 mb-6">
                  Explore detailed course information, track your certification progress, 
                  and access advanced learning materials for career advancement.
                </p>
                <Button className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold">
                  View Canvas Courses
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Available Courses */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-steel-blue mb-6">Free Courses Available</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-mint-green/20 rounded-lg flex items-center justify-center">
                        <course.icon className="w-5 h-5 text-mint-green" />
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        course.type === 'Free Course' ? 'bg-mint-green/20 text-mint-green' : 'bg-rose-pink/20 text-rose-pink'
                      }`}>
                        {course.type}
                      </span>
                    </div>
                    <CardTitle className="text-steel-blue">{course.title}</CardTitle>
                    <p className="text-steel-blue/60 text-sm">{course.provider}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-steel-blue/80 mb-4">
                      <span>{course.duration}</span>
                      <span>{course.modules} modules</span>
                    </div>
                    <Button className="w-full bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div>
            <h3 className="text-2xl font-bold text-steel-blue mb-6">Weekly Documents & Resources</h3>
            <Card className="bg-pale-blue/10 border-pale-blue">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-snow-white rounded-lg border border-pale-blue/50 hover:border-rose-pink/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <FileText className="w-8 h-8 text-rose-pink" />
                        <div>
                          <h4 className="font-semibold text-steel-blue">{resource.title}</h4>
                          <p className="text-sm text-steel-blue/60">
                            {resource.type} • Updated {resource.updated} • {resource.size}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-rose-pink text-rose-pink hover:bg-rose-pink hover:text-snow-white">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningHub;
