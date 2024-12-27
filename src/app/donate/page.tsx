import FinalCTA from "@/components/landing/final-cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee } from "lucide-react";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function DonatePage() {
  return (
    <div className="relative h-full grow w-full overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container px-4 py-12 mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Support My Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            If you find my projects helpful and want to support their continued development, consider buying me a coffee!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-border/50 bg-gradient-to-br from-card/50 to-card hover:border-primary/50 transition-colors">
            <CardContent className="p-6 flex flex-col items-center">
              <QRCode value="https://payments-test.cashfree.com/forms/supportkr" className="h-48 w-48 mb-6 text-primary" />
              <h2 className="text-2xl font-semibold mb-2">Scan QR Code</h2>
              <p className="text-muted-foreground text-center mb-4">
                Scan this QR code with your phone to donate directly
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border/50 bg-gradient-to-br from-card/50 to-card hover:border-primary/50 transition-colors">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <Coffee className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Buy Me a Coffee</h2>
              <p className="text-muted-foreground text-center mb-6">
                Your support helps me create more awesome open-source projects!
              </p>
              <Button asChild size="lg" className="w-full">
                <Link href="https://payments-test.cashfree.com/forms/supportkr" target="_blank">
                  Support My Work
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Thank you for your generous support! ❤️
          </p>
              </div>
      </div>
              <FinalCTA />
    </div>
  );
}
