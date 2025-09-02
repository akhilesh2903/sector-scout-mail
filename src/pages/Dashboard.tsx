import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Mail, Bell, Settings, Plus, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userStats = {
    totalStocks: 12,
    alertsSent: 156,
    activeAlerts: 8,
    portfolioValue: "+$2,340"
  };

  const recentAlerts = [
    {
      stock: "AAPL",
      type: "Price Alert",
      message: "Apple reached $185.00 target price",
      time: "2 hours ago",
      status: "positive"
    },
    {
      stock: "TSLA",
      type: "Volume Alert",
      message: "Tesla volume 2x above average",
      time: "4 hours ago",
      status: "neutral"
    },
    {
      stock: "NVDA",
      type: "News Alert",
      message: "NVIDIA announces new AI chip partnership",
      time: "6 hours ago",
      status: "positive"
    }
  ];

  const watchedStocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: "$182.52", change: "+1.24%", alerts: 3 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: "$138.21", change: "+0.87%", alerts: 2 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: "$378.85", change: "+2.15%", alerts: 4 },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: "$875.28", change: "+3.42%", alerts: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your stock alerts and portfolio performance</p>
          </div>
          <div className="flex gap-2">
            <Link to="/stocks">
              <Button className="bg-gradient-primary hover:bg-primary-hover">
                <Plus className="h-4 w-4 mr-2" />
                Add Stocks
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Watched Stocks</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.totalStocks}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alerts Sent</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.alertsSent}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.activeAlerts}</div>
              <p className="text-xs text-muted-foreground">Currently monitoring</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Impact</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{userStats.portfolioValue}</div>
              <p className="text-xs text-muted-foreground">Since using alerts</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Watched Stocks */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  Your Watched Stocks
                </CardTitle>
                <CardDescription>
                  Stocks you're currently receiving alerts for
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {watchedStocks.map((stock, index) => {
                    const isPositive = stock.change.startsWith('+');
                    return (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div>
                            <div className="font-semibold">{stock.symbol}</div>
                            <div className="text-sm text-muted-foreground">{stock.name}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="font-semibold">{stock.price}</div>
                            <div className={`text-sm flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                              {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                              {stock.change}
                            </div>
                          </div>
                          
                          <Badge variant="secondary">
                            {stock.alerts} alerts
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <Link to="/stocks">
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add More Stocks
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Alerts */}
          <div>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-primary" />
                  Recent Alerts
                </CardTitle>
                <CardDescription>
                  Latest notifications sent to your email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="p-3 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{alert.stock}</Badge>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <div className="text-sm font-medium mb-1">{alert.type}</div>
                      <div className="text-sm text-muted-foreground">{alert.message}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    View All Alerts
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Alert Performance */}
            <Card className="mt-6 shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Alert Performance</CardTitle>
                <CardDescription>
                  How well your alerts are performing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy Rate</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Response Time</span>
                      <span>86%</span>
                    </div>
                    <Progress value={86} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Profit Alerts</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
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