import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, Clock, Shield, User, CreditCard, Save } from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    pushNotifications: false,
    weeklyReport: true,
    marketHours: true,
    alertFrequency: "real-time",
    emailTime: "09:00",
    alertTypes: {
      priceChanges: true,
      volumeSpikes: true,
      newsAlerts: true,
      earnings: true
    }
  });

  const handleSave = () => {
    // Handle settings save
    console.log("Settings saved:", settings);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">Customize your stock alert preferences and account settings</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Settings Navigation */}
            <div className="lg:col-span-1">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <nav className="space-y-2">
                    <Button variant="default" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Alert Preferences
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Profile Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Billing & Plan
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Privacy & Security
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Alert Preferences */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-primary" />
                    Alert Preferences
                  </CardTitle>
                  <CardDescription>
                    Configure how and when you receive stock alerts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Notification Methods */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Notification Methods</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Email Alerts</Label>
                          <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                        </div>
                        <Switch
                          checked={settings.emailAlerts}
                          onCheckedChange={(checked) => setSettings({...settings, emailAlerts: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive browser notifications</p>
                        </div>
                        <Switch
                          checked={settings.pushNotifications}
                          onCheckedChange={(checked) => setSettings({...settings, pushNotifications: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Weekly Report</Label>
                          <p className="text-sm text-muted-foreground">Weekly portfolio summary</p>
                        </div>
                        <Switch
                          checked={settings.weeklyReport}
                          onCheckedChange={(checked) => setSettings({...settings, weeklyReport: checked})}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Alert Timing */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Alert Timing</h3>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Alert Frequency</Label>
                          <Select value={settings.alertFrequency} onValueChange={(value) => setSettings({...settings, alertFrequency: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="real-time">Real-time</SelectItem>
                              <SelectItem value="hourly">Hourly digest</SelectItem>
                              <SelectItem value="daily">Daily summary</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Daily Email Time</Label>
                          <Input
                            type="time"
                            value={settings.emailTime}
                            onChange={(e) => setSettings({...settings, emailTime: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Market Hours Only</Label>
                          <p className="text-sm text-muted-foreground">Only send alerts during market hours</p>
                        </div>
                        <Switch
                          checked={settings.marketHours}
                          onCheckedChange={(checked) => setSettings({...settings, marketHours: checked})}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Alert Types */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Alert Types</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Price Changes</Label>
                          <p className="text-sm text-muted-foreground">Significant price movements</p>
                        </div>
                        <Switch
                          checked={settings.alertTypes.priceChanges}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            alertTypes: {...settings.alertTypes, priceChanges: checked}
                          })}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Volume Spikes</Label>
                          <p className="text-sm text-muted-foreground">Unusual trading volume</p>
                        </div>
                        <Switch
                          checked={settings.alertTypes.volumeSpikes}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            alertTypes: {...settings.alertTypes, volumeSpikes: checked}
                          })}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">News Alerts</Label>
                          <p className="text-sm text-muted-foreground">Important company news</p>
                        </div>
                        <Switch
                          checked={settings.alertTypes.newsAlerts}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            alertTypes: {...settings.alertTypes, newsAlerts: checked}
                          })}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Earnings Reports</Label>
                          <p className="text-sm text-muted-foreground">Quarterly earnings releases</p>
                        </div>
                        <Switch
                          checked={settings.alertTypes.earnings}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            alertTypes: {...settings.alertTypes, earnings: checked}
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Plan */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    Current Plan
                  </CardTitle>
                  <CardDescription>
                    Manage your subscription and billing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Pro Plan</div>
                        <div className="text-sm text-muted-foreground">Unlimited stocks and alerts</div>
                      </div>
                      <Badge className="bg-gradient-primary">Active</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                      <div>
                        <div className="text-sm text-muted-foreground">Next billing</div>
                        <div className="font-semibold">March 15, 2024</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Amount</div>
                        <div className="font-semibold">$29.99/month</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline">Manage Billing</Button>
                      <Button variant="outline">Change Plan</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-gradient-primary hover:bg-primary-hover">
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;