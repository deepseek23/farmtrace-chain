import { Button } from "@/components/ui/button";
import { Leaf, Menu, QrCode, Users, Info } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">FarmChain</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              isActive('/') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              isActive('/about') ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="farmer" size="sm" asChild>
            <Link to="/farmer">
              <Users className="mr-2 h-4 w-4" />
              For Farmers
            </Link>
          </Button>
          <Button variant="consumer" size="sm" asChild>
            <Link to="/consumer">
              <QrCode className="mr-2 h-4 w-4" />
              Scan QR
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-3">
            <Link 
              to="/" 
              className={`block text-sm font-medium transition-colors hover:text-foreground ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block text-sm font-medium transition-colors hover:text-foreground ${
                isActive('/about') ? 'text-foreground' : 'text-muted-foreground'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-3 space-y-2">
              <Button variant="farmer" size="sm" className="w-full" asChild>
                <Link to="/farmer" onClick={() => setIsOpen(false)}>
                  <Users className="mr-2 h-4 w-4" />
                  For Farmers
                </Link>
              </Button>
              <Button variant="consumer" size="sm" className="w-full" asChild>
                <Link to="/consumer" onClick={() => setIsOpen(false)}>
                  <QrCode className="mr-2 h-4 w-4" />
                  Scan QR
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;