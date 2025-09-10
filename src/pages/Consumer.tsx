import Navigation from "@/components/Navigation";
import ConsumerVerification from "@/components/ConsumerVerification";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, MapPin, Calendar } from "lucide-react";

const Consumer = () => {
  // Mock recent scans data
  const recentScans = [
    {
      id: "SCAN-001",
      productName: "Organic Roma Tomatoes",
      farmer: "Maria Gonzalez",
      scanDate: "2024-01-10",
      origin: "Salinas Valley, CA",
      verified: true
    },
    {
      id: "SCAN-002", 
      productName: "Fresh Spinach",
      farmer: "John Smith",
      scanDate: "2024-01-09",
      origin: "Monterey, CA",
      verified: true
    },
    {
      id: "SCAN-003",
      productName: "Organic Carrots",
      farmer: "Lisa Chen",
      scanDate: "2024-01-08",
      origin: "Watsonville, CA", 
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="container">
          {/* Welcome Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Verification Portal</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scan QR codes to instantly verify product authenticity, trace origins, and ensure quality standards
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Verification Interface */}
            <div className="lg:col-span-2">
              <ConsumerVerification />
            </div>
            
            <div className="space-y-6">
              {/* Verification Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-trust" />
                    Your Verifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Products Scanned</span>
                    <span className="font-semibold text-foreground">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Verified Products</span>
                    <span className="font-semibold text-success">12/12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Trusted Farms</span>
                    <span className="font-semibold text-foreground">8</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Scans */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Verifications</CardTitle>
                  <CardDescription>
                    Your latest product scans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentScans.map((scan) => (
                      <div key={scan.id} className="p-3 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-foreground text-sm">{scan.productName}</h4>
                          {scan.verified && (
                            <Badge variant="outline" className="bg-success/10 text-success border-success text-xs">
                              <Shield className="mr-1 h-3 w-3" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Award className="mr-1 h-3 w-3" />
                            <span>{scan.farmer}</span>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{scan.origin}</span>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>Scanned {scan.scanDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card>
                <CardHeader>
                  <CardTitle>Trust & Safety</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-success/5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-success mr-2" />
                      <h4 className="font-semibold text-foreground">Blockchain Verified</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">All records are immutable and tamper-proof</p>
                  </div>
                  
                  <div className="p-4 bg-trust/5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-trust mr-2" />
                      <h4 className="font-semibold text-foreground">Certified Farmers</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Only verified farmers can register products</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Origin Tracking</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Complete supply chain visibility from farm to table</p>
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

export default Consumer;