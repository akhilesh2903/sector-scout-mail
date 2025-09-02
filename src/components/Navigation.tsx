import { Button } from "@/components/ui/button";
import { TrendingUp, User, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">StockAlerts</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"} 
                className="text-sm"
              >
                Home
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                variant={isActive("/dashboard") ? "default" : "ghost"} 
                className="text-sm"
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/stocks">
              <Button 
                variant={isActive("/stocks") ? "default" : "ghost"} 
                className="text-sm"
              >
                Stock Selection
              </Button>
            </Link>
            <Link to="/settings">
              <Button 
                variant={isActive("/settings") ? "default" : "ghost"} 
                className="text-sm"
              >
                <Settings className="h-4 w-4 mr-1" />
                Settings
              </Button>
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-1" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gradient-primary hover:bg-primary-hover">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;