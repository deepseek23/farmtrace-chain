import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose FarmChain?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Revolutionary blockchain technology meets agricultural innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Blockchain Security</h3>
                <p className="text-sm text-muted-foreground">Immutable records ensure data integrity</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mobile First</h3>
                <p className="text-sm text-muted-foreground">Designed for farmers on the go</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fair Pricing</h3>
                <p className="text-sm text-muted-foreground">Smart contracts ensure transparency</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sustainable</h3>
                <p className="text-sm text-muted-foreground">Supporting eco-friendly farming</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple steps to connect farmers with consumers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Register Product</h3>
                <p className="text-muted-foreground">Farmers register their produce on the blockchain with all relevant details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Generate QR Code</h3>
                <p className="text-muted-foreground">System creates unique QR codes linking to blockchain records</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Consumer Scans</h3>
                <p className="text-muted-foreground">Consumers scan QR codes to verify authenticity and trace origin</p>
              </div>
            </div>
          </div>
        </section>
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

export default Home;