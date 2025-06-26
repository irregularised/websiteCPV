
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

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

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Save subscription to localStorage
    const subscribers = JSON.parse(localStorage.getItem('newsletter-subscribers') || '[]');
    const newSubscriber = {
      id: Date.now().toString(),
      email: email.trim(),
      subscribedAt: new Date().toISOString()
    };
    
    if (!subscribers.find((sub: any) => sub.email === email.trim())) {
      subscribers.push(newSubscriber);
      localStorage.setItem('newsletter-subscribers', JSON.stringify(subscribers));
      
      toast({
        title: "Success",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
    } else {
      toast({
        title: "Info",
        description: "You're already subscribed to our newsletter.",
      });
    }
  };

  return (
    <footer className="bg-steel-blue text-snow-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/0e3b524e-6455-430a-a29c-380af7aad7ff.png" 
                alt="Care Providers' Voice Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-snow-white/80 mb-6 leading-relaxed">
              Connecting care providers and candidates through educational excellence, 
              professional development, and community engagement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="sm"
                  variant="outline"
                  className="border-snow-white/60 text-snow-white hover:bg-snow-white hover:text-steel-blue p-2 focus:ring-2 focus:ring-mint-green focus:ring-offset-2"
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
            <h3 className="font-bold text-lg mb-6 text-snow-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-snow-white/80 hover:text-snow-white transition-colors text-left focus:outline-none focus:underline"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-snow-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.title}>
                  <a
                    href={resource.href}
                    className="text-snow-white/80 hover:text-snow-white transition-colors flex items-center space-x-2 focus:outline-none focus:underline"
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
            <h3 className="font-bold text-lg mb-6 text-snow-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-pink flex-shrink-0" />
                <div>
                  <p className="text-snow-white/80 text-sm">Email</p>
                  <a href="mailto:hello@cpvnel.co.uk" className="text-snow-white hover:text-rose-pink transition-colors focus:outline-none focus:underline">
                    hello@cpvnel.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-pink flex-shrink-0" />
                <div>
                  <p className="text-snow-white/80 text-sm">Phone</p>
                  <a href="tel:07752799952" className="text-snow-white hover:text-rose-pink transition-colors focus:outline-none focus:underline">
                    07752 799 952
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rose-pink flex-shrink-0" />
                <div>
                  <p className="text-snow-white/80 text-sm">Address</p>
                  <p className="text-snow-white">
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
        <div className="py-8 border-t border-snow-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4 text-snow-white">Stay Updated</h3>
            <p className="text-snow-white/80 mb-6">
              Subscribe to receive the latest updates on courses, events, and opportunities.
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg bg-snow-white/10 border border-snow-white/30 text-snow-white placeholder-snow-white/60 focus:outline-none focus:border-mint-green focus:ring-2 focus:ring-mint-green flex-1 max-w-md"
                aria-label="Email address for newsletter subscription"
              />
              <Button 
                type="submit"
                className="bg-mint-green hover:bg-mint-green/90 text-steel-blue font-semibold px-8 focus:ring-2 focus:ring-mint-green focus:ring-offset-2"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-snow-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-snow-white/60">
          <p>&copy; 2024 Intelligent Working. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://cpvnel.co.uk/assets/img/cpvassets/CareProvidersVoicePrivacyNoticev2260923.pdf" className="hover:text-snow-white transition-colors focus:outline-none focus:underline">Privacy Policy</a>
            <a href="#" className="hover:text-snow-white transition-colors focus:outline-none focus:underline">Terms of Service</a>
            <a href="#" className="hover:text-snow-white transition-colors focus:outline-none focus:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
