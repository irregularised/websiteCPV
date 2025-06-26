
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
      <DialogContent className="bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-cpv-dark text-xl font-semibold">Add Care Provider</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-cpv-dark font-medium">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 border-gray-300 focus:border-cpv-blue focus:ring-cpv-blue"
              aria-describedby="name-error"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-cpv-dark font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 border-gray-300 focus:border-cpv-blue focus:ring-cpv-blue"
              aria-describedby="email-error"
            />
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
              Add Provider
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
