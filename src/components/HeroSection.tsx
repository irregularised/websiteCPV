
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen, CreditCard, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-snow-white/20 backdrop-blur-sm rounded-full text-snow-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-mint-green rounded-full mr-2 animate-pulse"></span>
              Professional Care Platform
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-snow-white mb-8 animate-fade-in">
            Welcome to
            <span className="block bg-gradient-to-r from-snow-white via-pale-pink to-mint-green bg-clip-text text-transparent mt-2">
              Care Providers' Voice
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-snow-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Your comprehensive platform connecting care providers and candidates through 
            educational excellence, professional development, and community engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold text-lg px-8 py-4 shadow-2xl"
              onClick={() => scrollToSection('#learning')}
            >
              Explore Learning Hub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-snow-white text-snow-white hover:bg-snow-white hover:text-steel-blue font-semibold text-lg px-8 py-4 backdrop-blur-sm"
              onClick={() => scrollToSection('#calendar')}
            >
              View Calendar
            </Button>
          </div>

          {/* Enhanced feature cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="glass-effect rounded-2xl p-8 border border-snow-white/20 hover:border-snow-white/40 transition-all duration-300 group hover:scale-105">
              <Calendar className="w-10 h-10 text-rose-pink mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-steel-blue mb-3 text-lg">Events & Opportunities</h3>
              <p className="text-steel-blue/80 text-sm leading-relaxed">Stay updated with the latest training sessions, job vacancies, and networking events</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-snow-white/20 hover:border-snow-white/40 transition-all duration-300 group hover:scale-105">
              <BookOpen className="w-10 h-10 text-rose-pink mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-steel-blue mb-3 text-lg">Professional Learning</h3>
              <p className="text-steel-blue/80 text-sm leading-relaxed">Access FLOURISH courses, Canvas materials, and comprehensive training resources</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-snow-white/20 hover:border-snow-white/40 transition-all duration-300 group hover:scale-105">
              <CreditCard className="w-10 h-10 text-rose-pink mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-steel-blue mb-3 text-lg">Flourish Benefits</h3>
              <p className="text-steel-blue/80 text-sm leading-relaxed">Unlock exclusive member benefits, priority access, and special opportunities</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-snow-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-mint-green rounded-full"></div>
              <span>2,500+ Active Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-rose-pink rounded-full"></div>
              <span>50+ Free Courses</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-pale-blue rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button 
        onClick={() => scrollToSection('#calendar')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform group"
      >
        <div className="w-8 h-12 border-2 border-snow-white/60 rounded-full flex justify-center group-hover:border-snow-white transition-colors">
          <ArrowDown className="w-4 h-4 text-snow-white/60 mt-2 group-hover:text-snow-white transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
