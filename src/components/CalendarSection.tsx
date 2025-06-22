
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  type: 'Training' | 'Update' | 'Meeting';
  date: string;
  time: string;
  location: string;
  attendees: number;
}

const CalendarSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isStaffMode, setIsStaffMode] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    type: 'Training' as Event['type'],
    date: '',
    time: '',
    location: ''
  });

  // Calendar logic
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time && newEvent.location) {
      const event: Event = {
        id: Date.now(),
        ...newEvent,
        attendees: 0
      };
      setEvents([...events, event]);
      setNewEvent({
        title: '',
        type: 'Training',
        date: '',
        time: '',
        location: ''
      });
      setIsAddEventOpen(false);
    }
  };

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
                  <CardTitle className="flex items-center justify-between text-steel-blue">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-rose-pink" />
                      <span>{monthNames[currentMonth]} {currentYear}</span>
                    </div>
                    {isStaffMode && (
                      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                        <DialogTrigger asChild>
                          <Button size="sm" className="bg-mint-green hover:bg-mint-green/90 text-snow-white">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add New Event</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Event Title</label>
                              <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                                placeholder="Enter event title"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Type</label>
                              <select
                                className="w-full p-2 border rounded"
                                value={newEvent.type}
                                onChange={(e) => setNewEvent({...newEvent, type: e.target.value as Event['type']})}
                              >
                                <option value="Training">Training</option>
                                <option value="Update">Update</option>
                                <option value="Meeting">Meeting</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Date</label>
                              <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={newEvent.date}
                                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Time</label>
                              <input
                                type="time"
                                className="w-full p-2 border rounded"
                                value={newEvent.time}
                                onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Location</label>
                              <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={newEvent.location}
                                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                                placeholder="Enter location"
                              />
                            </div>
                            <Button onClick={handleAddEvent} className="w-full bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                              Add Event
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 text-center mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="p-2 text-sm font-semibold text-steel-blue/60">
                        {day}
                      </div>
                    ))}
                    {calendarDays.map((date, index) => (
                      <div 
                        key={index} 
                        className={`p-2 text-sm rounded cursor-pointer transition-colors ${
                          date 
                            ? 'hover:bg-pale-blue text-steel-blue' 
                            : ''
                        }`}
                      >
                        {date || ''}
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
              {events.length === 0 ? (
                <Card className="bg-snow-white border-pale-blue shadow-lg">
                  <CardContent className="p-12 text-center">
                    <Calendar className="w-16 h-16 text-steel-blue/30 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-steel-blue mb-2">No Events Scheduled</h3>
                    <p className="text-steel-blue/60 mb-6">
                      Our staff will add upcoming events and opportunities here. Check back soon!
                    </p>
                    {isStaffMode && (
                      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Event
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add New Event</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Event Title</label>
                              <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                                placeholder="Enter event title"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Type</label>
                              <select
                                className="w-full p-2 border rounded"
                                value={newEvent.type}
                                onChange={(e) => setNewEvent({...newEvent, type: e.target.value as Event['type']})}
                              >
                                <option value="Training">Training</option>
                                <option value="Update">Update</option>
                                <option value="Meeting">Meeting</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Date</label>
                              <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={newEvent.date}
                                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Time</label>
                              <input
                                type="time"
                                className="w-full p-2 border rounded"
                                value={newEvent.time}
                                onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Location</label>
                              <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={newEvent.location}
                                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                                placeholder="Enter location"
                              />
                            </div>
                            <Button onClick={handleAddEvent} className="w-full bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                              Add Event
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
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
                                <span>{event.date}</span>
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
              )}
            </div>
          </div>

          {/* Staff Mode Toggle (for demo purposes) */}
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => setIsStaffMode(!isStaffMode)}
              className="text-steel-blue border-steel-blue hover:bg-steel-blue hover:text-snow-white"
            >
              {isStaffMode ? 'Exit Staff Mode' : 'Staff Mode (Demo)'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
