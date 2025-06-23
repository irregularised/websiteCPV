
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface LearningResourceManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onResourceAdded: () => void;
}

export const LearningResourceManager = ({ open, onOpenChange, onResourceAdded }: LearningResourceManagerProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const resources = JSON.parse(localStorage.getItem('learning-resources') || '[]');
    const newResource = {
      id: Date.now(),
      title,
      description,
      fileName: file?.name || 'No file',
      uploadedBy: localStorage.getItem('staffEmail') || 'Staff',
      dateUploaded: new Date().toISOString()
    };

    resources.push(newResource);
    localStorage.setItem('learning-resources', JSON.stringify(resources));

    toast({
      title: "Success",
      description: "Learning resource uploaded successfully"
    });

    setTitle('');
    setDescription('');
    setFile(null);
    onResourceAdded();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Upload Learning Resource</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-gray-700">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-gray-700">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label htmlFor="file" className="text-gray-700">File (optional)</Label>
            <Input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Upload Resource
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
