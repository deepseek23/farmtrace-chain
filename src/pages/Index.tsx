import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FarmerDashboard from "@/components/FarmerDashboard";
import ConsumerVerification from "@/components/ConsumerVerification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FarmerDashboard />
        <ConsumerVerification />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">FarmChain</h3>
              <p className="text-sm text-muted-foreground">
                Revolutionizing agricultural supply chains with blockchain technology. 
                Building trust between farmers and consumers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Farmers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Product Registration</li>
                <li>QR Code Generation</li>
                <li>Fair Pricing</li>
                <li>Supply Chain Tracking</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Consumers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Product Verification</li>
                <li>Origin Tracing</li>
                <li>Quality Assurance</li>
                <li>Transparent Pricing</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 FarmChain. Empowering sustainable agriculture through blockchain.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;