
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface CareProviderManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProviderAdded: () => void;
}

export const CareProviderManager = ({ open, onOpenChange, onProviderAdded }: CareProviderManagerProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const providers = JSON.parse(localStorage.getItem('care-providers') || '[]');
    const newProvider = {
      id: Date.now(),
      name,
      email,
      dateAdded: new Date().toISOString()
    };

    providers.push(newProvider);
    localStorage.setItem('care-providers', JSON.stringify(providers));

    toast({
      title: "Success",
      description: "Care provider added successfully"
    });

    setName('');
    setEmail('');
    onProviderAdded();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Add Care Provider</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Add Provider
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
