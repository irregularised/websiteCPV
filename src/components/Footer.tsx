
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/cpvnel/', label: 'Facebook' },
    { icon: Linkedin, href: 'https://uk.linkedin.com/company/cpvnel', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/cpvnel/', label: 'Instagram' }
  ];

  const quickLinks = [
    { title: 'Learning Hub', href: '#learning' },
    { title: 'Events Calendar', href: '#calendar' },
    { title: 'Flourish Card', href: '#flourish' },
    { title: 'Recognition', href: '#recognition' },
    { title: 'Staff Portal', href: '#portal' }
  ];

  const resources = [
    { title: 'FLOURISH E-Learning', href: 'https://flourish.co.uk/bundles/adult-care-leadership/?utm_source=Google&utm_medium=Google&utm_campaign=adults+leadership&gad_source=1&gad_campaignid=21724141628&gbraid=0AAAAA-IBY2MGG86F4U-BRUgCIHqLqnaMW&gclid=CjwKCAjw9uPCBhATEiwABHN9K_7jw8p4SbAPU2T2sCKQQ9UFru9O0ZugWsSw2cmy9yNzheNyU_qkHhoCvi8QAvD_BwE' },
    { title: 'Canvas Portal', href: '#', external: true },
    { title: 'Training Materials', href: '#' },
    { title: 'Career Support', href: '#' },
    { title: 'Accessibility Guide', href: '#' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cpv-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/d488fd27-700d-44c8-ba4e-a22bdbd85773.png" 
                alt="Care Providers' Voice Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting care providers and candidates through educational excellence, 
              professional development, and community engagement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="sm"
                  variant="outline"
                  className="border-gray-400 text-white hover:bg-white hover:text-cpv-dark p-2 focus:ring-2 focus:ring-cpv-blue focus:ring-offset-2"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-left focus:outline-none focus:underline"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.title}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 focus:outline-none focus:underline"
                  >
                    <span>{resource.title}</span>
                    {resource.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cpv-pink flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:hello@cpvnel.co.uk" className="text-white hover:text-cpv-pink transition-colors focus:outline-none focus:underline">
                    hello@cpvnel.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cpv-pink flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a href="tel:07752799952" className="text-white hover:text-cpv-pink transition-colors focus:outline-none focus:underline">
                    07752 799 952
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cpv-pink flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white">
                    5th Floor Front,<br />
                    London Borough Redbridge Council Office,<br />
                    Lynton House,<br />
                    255-259 High Road,<br />
                    llford,<br />
                    IG1 1NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to receive the latest updates on courses, events, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cpv-blue focus:ring-2 focus:ring-cpv-blue flex-1 max-w-md"
                aria-label="Email address for newsletter subscription"
              />
              <Button className="bg-cpv-blue hover:bg-blue-700 text-white px-8 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Intelligent Working. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://cpvnel.co.uk/assets/img/cpvassets/CareProvidersVoicePrivacyNoticev2260923.pdf" className="hover:text-white transition-colors focus:outline-none focus:underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:underline">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
