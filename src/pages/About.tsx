import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Shield, 
  Smartphone, 
  Globe, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle 
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-earth/20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/10 text-primary">
                About FarmChain
              </Badge>
              
              <h1 className="text-4xl font-bold text-foreground mb-6 sm:text-5xl">
                Revolutionizing Agriculture with
                <span className="bg-gradient-to-r from-primary to-earth bg-clip-text text-transparent">
                  {" "}Blockchain Technology
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                FarmChain bridges the gap between farmers and consumers through transparent, 
                verifiable supply chains powered by blockchain technology. We're building 
                trust in every transaction and bite.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="mr-2 h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a transparent, fair, and sustainable agricultural ecosystem 
                    where farmers receive fair compensation for their work and consumers 
                    can trust the origin and quality of their food. We believe technology 
                    should serve humanity, not replace it.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-6 w-6 text-trust" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every piece of produce tells its complete story - 
                    from the soil it grew in to the hands that harvested it. Where 
                    rural farmers have equal access to global markets and consumers 
                    make informed choices about their food.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Makes FarmChain Different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built specifically for agricultural supply chains with farmers in mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-trust mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Tamper-Proof Records</h3>
                  <p className="text-sm text-muted-foreground">
                    Blockchain technology ensures that once data is recorded, it cannot be altered or faked
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Mobile-First Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for smartphones and tablets, perfect for farmers working in the field
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Rural Connectivity</h3>
                  <p className="text-sm text-muted-foreground">
                    Works even in low connectivity areas with offline-first capabilities
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-earth mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fair Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart contracts eliminate middlemen and ensure farmers get fair prices
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with and for farming communities, not imposed by outsiders
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-trust mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive tracking ensures only the highest quality products reach consumers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Empowering Farmers</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Direct Market Access</h4>
                      <p className="text-sm text-muted-foreground">Connect directly with consumers and retailers, eliminating costly middlemen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Verified Credentials</h4>
                      <p className="text-sm text-muted-foreground">Build trust with blockchain-verified farming practices and certifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Fair Compensation</h4>
                      <p className="text-sm text-muted-foreground">Smart contracts ensure timely payments at agreed-upon prices</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Protecting Consumers</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-trust mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Complete Traceability</h4>
                      <p className="text-sm text-muted-foreground">Know exactly where your food comes from and how it was produced</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-trust mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Guarantee</h4>
                      <p className="text-sm text-muted-foreground">Verified quality standards and certifications at every step</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-trust mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Instant Verification</h4>
                      <p className="text-sm text-muted-foreground">Simple QR code scanning provides immediate product authentication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-transparent to-earth/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join the Revolution?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a farmer looking to reach more customers or a consumer wanting to know 
              more about your food, FarmChain is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="farmer" size="lg" asChild>
                <Link to="/farmer">
                  <Users className="mr-2 h-5 w-5" />
                  Start as Farmer
                </Link>
              </Button>
              <Button variant="consumer" size="lg" asChild>
                <Link to="/consumer">
                  <Shield className="mr-2 h-5 w-5" />
                  Verify Products
                </Link>
              </Button>
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

export default About;