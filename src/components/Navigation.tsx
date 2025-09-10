import { Button } from "@/components/ui/button";
import { Leaf, Menu, QrCode, Users } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">FarmChain</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="farmer" size="sm">
            <Users className="mr-2 h-4 w-4" />
            For Farmers
          </Button>
          <Button variant="consumer" size="sm">
            <QrCode className="mr-2 h-4 w-4" />
            Scan QR
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
            <a href="#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <div className="pt-3 space-y-2">
              <Button variant="farmer" size="sm" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                For Farmers
              </Button>
              <Button variant="consumer" size="sm" className="w-full">
                <QrCode className="mr-2 h-4 w-4" />
                Scan QR
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;