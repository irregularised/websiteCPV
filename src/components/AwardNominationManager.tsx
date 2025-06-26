
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Award, Plus, Edit, Trash2 } from 'lucide-react';

interface Award {
  id: number;
  title: string;
  recipient: string;
  category: string;
  description: string;
  dateAwarded: string;
}

interface AwardNominationManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAwardAdded: () => void;
}

const AwardNominationManager = ({ open, onOpenChange, onAwardAdded }: AwardNominationManagerProps) => {
  const [awards, setAwards] = useState<Award[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAward, setEditingAward] = useState<Award | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    recipient: '',
    category: '',
    description: '',
    dateAwarded: ''
  });
  const { toast } = useToast();

  useState(() => {
    if (open) {
      const savedAwards = localStorage.getItem('recognition-awards');
      if (savedAwards) {
        setAwards(JSON.parse(savedAwards));
      }
    }
  }, [open]);

  const categories = [
    'Individual Excellence',
    'Organizational Excellence', 
    'Community Engagement',
    'Innovation in Care',
    'Leadership',
    'Team Collaboration'
  ];

  const resetForm = () => {
    setFormData({
      title: '',
      recipient: '',
      category: '',
      description: '',
      dateAwarded: ''
    });
    setEditingAward(null);
    setShowForm(false);
  };

  const handleSaveAward = () => {
    if (!formData.title || !formData.recipient || !formData.category) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const awardData = {
      ...formData,
      dateAwarded: formData.dateAwarded || new Date().toISOString().split('T')[0]
    };

    let updatedAwards;
    if (editingAward) {
      updatedAwards = awards.map(award => 
        award.id === editingAward.id ? { ...awardData, id: editingAward.id } : award
      );
      toast({
        title: "Award updated",
        description: "The award has been successfully updated.",
      });
    } else {
      const newAward = {
        ...awardData,
        id: Math.max(...awards.map(a => a.id), 0) + 1
      };
      updatedAwards = [...awards, newAward];
      toast({
        title: "Award created",
        description: "The new award has been successfully created.",
      });
    }

    setAwards(updatedAwards);
    localStorage.setItem('recognition-awards', JSON.stringify(updatedAwards));
    onAwardAdded();
    resetForm();
  };

  const handleEditAward = (award: Award) => {
    setFormData({
      title: award.title,
      recipient: award.recipient,
      category: award.category,
      description: award.description,
      dateAwarded: award.dateAwarded
    });
    setEditingAward(award);
    setShowForm(true);
  };

  const handleDeleteAward = (awardId: number) => {
    const updatedAwards = awards.filter(award => award.id !== awardId);
    setAwards(updatedAwards);
    localStorage.setItem('recognition-awards', JSON.stringify(updatedAwards));
    onAwardAdded();
    
    toast({
      title: "Award deleted",
      description: "The award has been removed.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-steel-blue">
            <Award className="w-5 h-5 mr-2" />
            Recognition Awards Management
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {!showForm ? (
            <>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-steel-blue">Current Awards</h3>
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-rose-pink hover:bg-rose-pink/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Award
                </Button>
              </div>

              <div className="space-y-4">
                {awards.length > 0 ? (
                  awards.map((award) => (
                    <div key={award.id} className="border border-pale-blue/50 rounded-lg p-4 bg-snow-white">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-steel-blue">{award.title}</h4>
                          <p className="text-rose-pink font-medium">{award.recipient}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Badge variant="outline" className="border-mint-green/50 text-mint-green">
                            {award.category}
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEditAward(award)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteAward(award.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-steel-blue/70 text-sm mb-2">{award.description}</p>
                      <p className="text-steel-blue/60 text-xs">Awarded: {award.dateAwarded}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Award className="w-12 h-12 text-steel-blue/30 mx-auto mb-4" />
                    <p className="text-steel-blue/60">No awards created yet. Add your first award!</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-steel-blue">
                  {editingAward ? 'Edit Award' : 'Add New Award'}
                </h3>
                <Button variant="outline" onClick={resetForm}>
                  Back to List
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Award Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g., Outstanding Care Provider 2024"
                  />
                </div>

                <div>
                  <Label htmlFor="recipient">Recipient *</Label>
                  <Input
                    id="recipient"
                    value={formData.recipient}
                    onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                    placeholder="e.g., Sarah Johnson, RN"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="dateAwarded">Date Awarded</Label>
                  <Input
                    id="dateAwarded"
                    type="date"
                    value={formData.dateAwarded}
                    onChange={(e) => setFormData({...formData, dateAwarded: e.target.value})}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe the achievement or contribution..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <Button
                  onClick={handleSaveAward}
                  className="flex-1 bg-steel-blue hover:bg-steel-blue/90"
                >
                  {editingAward ? 'Update Award' : 'Create Award'}
                </Button>
                <Button
                  variant="outline"
                  onClick={resetForm}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AwardNominationManager;
