
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Calendar, Heart, Star, Trophy, Camera, MapPin } from 'lucide-react';

const RecognitionSection = () => {
  const socialEvents = [
    {
      id: 1,
      title: "Annual Care Excellence Awards",
      date: "December 15, 2024",
      location: "Grand Hall, City Center",
      image: "🏆",
      description: "Celebrating outstanding achievements in care provision and professional development.",
      attendees: 150
    },
    {
      id: 2,
      title: "Spring Team Building Retreat",
      date: "April 20, 2024",
      location: "Countryside Resort",
      image: "🌸",
      description: "A weekend of team building activities, workshops, and relaxation for our care community.",
      attendees: 85
    },
    {
      id: 3,
      title: "Professional Development Mixer",
      date: "March 10, 2024",
      location: "Conference Center",
      image: "🤝",
      description: "Networking event connecting care professionals across different organizations and specialties.",
      attendees: 120
    }
  ];

  const awards = [
    {
      title: "Outstanding Care Provider 2024",
      recipient: "Sarah Johnson, RN",
      category: "Individual Excellence",
      description: "Recognized for exceptional patient care and mentorship of new care providers."
    },
    {
      title: "Innovation in Care Award",
      recipient: "Greenfield Care Home",
      category: "Organizational Excellence",
      description: "Leading the way in implementing new care technologies and practices."
    },
    {
      title: "Community Impact Champion",
      recipient: "Marcus Williams",
      category: "Community Engagement",
      description: "Outstanding contribution to disability awareness and community education programs."
    }
  ];

  const disabilityResources = [
    {
      icon: Heart,
      title: "Inclusive Workplace Guidelines",
      description: "Comprehensive resources for creating accessible and inclusive work environments"
    },
    {
      icon: Users,
      title: "Disability Awareness Training",
      description: "Interactive training modules to build understanding and empathy in care settings"
    },
    {
      icon: Star,
      title: "Best Practice Library",
      description: "Curated collection of successful disability inclusion initiatives and case studies"
    }
  ];

  return (
    <section id="recognition" className="py-20 bg-snow-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-snow-white" />
          </div>
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Recognition & Community
          </h2>
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto leading-relaxed">
            Celebrating excellence in care, fostering community connections, and promoting 
            inclusive practices that make a difference in people's lives.
          </p>
        </div>

        {/* Social Events Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-steel-blue text-center mb-12">
            Upcoming Social Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {socialEvents.map((event) => (
              <Card key={event.id} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{event.image}</div>
                  <CardTitle className="text-steel-blue text-lg text-center">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-steel-blue/80">
                      <Calendar className="w-4 h-4 text-rose-pink" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-steel-blue/80">
                      <MapPin className="w-4 h-4 text-rose-pink" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-steel-blue/80">
                      <Users className="w-4 h-4 text-mint-green" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <p className="text-steel-blue/80 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <Button className="w-full bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-steel-blue text-center mb-12">
            Recent Awards & Recognition
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <Card key={index} className="bg-gradient-to-r from-pale-pink to-pale-blue/30 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-mint-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-8 h-8 text-snow-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-bold text-steel-blue">{award.title}</h4>
                        <span className="px-3 py-1 bg-mint-green/20 text-mint-green text-sm font-semibold rounded-full">
                          {award.category}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-rose-pink mb-2">{award.recipient}</p>
                      <p className="text-steel-blue/80 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disability Resources Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-steel-blue text-center mb-12">
            Disability Inclusion Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {disabilityResources.map((resource, index) => (
              <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mint-green/20 to-steel-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-8 h-8 text-mint-green" />
                  </div>
                  <CardTitle className="text-steel-blue text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-steel-blue/80 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-steel-blue to-mint-green text-snow-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Be Part of Our Community</h3>
              <p className="text-snow-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Join us in celebrating excellence, building connections, and creating inclusive 
                environments where everyone can thrive. Your contribution makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold text-lg px-8">
                  <Camera className="w-5 h-5 mr-2" />
                  View Gallery
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-snow-white text-snow-white hover:bg-snow-white hover:text-steel-blue font-semibold text-lg px-8">
                  Nominate Someone
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
