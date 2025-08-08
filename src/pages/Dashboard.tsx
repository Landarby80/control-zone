import { useState, useEffect } from "react";
import { Shield, Plus, Trash2, Globe, Chrome, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface BlockedSite {
  id: string;
  url: string;
  addedAt: Date;
}

const Dashboard = () => {
  const [blockedSites, setBlockedSites] = useState<BlockedSite[]>([]);
  const [newSite, setNewSite] = useState("");
  const [detectedBrowsers] = useState([
    { name: "Google Chrome", icon: Chrome, detected: true },
    { name: "Mozilla Firefox", icon: Globe, detected: true },
    { name: "Microsoft Edge", icon: Monitor, detected: true },
  ]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    if (!localStorage.getItem("firmfence_setup")) {
      navigate("/login");
      return;
    }
    
    // Load blocked sites from localStorage
    const saved = localStorage.getItem("firmfence_blocked_sites");
    if (saved) {
      setBlockedSites(JSON.parse(saved));
    }
  }, [navigate]);

  const addSite = () => {
    if (!newSite.trim()) return;
    
    // Basic URL validation
    let url = newSite.trim();
    if (!url.includes('.')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL (e.g., example.com)",
        variant: "destructive",
      });
      return;
    }
    
    // Remove protocol if present and normalize
    url = url.replace(/^https?:\/\//, '').replace(/^www\./, '');
    
    // Check if already exists
    if (blockedSites.some(site => site.url === url)) {
      toast({
        title: "Already blocked",
        description: "This website is already in your block list.",
        variant: "destructive",
      });
      return;
    }
    
    const newBlockedSite: BlockedSite = {
      id: Date.now().toString(),
      url,
      addedAt: new Date(),
    };
    
    const updatedSites = [...blockedSites, newBlockedSite];
    setBlockedSites(updatedSites);
    localStorage.setItem("firmfence_blocked_sites", JSON.stringify(updatedSites));
    setNewSite("");
    
    toast({
      title: "Site blocked",
      description: `${url} has been added to your block list.`,
    });
  };

  const removeSite = (id: string) => {
    const updatedSites = blockedSites.filter(site => site.id !== id);
    setBlockedSites(updatedSites);
    localStorage.setItem("firmfence_blocked_sites", JSON.stringify(updatedSites));
    
    toast({
      title: "Site unblocked",
      description: "Website removed from block list.",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addSite();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">FirmFence</h1>
                <p className="text-sm text-muted-foreground">Active Protection</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-success/10 text-success">
              <div className="w-2 h-2 bg-success rounded-full mr-2" />
              Protecting {blockedSites.length} sites
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add New Block */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Block New Website
                </CardTitle>
                <CardDescription>
                  Enter a website URL to block across all detected browsers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter website (e.g., facebook.com, youtube.com)"
                    value={newSite}
                    onChange={(e) => setNewSite(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={addSite}>
                    <Plus className="h-4 w-4 mr-2" />
                    Block Site
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Blocked Sites List */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Blocked Websites ({blockedSites.length})
                </CardTitle>
                <CardDescription>
                  Sites currently blocked across all browsers
                </CardDescription>
              </CardHeader>
              <CardContent>
                {blockedSites.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No websites blocked yet</p>
                    <p className="text-sm">Add your first blocked site above</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {blockedSites.map((site) => (
                      <div
                        key={site.id}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{site.url}</p>
                          <p className="text-sm text-muted-foreground">
                            Blocked since {site.addedAt.toLocaleDateString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSite(site.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Browser Status */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Browser Status
                </CardTitle>
                <CardDescription>
                  Detected browsers with active protection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {detectedBrowsers.map((browser) => {
                  const IconComponent = browser.icon;
                  return (
                    <div key={browser.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{browser.name}</span>
                      </div>
                      <Badge variant={browser.detected ? "default" : "secondary"}>
                        {browser.detected ? "Protected" : "Not Found"}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Protection Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Blocks</span>
                  <span className="font-bold">{blockedSites.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Protected Browsers</span>
                  <span className="font-bold">{detectedBrowsers.filter(b => b.detected).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="default" className="bg-success text-success-foreground">Active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;