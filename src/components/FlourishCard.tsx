
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Gift, Star, Users, Heart, Award } from 'lucide-react';

const FlourishCard = () => {
  const benefits = [
    { icon: Gift, title: "Exclusive Discounts", description: "Special offers from partner organizations and local businesses" },
    { icon: Star, title: "Recognition Rewards", description: "Earn points for outstanding service and professional development" },
    { icon: Users, title: "Community Access", description: "Priority booking for events, training sessions, and networking opportunities" },
    { icon: Heart, title: "Wellbeing Support", description: "Access to mental health resources and wellness programs" }
  ];

  return (
    <section id="flourish" className="py-20 bg-gradient-to-br from-pale-blue/30 to-snow-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-mint-green to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-8 h-8 text-snow-white" />
          </div>
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Flourish Card Program
          </h2>
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto leading-relaxed">
            A recognition and rewards program designed exclusively for care providers, 
            celebrating your dedication and supporting your professional journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Hero Card Display */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-rose-pink via-mint-green to-steel-blue p-1 rounded-2xl shadow-2xl max-w-md mx-auto">
              <div className="bg-snow-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-mint-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-snow-white" />
                </div>
                <h3 className="text-2xl font-bold text-steel-blue mb-2">Flourish Card</h3>
                <p className="text-steel-blue/70 mb-4">Care Provider Recognition Program</p>
                <div className="bg-gradient-to-r from-pale-blue/20 to-mint-green/20 rounded-lg p-4">
                  <p className="text-sm text-steel-blue/80 font-medium">
                    Coming Soon - Registration Opens 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-pink/20 to-mint-green/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-steel-blue" />
                  </div>
                  <CardTitle className="text-steel-blue text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-steel-blue/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Program Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-mint-green/10 to-pale-blue/20 border-mint-green/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-steel-blue text-xl flex items-center">
                  <Star className="w-6 h-6 mr-3 text-mint-green" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-mint-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-snow-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-steel-blue">Register Your Interest</h4>
                      <p className="text-steel-blue/70 text-sm">Sign up to be notified when the program launches</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-mint-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-snow-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-steel-blue">Earn Recognition</h4>
                      <p className="text-steel-blue/70 text-sm">Participate in training, events, and community activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-mint-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-snow-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-steel-blue">Enjoy Benefits</h4>
                      <p className="text-steel-blue/70 text-sm">Access exclusive discounts, events, and recognition opportunities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-rose-pink/10 to-pale-blue/20 border-rose-pink/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-steel-blue text-xl flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-rose-pink" />
                  Program Values
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-steel-blue mb-1">Recognition</h4>
                    <p className="text-steel-blue/70 text-sm">Acknowledging the valuable work care providers do every day</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-blue mb-1">Community</h4>
                    <p className="text-steel-blue/70 text-sm">Building connections and support networks within the care sector</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-blue mb-1">Growth</h4>
                    <p className="text-steel-blue/70 text-sm">Supporting professional development and career advancement</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-blue mb-1">Wellbeing</h4>
                    <p className="text-steel-blue/70 text-sm">Promoting mental health and work-life balance for care providers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-steel-blue to-mint-green text-snow-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Join the Flourish Community</h3>
              <p className="text-snow-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Be among the first to experience the Flourish Card program when it launches. 
                Register your interest today and help us shape the future of care provider recognition.
              </p>
              <div className="bg-snow-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <h4 className="text-xl font-bold mb-2">Coming 2025</h4>
                <p className="text-snow-white/80 text-sm">
                  Program development is underway. We'll notify registered users when applications open.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FlourishCard;
