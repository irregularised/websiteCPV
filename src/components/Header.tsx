
import { useState } from 'react';
import { Calendar, Home, BookOpen, CreditCard, Award, Users, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Calendar', icon: Calendar, href: '#calendar' },
    { name: 'Learning Hub', icon: BookOpen, href: '#learning' },
    { name: 'Flourish Card', icon: CreditCard, href: '#flourish' },
    { name: 'Recognition', icon: Award, href: '#recognition' },
    { name: 'Staff Portal', icon: Users, action: 'portal' },
  ];

  const handleNavClick = (href: string, action?: string) => {
    setIsMenuOpen(false);
    
    if (action === 'portal') {
      navigate('/staff-login');
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStaffLogin = () => {
    navigate('/staff-login');
  };

  return (
    <header className="bg-snow-white/98 backdrop-blur-md border-b border-pale-blue/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0e3b524e-6455-430a-a29c-380af7aad7ff.png" 
              alt="Care Providers' Voice Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href || '', item.action)}
                className="flex items-center space-x-2 text-steel-blue hover:text-rose-pink transition-all duration-200 font-medium group py-2 px-3 rounded-lg hover:bg-pale-blue/30"
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Staff Login Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleStaffLogin}
              className="bg-steel-blue hover:bg-steel-blue/90 text-snow-white shadow-lg font-semibold px-6"
            >
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
                  onClick={() => handleNavClick(item.href || '', item.action)}
                  className="flex items-center space-x-3 text-steel-blue hover:text-rose-pink transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-pale-blue/30 text-left"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  onClick={handleStaffLogin}
                  className="w-full bg-steel-blue hover:bg-steel-blue/90 text-snow-white shadow-lg font-semibold"
                >
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
