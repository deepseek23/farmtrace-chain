import Navigation from "@/components/Navigation";
import FarmerDashboard from "@/components/FarmerDashboard";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, TrendingUp } from "lucide-react";

const Farmer = () => {
  // Mock farmer profile data
  const farmerProfile = {
    name: "Tarun Munjani",
    farmName: "Sunshine Organic Farm",
    location: "Kaman, Vasai",
    memberSince: "2023",
    totalProducts: 24,
    revenue: 2847,
    rating: 4.8
  };

  // Mock product for QR code generation
  const mockProduct = {
    id: "FARM-001-TOM-2024",
    name: "Organic Roma Tomatoes",
    farmer: farmerProfile.name,
    location: farmerProfile.location,
    harvestDate: "2024-01-08",
    blockchainHash: "0x7f9c8e5a3b2d1f4e6a9c8b5e2d1a4f7e"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="container">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Welcome, {farmerProfile.name}</h1>
                <p className="text-muted-foreground">{farmerProfile.farmName} • Member since {farmerProfile.memberSince}</p>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success">
                <Leaf className="mr-1 h-4 w-4" />
                Verified Farmer
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{farmerProfile.totalProducts}</p>
                      <p className="text-sm text-muted-foreground">Products Listed</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">₹{farmerProfile.revenue}</p>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{farmerProfile.rating}/5.0</p>
                      <p className="text-sm text-muted-foreground">Customer Rating</p>
                    </div>
                    <div className="text-2xl">⭐</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FarmerDashboard />
            </div>
            
            <div className="space-y-6">
              {/* QR Code Generator */}
              <Card>
                <CardHeader>
                  <CardTitle>Latest QR Code</CardTitle>
                  <CardDescription>
                    Most recent product registration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <QRCodeGenerator productData={mockProduct} />
                </CardContent>
              </Card>

              {/* Tips & Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Farmer Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">📸 Photo Quality</h4>
                    <p className="text-sm text-muted-foreground">Take clear photos in natural light for better consumer appeal</p>
                  </div>
                  
                  <div className="p-4 bg-success/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">💰 Pricing Strategy</h4>
                    <p className="text-sm text-muted-foreground">Research local market rates to set competitive prices</p>
                  </div>
                  
                  <div className="p-4 bg-trust/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1">🔗 Blockchain Benefits</h4>
                    <p className="text-sm text-muted-foreground">Your verified records build long-term customer trust</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Farmer;