
import { Calendar, BookOpen, CreditCard, Award, Users, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-steel-blue text-snow-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-pink to-mint-green rounded-lg flex items-center justify-center">
                <span className="text-snow-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">CareConnect</span>
            </div>
            <p className="text-snow-white/80 mb-4">
              Connecting care providers and candidates through education, opportunities, and community.
            </p>
            <div className="text-sm text-snow-white/60">
              © 2024 CareConnect Platform. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="flex items-center space-x-2 text-snow-white/80 hover:text-snow-white transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#calendar" className="flex items-center space-x-2 text-snow-white/80 hover:text-snow-white transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Events Calendar</span>
                </a>
              </li>
              <li>
                <a href="#learning" className="flex items-center space-x-2 text-snow-white/80 hover:text-snow-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span>Learning Hub</span>
                </a>
              </li>
              <li>
                <a href="#flourish" className="flex items-center space-x-2 text-snow-white/80 hover:text-snow-white transition-colors">
                  <CreditCard className="w-4 h-4" />
                  <span>Flourish Card</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learning</h3>
            <ul className="space-y-2 text-snow-white/80">
              <li><a href="#" className="hover:text-snow-white transition-colors">FLOURISH E-Learning</a></li>
              <li><a href="#" className="hover:text-snow-white transition-colors">Canvas Courses</a></li>
              <li><a href="#" className="hover:text-snow-white transition-colors">Weekly Documents</a></li>
              <li><a href="#" className="hover:text-snow-white transition-colors">Training Modules</a></li>
              <li><a href="#" className="hover:text-snow-white transition-colors">Certification Programs</a></li>
            </ul>
          </div>

          {/* Support & Community */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-snow-white/80">
              <li><a href="#recognition" className="hover:text-snow-white transition-colors">Awards & Recognition</a></li>
              <li><a href="#" className="hover:text-snow-white transition-colors">Social Events</a></li>
              <li><a href="#" className="hover:text-snow-white transition-colors">Disability Awareness</a></li>
              <li><a href="#portal" className="hover:text-snow-white transition-colors">Staff Portal</a></li>
              <li><a href="#" className="hover:text-snow-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-snow-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-snow-white/60 text-sm">
              Built for care professionals • Powered by education and community
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-snow-white/60 hover:text-snow-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-snow-white/60 hover:text-snow-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-snow-white/60 hover:text-snow-white text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
