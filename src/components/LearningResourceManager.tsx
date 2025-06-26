
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
      <DialogContent className="bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-cpv-dark text-xl font-semibold">Upload Learning Resource</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-cpv-dark font-medium">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 border-gray-300 focus:border-cpv-blue focus:ring-cpv-blue"
              aria-describedby="title-error"
              required
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-cpv-dark font-medium">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 border-gray-300 focus:border-cpv-blue focus:ring-cpv-blue"
              aria-describedby="description-error"
              required
            />
          </div>
          <div>
            <Label htmlFor="file" className="text-cpv-dark font-medium">File (optional)</Label>
            <Input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 border-gray-300 focus:border-cpv-blue focus:ring-cpv-blue"
              aria-describedby="file-help"
            />
            <p id="file-help" className="text-sm text-cpv-slate mt-1">
              Accepted formats: PDF, DOC, DOCX, PPT, PPTX (max 10MB)
            </p>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-gray-300 text-cpv-slate hover:bg-gray-50 focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-cpv-blue hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Upload Resource
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
