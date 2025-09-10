import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Leaf className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Oops! This crop field doesn't exist</p>
        <p className="text-muted-foreground max-w-md">
          The page you're looking for might have been harvested or moved to a different location.
        </p>
        <Button asChild variant="farmer">
          <a href="/">Return to FarmChain</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
