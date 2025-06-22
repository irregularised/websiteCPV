
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('staffLoggedIn', 'true');
        localStorage.setItem('staffEmail', email);
        navigate('/staff-portal');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pale-blue to-pale-pink flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-snow-white shadow-2xl border-0">
        <CardHeader className="text-center pb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-rose-pink via-mint-green to-steel-blue rounded-xl flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-snow-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-steel-blue">Staff Login</CardTitle>
          <p className="text-steel-blue/60">Access your CareConnect portal</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-steel-blue font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="h-12 border-pale-blue focus:border-rose-pink"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-steel-blue font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="h-12 border-pale-blue focus:border-rose-pink pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-steel-blue/60 hover:text-steel-blue"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-rose-pink to-rose-pink/90 hover:from-rose-pink/90 hover:to-rose-pink text-snow-white font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-snow-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Lock size={18} />
                  <span>Sign In</span>
                </div>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-steel-blue/60">
              Forgot your password?{' '}
              <button className="text-rose-pink hover:text-rose-pink/80 font-medium">
                Reset Password
              </button>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-pale-blue">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="w-full text-steel-blue border-steel-blue hover:bg-steel-blue hover:text-snow-white"
            >
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffLogin;
