
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen, CreditCard } from 'lucide-react';

const HeroSection = () => {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-snow-white mb-6 animate-fade-in">
            Welcome to
            <span className="block bg-gradient-to-r from-snow-white to-pale-pink bg-clip-text text-transparent">
              CareConnect
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-snow-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive platform connecting care providers and candidates through 
            educational tools, events, resources, and opportunities—all in one modern, accessible space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold">
              Explore Learning Hub
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-snow-white text-snow-white hover:bg-snow-white hover:text-steel-blue font-semibold">
              View Calendar
            </Button>
          </div>

          {/* Quick access cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-effect rounded-xl p-6 border border-snow-white/20 hover:border-snow-white/40 transition-all duration-300 group">
              <Calendar className="w-8 h-8 text-rose-pink mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-steel-blue mb-2">Events & Vacancies</h3>
              <p className="text-steel-blue/80 text-sm">Stay updated with latest opportunities and events</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 border border-snow-white/20 hover:border-snow-white/40 transition-all duration-300 group">
              <BookOpen className="w-8 h-8 text-rose-pink mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-steel-blue mb-2">Free E-Learning</h3>
              <p className="text-steel-blue/80 text-sm">Access FLOURISH courses and training materials</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 border border-snow-white/20 hover:border-snow-white/40 transition-all duration-300 group">
              <CreditCard className="w-8 h-8 text-rose-pink mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-steel-blue mb-2">Flourish Card</h3>
              <p className="text-steel-blue/80 text-sm">Unlock exclusive benefits and resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-snow-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-snow-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
