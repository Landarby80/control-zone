import { useState } from "react";
import { Shield, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSetup, setIsSetup] = useState(!localStorage.getItem("firmfence_setup"));
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSetup) {
      if (password.length < 6) {
        toast({
          title: "Password too short",
          description: "Password must be at least 6 characters long.",
          variant: "destructive",
        });
        return;
      }
      
      if (password !== confirmPassword) {
        toast({
          title: "Passwords don't match",
          description: "Please ensure both passwords are identical.",
          variant: "destructive",
        });
        return;
      }
      
      localStorage.setItem("firmfence_setup", "true");
      localStorage.setItem("firmfence_password", btoa(password)); // Basic encoding, use proper hashing in real app
      toast({
        title: "Setup complete",
        description: "FirmFence is now ready to protect your browsing.",
      });
      navigate("/dashboard");
    } else {
      const storedPassword = localStorage.getItem("firmfence_password");
      if (storedPassword === btoa(password)) {
        navigate("/dashboard");
      } else {
        toast({
          title: "Incorrect password",
          description: "Access denied. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {isSetup ? "Setup FirmFence" : "FirmFence"}
          </CardTitle>
          <CardDescription>
            {isSetup 
              ? "Create a master password to secure your blocking settings" 
              : "Enter your master password to access the dashboard"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                {isSetup ? "Master Password" : "Password"}
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            {isSetup && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}
            
            <Button type="submit" className="w-full">
              {isSetup ? "Create Password & Continue" : "Access Dashboard"}
            </Button>
          </form>
          
          {isSetup && (
            <div className="mt-4 p-3 bg-warning/10 border border-warning rounded-lg">
              <p className="text-sm text-warning-foreground">
                <strong>Important:</strong> Remember this password. It's required to modify blocks or uninstall FirmFence.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;