import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { QrCode, Plus, Package, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";

const FarmerDashboard = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    location: ""
  });

  const [products] = useState([
    {
      id: "1",
      name: "Organic Tomatoes",
      quantity: "50 kg",
      price: "₹3.50/kg",
      status: "Harvested",
      location: "Farm Block A-1",
      qrGenerated: true
    },
    {
      id: "2", 
      name: "Fresh Spinach",
      quantity: "25 kg",
      price: "₹2.80/kg",
      status: "Processing",
      location: "Farm Block B-2",
      qrGenerated: false
    }
  ]);

  return (
    <section id="farmer-dashboard" className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Farmer Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage your produce, generate QR codes, and track your products through the supply chain
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Add New Product */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="mr-2 h-5 w-5 text-primary" />
                Add New Product
              </CardTitle>
              <CardDescription>
                Register your fresh produce on the blockchain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input
                    id="product-name"
                    placeholder="e.g., Organic Tomatoes"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 50 kg"
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price per unit</Label>
                  <Input
                    id="price"
                    placeholder="e.g., ₹3.50/kg"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="location">Farm Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Block A-1"
                    value={newProduct.location}
                    onChange={(e) => setNewProduct({...newProduct, location: e.target.value})}
                  />
                </div>
              </div>

              <Button variant="farmer" className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                Register on Blockchain
              </Button>
            </CardContent>
          </Card>

          {/* Current Products */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-5 w-5 text-primary" />
                Your Products
              </CardTitle>
              <CardDescription>
                Track and manage your registered products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 rounded-lg border bg-background">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{product.name}</h4>
                        <Badge variant={product.status === "Harvested" ? "default" : "secondary"}>
                          {product.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{product.quantity} • {product.price}</p>
                      <p className="text-xs text-muted-foreground">{product.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {product.qrGenerated ? (
                        <Badge variant="outline" className="text-success border-success">
                          QR Ready
                        </Badge>
                      ) : (
                        <Button variant="outline" size="sm">
                          <QrCode className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">Products Registered</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-success" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-foreground">₹2,847</p>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <QrCode className="h-8 w-8 text-trust" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-foreground">18</p>
                  <p className="text-sm text-muted-foreground">QR Codes Scanned</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FarmerDashboard;