import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Mail, Bell, Shield, Clock, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Daily Email Alerts",
      description: "Get comprehensive daily reports on your selected stocks delivered to your inbox every morning."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Sector-Based Selection",
      description: "Choose stocks by sectors like Technology, Healthcare, Finance, and more for targeted alerts."
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Real-time Notifications",
      description: "Get instant alerts for significant price movements and market events."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Private",
      description: "Your data is encrypted and secure. We never share your information with third parties."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Customizable Timing",
      description: "Set your preferred times for alerts and reports to match your schedule."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Insights",
      description: "Get curated market insights and analysis from our team of financial experts."
    }
  ];

  const sectors = [
    "Technology", "Healthcare", "Finance", "Energy", "Consumer Goods", 
    "Real Estate", "Utilities", "Materials", "Industrials", "Communications"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Smart Stock Monitoring
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Never Miss a <span className="text-yellow-300">Market Move</span> Again
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get personalized daily email alerts for your favorite stocks. Track multiple sectors, 
              receive expert insights, and stay ahead of the market with our intelligent notification system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/stocks">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                  Explore Stocks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Smart Investors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to stay informed about your investments and make better trading decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Track Stocks Across All Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from a wide range of market sectors and get tailored alerts for the industries that matter to you.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {sectors.map((sector, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {sector}
              </Badge>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/stocks">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                Explore All Sectors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Receiving Stock Alerts?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of investors who trust StockAlerts for their daily market updates. 
              Sign up now and get your first week free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-3">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;