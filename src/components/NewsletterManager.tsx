
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Mail, Calendar, Trash2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Newsletter {
  id: string;
  title: string;
  content: string;
  date: string;
  status: 'draft' | 'sent';
  recipients: number;
}

interface NewsletterManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNewsletterAdded: () => void;
}

export const NewsletterManager = ({ open, onOpenChange, onNewsletterAdded }: NewsletterManagerProps) => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      loadNewsletters();
    }
  }, [open]);

  const loadNewsletters = () => {
    const savedNewsletters = localStorage.getItem('newsletters');
    if (savedNewsletters) {
      setNewsletters(JSON.parse(savedNewsletters));
    }
  };

  const saveNewsletters = (updatedNewsletters: Newsletter[]) => {
    localStorage.setItem('newsletters', JSON.stringify(updatedNewsletters));
    setNewsletters(updatedNewsletters);
  };

  const handleCreateNewsletter = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newNewsletter: Newsletter = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString().split('T')[0],
      status: 'draft',
      recipients: 0
    };

    const updatedNewsletters = [...newsletters, newNewsletter];
    saveNewsletters(updatedNewsletters);
    
    setTitle('');
    setContent('');
    setShowForm(false);
    onNewsletterAdded();
    
    toast({
      title: "Success",
      description: "Newsletter created successfully",
    });
  };

  const handleDeleteNewsletter = (id: string) => {
    const updatedNewsletters = newsletters.filter(newsletter => newsletter.id !== id);
    saveNewsletters(updatedNewsletters);
    
    toast({
      title: "Success",
      description: "Newsletter deleted successfully",
    });
  };

  const handleSendNewsletter = (id: string) => {
    const updatedNewsletters = newsletters.map(newsletter =>
      newsletter.id === id
        ? { ...newsletter, status: 'sent' as const, recipients: Math.floor(Math.random() * 500) + 100 }
        : newsletter
    );
    saveNewsletters(updatedNewsletters);
    
    toast({
      title: "Success",
      description: "Newsletter sent successfully",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>Newsletter Management</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {!showForm ? (
            <>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Newsletters</h3>
                <Button onClick={() => setShowForm(true)} className="bg-steel-blue hover:bg-steel-blue/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Newsletter
                </Button>
              </div>
              
              <div className="grid gap-4">
                {newsletters.length === 0 ? (
                  <Card>
                    <CardContent className="p-6 text-center text-gray-500">
                      No newsletters created yet. Click "Create Newsletter" to get started.
                    </CardContent>
                  </Card>
                ) : (
                  newsletters.map((newsletter) => (
                    <Card key={newsletter.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{newsletter.date}</span>
                              </div>
                              {newsletter.status === 'sent' && (
                                <div className="flex items-center space-x-1">
                                  <Mail className="w-4 h-4" />
                                  <span>{newsletter.recipients} recipients</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={newsletter.status === 'sent' ? 'default' : 'secondary'}>
                              {newsletter.status}
                            </Badge>
                            {newsletter.status === 'draft' && (
                              <Button
                                size="sm"
                                onClick={() => handleSendNewsletter(newsletter.id)}
                                className="bg-mint-green hover:bg-mint-green/90 text-white"
                              >
                                <Send className="w-4 h-4 mr-1" />
                                Send
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteNewsletter(newsletter.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 line-clamp-3">{newsletter.content}</p>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Create New Newsletter</h3>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Back to List
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Newsletter Title</label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter newsletter title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter newsletter content"
                    rows={8}
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    onClick={handleCreateNewsletter}
                    className="bg-steel-blue hover:bg-steel-blue/90"
                  >
                    Create Newsletter
                  </Button>
                  <Button variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
