
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Star, Download, ExternalLink } from 'lucide-react';

const LearningHub = () => {
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    // Load learning resources from localStorage
    const savedResources = localStorage.getItem('learning-resources');
    if (savedResources) {
      setResources(JSON.parse(savedResources));
    }
  }, []);

  const categories = [
    { id: 'training', name: 'Training Materials', icon: BookOpen, color: 'bg-rose-pink' },
    { id: 'policies', name: 'Policies & Procedures', icon: Star, color: 'bg-mint-green' },
    { id: 'best-practices', name: 'Best Practices', icon: Users, color: 'bg-steel-blue' },
  ];

  return (
    <section id="learning" className="py-20 bg-gradient-to-br from-pale-blue/30 to-snow-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-pink to-steel-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-snow-white" />
          </div>
          <h2 className="text-4xl font-bold text-steel-blue mb-4">
            Learning Hub
          </h2>
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive training materials, best practices, and professional development 
            resources curated specifically for care providers.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Card key={category.id} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-snow-white" />
                </div>
                <CardTitle className="text-steel-blue">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-steel-blue/70 text-sm mb-4">
                  {category.id === 'training' && 'Interactive training modules and educational content'}
                  {category.id === 'policies' && 'Up-to-date policies and procedural guidelines'}
                  {category.id === 'best-practices' && 'Proven strategies and industry best practices'}
                </p>
                <div className="text-sm text-steel-blue/60">
                  {resources.filter(r => r.category === category.id).length} resources available
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resources List */}
        {resources.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-steel-blue mb-8 text-center">Available Resources</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="bg-snow-white border-pale-blue shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-steel-blue text-lg line-clamp-2">{resource.title}</CardTitle>
                      <span className="px-2 py-1 bg-mint-green/20 text-mint-green text-xs font-semibold rounded-full shrink-0 ml-2">
                        {resource.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-steel-blue/70 text-sm mb-4 line-clamp-3">{resource.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-steel-blue/60 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{resource.duration || 'Self-paced'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{resource.difficulty || 'All levels'}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {resource.fileUrl && (
                        <Button size="sm" className="flex-1 bg-rose-pink hover:bg-rose-pink/90 text-snow-white">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      )}
                      {resource.link && (
                        <Button size="sm" variant="outline" className="flex-1 border-steel-blue text-steel-blue hover:bg-steel-blue/10">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-steel-blue/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-steel-blue mb-2">Learning Resources Coming Soon</h3>
            <p className="text-steel-blue/70 max-w-md mx-auto">
              Our team is working hard to bring you comprehensive learning materials. 
              Check back soon for training resources and professional development content.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-steel-blue to-mint-green text-snow-white border-0 shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated on New Resources</h3>
            <p className="text-snow-white/90 mb-6 max-w-2xl mx-auto text-lg">
              Be the first to know when new training materials, best practices, and 
              professional development resources become available.
            </p>
            <Button size="lg" className="bg-snow-white text-steel-blue hover:bg-snow-white/90 font-semibold text-lg px-8">
              Subscribe to Updates
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LearningHub;
