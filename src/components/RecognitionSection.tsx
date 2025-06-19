
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Star, Trophy, Users, Heart, Calendar } from 'lucide-react';

const RecognitionSection = () => {
  const achievements = [
    {
      title: "Employee of the Month",
      recipient: "Sarah Johnson",
      month: "June 2024",
      description: "Outstanding dedication to patient care and team collaboration",
      icon: Star,
      category: "Monthly Award"
    },
    {
      title: "Excellence in Training",
      recipient: "Michael Chen",
      month: "May 2024",
      description: "Exceptional contribution to staff development and education",
      icon: Trophy,
      category: "Annual Award"
    },
    {
      title: "Team Player Award",
      recipient: "Care Team Alpha",
      month: "April 2024",
      description: "Remarkable teamwork during challenging circumstances",
      icon: Users,
      category: "Team Award"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Awards Ceremony",
      date: "July 15, 2024",
      time: "6:00 PM",
      location: "Grand Hall",
      description: "Celebrating outstanding achievements in care"
    },
    {
      title: "Staff Appreciation BBQ",
      date: "July 28, 2024",
      time: "12:00 PM",
      location: "Community Garden",
      description: "Casual gathering to celebrate our amazing team"
    },
    {
      title: "Disability Awareness Workshop",
      date: "August 5, 2024",
      time: "2:00 PM",
      location: "Training Center",
      description: "Building inclusive workplace practices"
    }
  ];

  return (
    <section id="recognition" className="py-20 bg-gradient-to-br from-pale-blue/30 to-pale-pink/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-mint-green rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-snow-white" />
          </div>
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Recognition & Community
          </h2>
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto leading-relaxed">
            Celebrating excellence, fostering community, and promoting awareness in the care industry. 
            Recognizing outstanding contributions and building inclusive workplace culture.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Awards & Recognition */}
            <div>
              <h3 className="text-2xl font-bold text-steel-blue mb-8 flex items-center">
                <Trophy className="w-6 h-6 text-rose-pink mr-3" />
                Recent Awards
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-pink/20 to-mint-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="w-6 h-6 text-rose-pink" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-steel-blue">
                              {achievement.title}
                            </h4>
                            <span className="px-3 py-1 bg-mint-green/20 text-mint-green text-xs font-semibold rounded-full">
                              {achievement.category}
                            </span>
                          </div>
                          <p className="text-rose-pink font-medium mb-1">{achievement.recipient}</p>
                          <p className="text-steel-blue/80 text-sm mb-2">{achievement.description}</p>
                          <p className="text-steel-blue/60 text-xs">{achievement.month}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Events & Awareness */}
            <div>
              <h3 className="text-2xl font-bold text-steel-blue mb-8 flex items-center">
                <Calendar className="w-6 h-6 text-rose-pink mr-3" />
                Upcoming Events
              </h3>
              <div className="space-y-6 mb-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-steel-blue">{event.title}</h4>
                      </div>
                      <p className="text-steel-blue/80 text-sm mb-3">{event.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm text-steel-blue/70">
                        <div>
                          <span className="font-medium">Date:</span> {event.date}
                        </div>
                        <div>
                          <span className="font-medium">Time:</span> {event.time}
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium">Location:</span> {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Disability Awareness Highlight */}
              <Card className="bg-gradient-to-br from-steel-blue to-mint-green text-snow-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-6 h-6 mr-3" />
                    Disability Awareness Initiative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-snow-white/90 mb-4">
                    We're committed to creating an inclusive workplace that supports all individuals. 
                    Learn about our resources and initiatives for disability awareness and accommodation.
                  </p>
                  <Button className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold">
                    Learn More About Our Initiatives
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-snow-white border-pale-blue shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-steel-blue mb-4">
                  Nominate Someone for Recognition
                </h3>
                <p className="text-steel-blue/80 mb-6 max-w-2xl mx-auto">
                  Know someone who deserves recognition for their outstanding work or contribution? 
                  Help us celebrate excellence in our community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white font-semibold">
                    Submit Nomination
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-snow-white font-semibold">
                    View All Awards
                  </Button>
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
