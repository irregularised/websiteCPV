
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Heart, Trophy } from 'lucide-react';

const RecognitionSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Excellence in Care Award 2024",
      organization: "National Care Association",
      description: "Recognized for outstanding commitment to quality care and professional development",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Community Impact Recognition",
      organization: "Local Health Authority", 
      description: "Celebrated for improving disability awareness and workplace inclusivity",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Innovation in Training Award",
      organization: "Care Training Institute",
      description: "Honored for developing accessible and effective training programs",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
  ];

  const socialEvents = [
    {
      title: "Annual Care Awards Gala",
      date: "July 15, 2024",
      description: "Celebrating excellence in care across our community",
      attendees: 250
    },
    {
      title: "Summer Networking BBQ",
      date: "August 8, 2024", 
      description: "Casual networking event for care professionals",
      attendees: 80
    },
    {
      title: "Disability Awareness Week",
      date: "September 2-6, 2024",
      description: "Educational workshops and awareness activities",
      attendees: 400
    }
  ];

  return (
    <section id="recognition" className="py-20 bg-snow-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Recognition & Community
          </h2>
          <p className="text-lg text-steel-blue/80 max-w-2xl mx-auto">
            Celebrating achievements, fostering community connections, and promoting 
            disability awareness in the workplace through social events and recognition programs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Awards & Recognition */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-steel-blue mb-8 text-center">Awards & Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-blue/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-rose-pink rounded-lg flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-snow-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-steel-blue text-lg">{achievement.title}</CardTitle>
                    <p className="text-rose-pink font-semibold">{achievement.organization}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-steel-blue/80">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Events */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-steel-blue mb-8 text-center">Upcoming Social Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialEvents.map((event, index) => (
                <Card key={index} className="bg-gradient-to-br from-pale-pink to-pale-blue/30 border-pale-blue shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-steel-blue flex items-center justify-between">
                      <span>{event.title}</span>
                      <div className="w-8 h-8 bg-rose-pink/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-rose-pink" />
                      </div>
                    </CardTitle>
                    <p className="text-rose-pink font-semibold">{event.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-steel-blue/80 mb-4">{event.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-steel-blue/60">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disability Awareness Resources */}
          <div>
            <Card className="bg-gradient-to-r from-mint-green to-steel-blue text-snow-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-snow-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-snow-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Disability Awareness Initiative</h3>
                <p className="text-snow-white/90 mb-6 max-w-3xl mx-auto">
                  We're committed to creating inclusive workplaces and promoting disability awareness. 
                  Access resources, training materials, and support for building more inclusive care environments.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-snow-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Training Modules</h4>
                    <p className="text-sm text-snow-white/80">12 comprehensive modules</p>
                  </div>
                  <div className="bg-snow-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Resource Library</h4>
                    <p className="text-sm text-snow-white/80">50+ downloadable guides</p>
                  </div>
                  <div className="bg-snow-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Support Network</h4>
                    <p className="text-sm text-snow-white/80">Expert consultation available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
