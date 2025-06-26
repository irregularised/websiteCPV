
import { ArrowRight, Calendar, BookOpen, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: 'Event Calendar',
      description: 'Stay updated with training sessions, meetings, and community events'
    },
    {
      icon: BookOpen,
      title: 'Learning Hub',
      description: 'Access professional development resources and training materials'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Celebrate excellence and outstanding achievements in care'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with fellow care providers and share experiences'
    }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-snow-white via-pale-blue/30 to-mint-green/20 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-steel-blue leading-tight">
                Empowering
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-pink to-mint-green block">
                  Care Providers
                </span>
                Together
              </h1>
              
              <p className="text-xl text-steel-blue/80 leading-relaxed max-w-xl">
                A dedicated platform for care professionals to connect, learn, grow, and celebrate 
                excellence in disability and aged care services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate('/gallery')}
              >
                Explore Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-snow-white text-lg px-8 py-6 rounded-xl transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#learning');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learning Hub
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-steel-blue">500+</div>
                <div className="text-sm text-steel-blue/70 font-medium">Care Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-steel-blue">50+</div>
                <div className="text-sm text-steel-blue/70 font-medium">Training Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-steel-blue">25+</div>
                <div className="text-sm text-steel-blue/70 font-medium">Awards Given</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-steel-blue">100%</div>
                <div className="text-sm text-steel-blue/70 font-medium">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-snow-white/80 backdrop-blur-sm border border-pale-blue/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-pink/20 to-mint-green/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-steel-blue" />
                </div>
                <h3 className="text-lg font-bold text-steel-blue mb-2">{feature.title}</h3>
                <p className="text-steel-blue/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 bg-mint-green/20 text-steel-blue px-6 py-3 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-mint-green rounded-full animate-pulse"></span>
            <span>Join our community of dedicated care professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
