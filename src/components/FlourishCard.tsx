
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Star, Gift, Users, ArrowRight } from 'lucide-react';

const FlourishCard = () => {
  const benefits = [
    {
      icon: Star,
      title: "Priority Access",
      description: "Get early access to new courses and exclusive content"
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Receive discounts on partner services and training materials"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join exclusive networking events and professional meetups"
    }
  ];

  return (
    <section id="flourish" className="py-20 bg-gradient-to-br from-pale-pink to-pale-blue/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-pink to-mint-green rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-10 h-10 text-snow-white" />
            </div>
            <h2 className="text-4xl font-bold text-steel-blue mb-4">
              Flourish Card Benefits
            </h2>
            <p className="text-lg text-steel-blue/80 max-w-2xl mx-auto">
              Unlock exclusive benefits, priority access, and special opportunities 
              designed specifically for care professionals and job candidates.
            </p>
          </div>

          {/* Card Preview */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-rose-pink via-mint-green to-steel-blue p-8 rounded-2xl shadow-2xl text-snow-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold">FLOURISH CARD</h3>
                    <p className="text-snow-white/80">Professional Member</p>
                  </div>
                  <div className="w-12 h-12 bg-snow-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-snow-white" />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="h-2 bg-snow-white/20 rounded w-3/4"></div>
                  <div className="h-2 bg-snow-white/20 rounded w-1/2"></div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-snow-white/80 text-sm">Valid From</p>
                    <p className="font-semibold">06/24</p>
                  </div>
                  <div className="text-right">
                    <p className="text-snow-white/80 text-sm">Member Since</p>
                    <p className="font-semibold">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-pink/20 to-mint-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-rose-pink" />
                  </div>
                  <CardTitle className="text-steel-blue">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-steel-blue/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-steel-blue to-mint-green text-snow-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Your Flourish Card?</h3>
              <p className="text-snow-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of care professionals who are already enjoying exclusive 
                benefits and priority access to learning opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold">
                  Apply for Card
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-snow-white text-snow-white hover:bg-snow-white hover:text-steel-blue font-semibold">
                  Learn More
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
