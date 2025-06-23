
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X, Download, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const AlbumView = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isStaff, setIsStaff] = useState(false);
  const [photos, setPhotos] = useState<any[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  // Sample event data - in a real app, this would come from an API
  const events = {
    1: {
      title: "Annual Care Excellence Awards 2024",
      date: "December 15, 2024",
      location: "Grand Hall, City Center",
    },
    2: {
      title: "Professional Development Workshop",
      date: "November 20, 2024",
      location: "Training Center",
    },
    // Add other events as needed
  };

  const event = events[eventId as keyof typeof events];

  useEffect(() => {
    const staffLoggedIn = localStorage.getItem('staffLoggedIn');
    setIsStaff(!!staffLoggedIn);

    // Load photos for this event from localStorage
    const savedPhotos = localStorage.getItem(`event-photos-${eventId}`);
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    } else {
      // Default sample photos
      setPhotos([
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
          caption: "Opening ceremony",
          uploadedBy: "Staff Admin",
          uploadedAt: "2024-12-15"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
          caption: "Award presentations",
          uploadedBy: "Staff Admin",
          uploadedAt: "2024-12-15"
        }
      ]);
    }
  }, [eventId]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto = {
          id: Date.now(),
          url: e.target?.result as string,
          caption: `Photo ${photos.length + 1}`,
          uploadedBy: localStorage.getItem('staffEmail') || 'Staff',
          uploadedAt: new Date().toISOString().split('T')[0]
        };
        
        const updatedPhotos = [...photos, newPhoto];
        setPhotos(updatedPhotos);
        localStorage.setItem(`event-photos-${eventId}`, JSON.stringify(updatedPhotos));
        
        toast({
          title: "Photo uploaded successfully",
          description: "The photo has been added to the album.",
        });
        
        setUploadDialogOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const deletePhoto = (photoId: number) => {
    const updatedPhotos = photos.filter(photo => photo.id !== photoId);
    setPhotos(updatedPhotos);
    localStorage.setItem(`event-photos-${eventId}`, JSON.stringify(updatedPhotos));
    
    toast({
      title: "Photo deleted",
      description: "The photo has been removed from the album.",
    });
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-snow-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-steel-blue mb-4">Event not found</h1>
          <Button onClick={() => navigate('/gallery')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-snow-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-steel-blue to-mint-green text-snow-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/gallery')}
              className="text-snow-white hover:bg-snow-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Gallery
            </Button>
            
            {isStaff && (
              <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-snow-white text-steel-blue hover:bg-snow-white/90">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photos
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload Photo</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="photo">Select Photo</Label>
                      <Input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-xl text-snow-white/90 mb-2">{event.date}</p>
            <p className="text-lg text-snow-white/80">{event.location}</p>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="container mx-auto px-4 py-8">
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="group overflow-hidden border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-48 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedPhoto(photo.url)}
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Button size="sm" variant="ghost" className="bg-black/50 hover:bg-black/70 text-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    {isStaff && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deletePhoto(photo.id)}
                        className="bg-red-500/80 hover:bg-red-500 text-white"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="font-medium text-steel-blue mb-2">{photo.caption}</p>
                  <div className="flex justify-between items-center text-sm text-steel-blue/60">
                    <span>By {photo.uploadedBy}</span>
                    <span>{photo.uploadedAt}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-steel-blue/60 text-lg mb-4">No photos available for this event yet.</p>
            {isStaff && (
              <Button onClick={() => setUploadDialogOpen(true)} className="bg-rose-pink hover:bg-rose-pink/90">
                <Upload className="w-4 h-4 mr-2" />
                Upload First Photo
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl">
            <div className="relative">
              <img
                src={selectedPhoto}
                alt="Full size"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AlbumView;
