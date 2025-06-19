
import { useState } from 'react';
import { Calendar, Home, BookOpen, CreditCard, Award, Users, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Calendar', icon: Calendar, href: '#calendar' },
    { name: 'Learning Hub', icon: BookOpen, href: '#learning' },
    { name: 'Flourish Card', icon: CreditCard, href: '#flourish' },
    { name: 'Recognition', icon: Award, href: '#recognition' },
    { name: 'Staff Portal', icon: Users, href: '#portal' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-snow-white/98 backdrop-blur-md border-b border-pale-blue/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-pink via-mint-green to-steel-blue rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-snow-white font-bold text-xl">C</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-steel-blue">CareConnect</span>
              <p className="text-xs text-steel-blue/60 -mt-1">Professional Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center space-x-2 text-steel-blue hover:text-rose-pink transition-all duration-200 font-medium group py-2 px-3 rounded-lg hover:bg-pale-blue/30"
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Staff Login Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-rose-pink to-rose-pink/90 hover:from-rose-pink/90 hover:to-rose-pink text-snow-white shadow-lg font-semibold px-6">
              Staff Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-pale-blue/30 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-steel-blue" />
            ) : (
              <Menu className="w-6 h-6 text-steel-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-pale-blue/50 bg-snow-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-3 text-steel-blue hover:text-rose-pink transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-pale-blue/30 text-left"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-rose-pink to-rose-pink/90 hover:from-rose-pink/90 hover:to-rose-pink text-snow-white shadow-lg font-semibold">
                  Staff Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
