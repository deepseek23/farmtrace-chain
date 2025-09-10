import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share } from "lucide-react";

interface QRCodeGeneratorProps {
  productData: {
    id: string;
    name: string;
    farmer: string;
    location: string;
    harvestDate: string;
    blockchainHash: string;
  };
}

const QRCodeGenerator = ({ productData }: QRCodeGeneratorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    if (canvasRef.current && productData) {
      const qrData = {
        productId: productData.id,
        verificationUrl: `${window.location.origin}/verify/${productData.id}`,
        blockchain: productData.blockchainHash,
        timestamp: Date.now()
      };

      QRCode.toCanvas(canvasRef.current, JSON.stringify(qrData), {
        width: 256,
        margin: 2,
        color: {
          dark: "#2d5016", // Using our primary green
          light: "#ffffff"
        }
      }).then(() => {
        if (canvasRef.current) {
          setQrCodeUrl(canvasRef.current.toDataURL());
        }
      }).catch((err) => {
        console.error("QR Code generation failed:", err);
      });
    }
  }, [productData]);

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement("a");
      link.href = qrCodeUrl;
      link.download = `QR_${productData.name.replace(/\s+/g, "_")}_${productData.id}.png`;
      link.click();
    }
  };

  const shareQRCode = async () => {
    if (navigator.share && qrCodeUrl) {
      try {
        const response = await fetch(qrCodeUrl);
        const blob = await response.blob();
        const file = new File([blob], `QR_${productData.name}.png`, { type: "image/png" });
        
        await navigator.share({
          title: `QR Code for ${productData.name}`,
          text: `Verify this product on FarmChain`,
          files: [file]
        });
      } catch (error) {
        console.error("Error sharing QR code:", error);
        // Fallback to copying URL
        navigator.clipboard.writeText(`${window.location.origin}/verify/${productData.id}`);
      }
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-lg">Product QR Code</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="p-4 bg-white rounded-lg shadow-inner">
            <canvas 
              ref={canvasRef} 
              className="border border-border rounded"
            />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-foreground">{productData.name}</p>
          <p className="text-xs text-muted-foreground">ID: {productData.id}</p>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={downloadQRCode}
            className="flex-1"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={shareQRCode}
            className="flex-1"
          >
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;