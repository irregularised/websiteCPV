
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const CalendarSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Care Provider Training Workshop",
      date: "2024-06-25",
      time: "10:00 AM - 2:00 PM",
      location: "Community Center",
      type: "Training",
      attendees: 45
    },
    {
      id: 2,
      title: "Weekly Vacancy Updates",
      date: "2024-06-27",
      time: "9:00 AM",
      location: "Online",
      type: "Update",
      attendees: 120
    },
    {
      id: 3,
      title: "Disability Awareness Seminar",
      date: "2024-06-30",
      time: "1:00 PM - 4:00 PM",
      location: "Main Hall",
      type: "Seminar",
      attendees: 80
    }
  ];

  return (
    <section id="calendar" className="py-20 bg-pale-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Events & Opportunities
          </h2>
          <p className="text-lg text-steel-blue/80 max-w-2xl mx-auto">
            Stay connected with training sessions, vacancy updates, and networking events 
            tailored for care professionals and job seekers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar Widget */}
            <div className="lg:col-span-1">
              <Card className="bg-snow-white border-pale-blue shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-steel-blue">
                    <Calendar className="w-5 h-5 text-rose-pink" />
                    <span>June 2024</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 text-center mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="p-2 text-sm font-semibold text-steel-blue/60">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                      <div 
                        key={date} 
                        className={`p-2 text-sm rounded cursor-pointer transition-colors ${
                          [25, 27, 30].includes(date) 
                            ? 'bg-rose-pink text-snow-white font-semibold' 
                            : 'hover:bg-pale-blue text-steel-blue'
                        }`}
                      >
                        {date}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-mint-green hover:bg-mint-green/90 text-snow-white">
                    View Full Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Events List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              event.type === 'Training' ? 'bg-rose-pink/20 text-rose-pink' :
                              event.type === 'Update' ? 'bg-mint-green/20 text-mint-green' :
                              'bg-steel-blue/20 text-steel-blue'
                            }`}>
                              {event.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-steel-blue mb-3">
                            {event.title}
                          </h3>
                          <div className="grid md:grid-cols-3 gap-4 text-sm text-steel-blue/80">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-rose-pink" />
                              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-rose-pink" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-rose-pink" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6 flex items-center space-x-4">
                          <div className="flex items-center space-x-2 text-sm text-steel-blue/80">
                            <Users className="w-4 h-4 text-mint-green" />
                            <span>{event.attendees} registered</span>
                          </div>
                          <Button size="sm" className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                            Register
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
