import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Star, Gift, Users, CheckCircle, ArrowRight } from 'lucide-react';

const FlourishCard = () => {
  const benefits = [
    {
      icon: Star,
      title: "Priority Access",
      description: "Get first access to new courses and training opportunities"
    },
    {
      icon: Gift,
      title: "Exclusive Resources",
      description: "Access members-only materials and advanced learning content"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with fellow professionals and industry experts"
    },
    {
      icon: CheckCircle,
      title: "Certification Fast-Track",
      description: "Accelerated pathways to professional certifications"
    }
  ];

  const features = [
    "Free access to all FLOURISH e-learning courses",
    "Priority booking for training sessions and workshops",
    "Exclusive job vacancy notifications",
    "Monthly career development webinars",
    "Digital badge and certificate system",
    "24/7 learning platform access"
  ];

  return (
    <section id="flourish" className="py-20 bg-gradient-to-br from-cpv-light via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-cpv-blue to-cpv-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-cpv-dark mb-4">
            Flourish Card Benefits
          </h2>
          <p className="text-xl text-cpv-slate max-w-3xl mx-auto leading-relaxed">
            Unlock exclusive opportunities and accelerate your career in care with our comprehensive 
            membership program designed specifically for dedicated professionals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Card Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-cpv-dark mb-6">
                Your Gateway to Professional Excellence
              </h3>
              <p className="text-lg text-cpv-slate mb-8 leading-relaxed">
                The Flourish Card is more than just membership – it's your key to unlocking a world of 
                professional development opportunities, exclusive resources, and career advancement tools.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cpv-teal flex-shrink-0" />
                    <span className="text-cpv-dark">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cpv-blue hover:bg-blue-700 text-white font-semibold focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
                  Apply for Flourish Card
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-cpv-blue text-cpv-blue hover:bg-cpv-blue hover:text-white font-semibold focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Card Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cpv-blue to-cpv-teal rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold">FLOURISH</h4>
                  <CreditCard className="w-8 h-8" />
                </div>
                <div className="mb-6">
                  <p className="text-white/80 text-sm mb-2">Member Name</p>
                  <p className="text-xl font-semibold">Care Professional</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/80">Member Since</p>
                    <p className="font-semibold">2024</p>
                  </div>
                  <div>
                    <p className="text-white/80">Status</p>
                    <p className="font-semibold">Active</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-xs text-white/80">
                    Your pathway to professional excellence in care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cpv-blue/20 to-cpv-teal/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-cpv-blue" />
                  </div>
                  <CardTitle className="text-cpv-dark text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-cpv-slate text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-cpv-blue to-cpv-teal text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Flourish?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Join our community of dedicated care professionals and take the next step 
                in your career journey. Applications are reviewed within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-cpv-blue hover:bg-gray-100 font-semibold text-lg px-8 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cpv-blue">
                  Start Application
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-cpv-blue font-semibold text-lg px-8 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cpv-blue">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FlourishCard;
