
import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Download, Heart, Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ViewGallery = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isStaff, setIsStaff] = useState(false);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [eventDialogOpen, setEventDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    category: 'awards',
    date: '',
    location: '',
    attendees: '',
    description: '',
    image: ''
  });

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'awards', name: 'Awards Ceremony' },
    { id: 'training', name: 'Training Events' },
    { id: 'community', name: 'Community Outreach' },
    { id: 'team', name: 'Team Building' },
  ];

  const defaultGalleryItems = [
    {
      id: 1,
      title: "Annual Care Excellence Awards 2024",
      category: "awards",
      date: "December 15, 2024",
      location: "Grand Hall, City Center",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      description: "Celebrating outstanding achievements in care provision and professional development."
    },
    {
      id: 2,
      title: "Professional Development Workshop",
      category: "training",
      date: "November 20, 2024",
      location: "Training Center",
      attendees: 85,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      description: "Interactive workshop on advanced care techniques and best practices."
    },
    {
      id: 3,
      title: "Community Disability Awareness Day",
      category: "community",
      date: "October 10, 2024",
      location: "Community Center",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      description: "Raising awareness about disability inclusion in our community."
    },
    {
      id: 4,
      title: "Spring Team Building Retreat",
      category: "team",
      date: "April 20, 2024",
      location: "Countryside Resort",
      attendees: 75,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      description: "A weekend of team building activities and relaxation for our care community."
    },
    {
      id: 5,
      title: "Innovation in Care Technology Seminar",
      category: "training",
      date: "September 15, 2024",
      location: "Tech Hub",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      description: "Exploring cutting-edge technologies in care provision and management."
    },
    {
      id: 6,
      title: "Staff Recognition Gala",
      category: "awards",
      date: "June 30, 2024",
      location: "Hotel Ballroom",
      attendees: 180,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      description: "Honoring exceptional staff members and their contributions to care excellence."
    },
  ];

  useEffect(() => {
    const staffLoggedIn = localStorage.getItem('staffLoggedIn');
    setIsStaff(!!staffLoggedIn);

    // Load events from localStorage or use defaults
    const savedEvents = localStorage.getItem('gallery-events');
    if (savedEvents) {
      setGalleryItems(JSON.parse(savedEvents));
    } else {
      setGalleryItems(defaultGalleryItems);
      localStorage.setItem('gallery-events', JSON.stringify(defaultGalleryItems));
    }
  }, []);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const resetForm = () => {
    setEventForm({
      title: '',
      category: 'awards',
      date: '',
      location: '',
      attendees: '',
      description: '',
      image: ''
    });
    setEditingEvent(null);
  };

  const openAddEventDialog = () => {
    resetForm();
    setEventDialogOpen(true);
  };

  const openEditEventDialog = (event: any) => {
    setEventForm({
      title: event.title,
      category: event.category,
      date: event.date,
      location: event.location,
      attendees: event.attendees.toString(),
      description: event.description,
      image: event.image
    });
    setEditingEvent(event);
    setEventDialogOpen(true);
  };

  const handleSaveEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.location) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const eventData = {
      ...eventForm,
      attendees: parseInt(eventForm.attendees) || 0,
      image: eventForm.image || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop"
    };

    let updatedEvents;
    if (editingEvent) {
      // Update existing event
      updatedEvents = galleryItems.map(item => 
        item.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : item
      );
      toast({
        title: "Event updated",
        description: "The event has been successfully updated.",
      });
    } else {
      // Add new event
      const newEvent = {
        ...eventData,
        id: Math.max(...galleryItems.map(item => item.id), 0) + 1
      };
      updatedEvents = [...galleryItems, newEvent];
      toast({
        title: "Event created",
        description: "The new event has been successfully created.",
      });
    }

    setGalleryItems(updatedEvents);
    localStorage.setItem('gallery-events', JSON.stringify(updatedEvents));
    setEventDialogOpen(false);
    resetForm();
  };

  const handleDeleteEvent = (eventId: number) => {
    const updatedEvents = galleryItems.filter(item => item.id !== eventId);
    setGalleryItems(updatedEvents);
    localStorage.setItem('gallery-events', JSON.stringify(updatedEvents));
    
    // Also clean up any photos for this event
    localStorage.removeItem(`event-photos-${eventId}`);
    
    toast({
      title: "Event deleted",
      description: "The event and its photos have been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-snow-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-steel-blue to-mint-green text-snow-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-snow-white hover:bg-snow-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            {isStaff && (
              <Button
                onClick={openAddEventDialog}
                className="bg-snow-white text-steel-blue hover:bg-snow-white/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            )}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl text-snow-white/90 max-w-2xl mx-auto">
              Capturing moments of excellence, connection, and growth in our care community
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id 
                ? "bg-rose-pink hover:bg-rose-pink/90 text-snow-white" 
                : "border-steel-blue text-steel-blue hover:bg-steel-blue/10"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="sm" className="bg-rose-pink/90 hover:bg-rose-pink text-snow-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  {isStaff && (
                    <>
                      <Button 
                        size="sm" 
                        onClick={() => openEditEventDialog(item)}
                        className="bg-blue-500/90 hover:bg-blue-500 text-snow-white"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => handleDeleteEvent(item.id)}
                        className="bg-red-500/90 hover:bg-red-500 text-snow-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-steel-blue mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-steel-blue/80">
                    <Calendar className="w-4 h-4 text-rose-pink" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-steel-blue/80">
                    <MapPin className="w-4 h-4 text-rose-pink" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-steel-blue/80">
                    <Users className="w-4 h-4 text-mint-green" />
                    <span>{item.attendees} attendees</span>
                  </div>
                </div>

                <p className="text-steel-blue/80 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-steel-blue hover:bg-steel-blue/90 text-snow-white"
                    onClick={() => navigate(`/gallery/album/${item.id}`)}
                  >
                    View Full Album
                  </Button>
                  <Button size="sm" variant="outline" className="border-mint-green text-mint-green hover:bg-mint-green/10">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-steel-blue/60 text-lg">No photos found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-pale-pink to-pale-blue/30 border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-steel-blue mb-4">
              Share Your Moments
            </h3>
            <p className="text-steel-blue/80 mb-6 max-w-2xl mx-auto">
              Have photos from our events that you'd like to share? We'd love to feature them in our gallery 
              to celebrate our community's achievements together.
            </p>
            <Button className="bg-rose-pink hover:bg-rose-pink/90 text-snow-white font-semibold">
              Submit Photos
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Add/Edit Event Dialog */}
      <Dialog open={eventDialogOpen} onOpenChange={setEventDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Event Title *</Label>
              <Input
                id="title"
                value={eventForm.title}
                onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                placeholder="Enter event title"
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                value={eventForm.category}
                onChange={(e) => setEventForm({...eventForm, category: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="awards">Awards Ceremony</option>
                <option value="training">Training Events</option>
                <option value="community">Community Outreach</option>
                <option value="team">Team Building</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                type="date"
                value={eventForm.date}
                onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={eventForm.location}
                onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                placeholder="Enter event location"
              />
            </div>
            
            <div>
              <Label htmlFor="attendees">Expected Attendees</Label>
              <Input
                id="attendees"
                type="number"
                value={eventForm.attendees}
                onChange={(e) => setEventForm({...eventForm, attendees: e.target.value})}
                placeholder="Number of attendees"
              />
            </div>
            
            <div>
              <Label htmlFor="image">Image URL (optional)</Label>
              <Input
                id="image"
                value={eventForm.image}
                onChange={(e) => setEventForm({...eventForm, image: e.target.value})}
                placeholder="Enter image URL"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                value={eventForm.description}
                onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                placeholder="Enter event description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
              />
            </div>
            
            <div className="flex space-x-2 pt-4">
              <Button
                onClick={handleSaveEvent}
                className="flex-1 bg-steel-blue hover:bg-steel-blue/90"
              >
                {editingEvent ? 'Update Event' : 'Create Event'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setEventDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewGallery;
