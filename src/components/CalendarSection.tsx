
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react';

const CalendarSection = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    // Load events from localStorage
    const savedEvents = localStorage.getItem('gallery-events');
    if (savedEvents) {
      const allEvents = JSON.parse(savedEvents);
      // Filter for upcoming events and sort by date
      const upcomingEvents = allEvents
        .filter((event: any) => new Date(event.date) >= new Date())
        .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 6); // Show only next 6 events
      setEvents(upcomingEvents);
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'training': return 'bg-rose-pink/20 text-rose-pink border-rose-pink/30';
      case 'awards': return 'bg-mint-green/20 text-mint-green border-mint-green/30';
      case 'community': return 'bg-steel-blue/20 text-steel-blue border-steel-blue/30';
      case 'team': return 'bg-pale-blue/40 text-steel-blue border-pale-blue/60';
      default: return 'bg-pale-blue/20 text-steel-blue border-pale-blue/30';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'training': return 'Training';
      case 'awards': return 'Awards';
      case 'community': return 'Community';
      case 'team': return 'Team Building';
      default: return 'Event';
    }
  };

  return (
    <section id="calendar" className="py-20 bg-snow-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-mint-green to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CalendarIcon className="w-8 h-8 text-snow-white" />
          </div>
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto leading-relaxed">
            Stay connected with training sessions, recognition ceremonies, and community events 
            designed to support your professional growth and network.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event) => (
              <Card key={event.id} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-rose-pink to-mint-green"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${getCategoryColor(event.category)} font-medium`}>
                      {getCategoryName(event.category)}
                    </Badge>
                  </div>
                  <CardTitle className="text-steel-blue text-lg leading-tight line-clamp-2">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-steel-blue/80">
                      <CalendarIcon className="w-4 h-4 text-rose-pink shrink-0" />
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm text-steel-blue/80">
                      <MapPin className="w-4 h-4 text-rose-pink shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm text-steel-blue/80">
                      <Users className="w-4 h-4 text-mint-green shrink-0" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>

                  {event.description && (
                    <p className="text-steel-blue/70 text-sm leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <CalendarIcon className="w-16 h-16 text-steel-blue/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-steel-blue mb-2">No Upcoming Events</h3>
            <p className="text-steel-blue/70 max-w-md mx-auto">
              Check back soon for upcoming training sessions, community events, and recognition ceremonies.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-pale-pink to-pale-blue/30 border-0 shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-steel-blue mb-4">
              Never Miss an Event
            </h3>
            <p className="text-steel-blue/80 mb-6 max-w-2xl mx-auto">
              Stay informed about all upcoming training sessions, community events, and professional 
              development opportunities in our care community.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CalendarSection;
