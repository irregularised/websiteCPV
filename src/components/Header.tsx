
import { useState } from 'react';
import { Calendar, Home, BookOpen, CreditCard, Award, Users } from 'lucide-react';
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

  return (
    <header className="bg-snow-white/95 backdrop-blur-sm border-b border-pale-blue sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-pink to-steel-blue rounded-lg flex items-center justify-center">
              <span className="text-snow-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-steel-blue">CareConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-steel-blue hover:text-rose-pink transition-colors duration-200 font-medium"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Staff Login Button */}
          <div className="hidden md:block">
            <Button className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
              Staff Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-steel-blue transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 bg-steel-blue transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-steel-blue transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pale-blue">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-steel-blue hover:text-rose-pink transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </a>
              ))}
              <Button className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white mt-4">
                Staff Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
