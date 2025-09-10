import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Shield, TrendingUp, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-earth/20 py-20 sm:py-32">
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1px,transparent_0)] bg-[length:24px_24px] opacity-20" />
      </div>
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/10 text-primary">
            Blockchain-Powered Agriculture
          </Badge>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Farm to Table
            <span className="bg-gradient-to-r from-primary to-earth bg-clip-text text-transparent">
              {" "}Transparency
            </span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Trace every product from farm to consumer with tamper-proof blockchain records. 
            Ensure fair pricing, verified quality, and trusted origin for agricultural produce.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="farmer" size="lg" className="w-full sm:w-auto">
              <Smartphone className="mr-2 h-5 w-5" />
              Start as Farmer
            </Button>
            <Button variant="consumer" size="lg" className="w-full sm:w-auto">
              <Shield className="mr-2 h-5 w-5" />
              Verify Products
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-background/60 p-6 backdrop-blur">
              <TrendingUp className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">Fair Pricing</h3>
              <p className="text-sm text-muted-foreground">Smart contracts ensure transparent and fair pricing for all stakeholders</p>
            </div>
            
            <div className="rounded-xl bg-background/60 p-6 backdrop-blur">
              <Shield className="mx-auto mb-4 h-10 w-10 text-trust" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">Tamper-Proof Records</h3>
              <p className="text-sm text-muted-foreground">Blockchain technology ensures immutable and verifiable product history</p>
            </div>
            
            <div className="rounded-xl bg-background/60 p-6 backdrop-blur">
              <Globe className="mx-auto mb-4 h-10 w-10 text-success" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">Rural Connectivity</h3>
              <p className="text-sm text-muted-foreground">Designed for low connectivity zones with offline-first capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;