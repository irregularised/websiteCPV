
import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Download, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const ViewGallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'awards', name: 'Awards Ceremony' },
    { id: 'training', name: 'Training Events' },
    { id: 'community', name: 'Community Outreach' },
    { id: 'team', name: 'Team Building' },
  ];

  const galleryItems = [
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

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-snow-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-steel-blue to-mint-green text-snow-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-snow-white hover:bg-snow-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
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
                <div className="absolute top-4 right-4">
                  <Button size="sm" className="bg-rose-pink/90 hover:bg-rose-pink text-snow-white">
                    <Heart className="w-4 h-4" />
                  </Button>
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
    </div>
  );
};

export default ViewGallery;
