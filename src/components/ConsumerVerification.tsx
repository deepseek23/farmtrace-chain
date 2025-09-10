import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { QrCode, Camera, Shield, MapPin, Calendar, User, DollarSign } from "lucide-react";
import { useState } from "react";

const ConsumerVerification = () => {
  const [scannedProduct, setScannedProduct] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // Mock product data that would come from blockchain
  const mockProductData = {
    id: "FARM-001-TOM-2024",
    name: "Organic Roma Tomatoes",
    farmer: "Maria Gonzalez",
    farmName: "Sunshine Organic Farm",
    location: "Salinas Valley, CA",
    harvestDate: "2024-01-08",
    quality: "Grade A",
    price: "₹3.50/kg",
    certifications: ["USDA Organic", "Non-GMO"],
    blockchainHash: "0x7f9c8e5a3b2d1f4e6a9c8b5e2d1a4f7e",
    supplyChain: [
      { stage: "Harvested", date: "2024-01-08", location: "Farm Block A-1" },
      { stage: "Processed", date: "2024-01-09", location: "Processing Facility" },
      { stage: "Packaged", date: "2024-01-09", location: "Distribution Center" },
      { stage: "Retail Ready", date: "2024-01-10", location: "Current Location" }
    ]
  };

  const handleScan = () => {
    setIsScanning(true);
    // Simulate QR code scan
    setTimeout(() => {
      setScannedProduct(mockProductData);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <section id="consumer-verification" className="py-16 bg-background">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Verify Your Produce</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scan QR codes to access complete product history and verify authenticity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!scannedProduct ? (
            // QR Scanner Interface
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <QrCode className="mr-2 h-6 w-6 text-trust" />
                  Scan Product QR Code
                </CardTitle>
                <CardDescription>
                  Point your camera at the QR code on your produce packaging
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mx-auto w-64 h-64 border-2 border-dashed border-muted-foreground/50 rounded-lg flex items-center justify-center bg-muted/20">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="animate-pulse">
                        <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                      </div>
                      <p className="text-sm text-muted-foreground">Scanning...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <QrCode className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Position QR code here</p>
                    </div>
                  )}
                </div>

                <Button 
                  variant="consumer" 
                  size="lg"
                  onClick={handleScan}
                  disabled={isScanning}
                >
                  <Camera className="mr-2 h-5 w-5" />
                  {isScanning ? "Scanning..." : "Start QR Scan"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            // Product Information Display
            <div className="space-y-6">
              {/* Product Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-foreground">{scannedProduct.name}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Product ID: {scannedProduct.id}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success">
                      <Shield className="mr-1 h-4 w-4" />
                      Verified
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-muted-foreground mr-3" />
                        <div>
                          <p className="font-medium text-foreground">{scannedProduct.farmer}</p>
                          <p className="text-sm text-muted-foreground">{scannedProduct.farmName}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
                        <div>
                          <p className="font-medium text-foreground">Origin</p>
                          <p className="text-sm text-muted-foreground">{scannedProduct.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-muted-foreground mr-3" />
                        <div>
                          <p className="font-medium text-foreground">Harvest Date</p>
                          <p className="text-sm text-muted-foreground">{scannedProduct.harvestDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-muted-foreground mr-3" />
                        <div>
                          <p className="font-medium text-foreground">Fair Price</p>
                          <p className="text-sm text-muted-foreground">{scannedProduct.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                    <div className="flex gap-2">
                      {scannedProduct.certifications.map((cert, index) => (
                        <Badge key={index} variant="secondary">{cert}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Supply Chain Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Supply Chain Journey</CardTitle>
                  <CardDescription>
                    Complete traceability from farm to your table
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scannedProduct.supplyChain.map((stage, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-foreground">{stage.stage}</p>
                            <p className="text-sm text-muted-foreground">{stage.date}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{stage.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Blockchain Verification */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="h-8 w-8 text-trust mr-4" />
                      <div>
                        <p className="font-semibold text-foreground">Blockchain Verified</p>
                        <p className="text-sm text-muted-foreground">Tamper-proof record</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-trust/10 text-trust border-trust">
                      Hash: {scannedProduct.blockchainHash.substring(0, 10)}...
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setScannedProduct(null)}
                  className="flex-1"
                >
                  Scan Another Product
                </Button>
                <Button variant="consumer" className="flex-1">
                  Share Verification
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsumerVerification;