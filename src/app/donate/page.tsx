import donation_illustration from '@/assets/donation_sticker.svg';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Coffee, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const support_link = 'https://payments.cashfree.com/forms/donateEduKation';

export default function DonatePage() {
  return (
    <div className="h-full grow w-full bg-background flex flex-col items-center justify-center p-4 gap-6">
      {/* Vision Statement */}
      <div className="w-full max-w-[1000px] p-6 text-center">
        <p className=" text-muted-foreground">
          &quot;Every journey begins with a single step. Join us in taking the first steps towards educational equality.&quot;
        </p>
        <p className="text-sm font-semibold mt-2">- EduKation Initiative</p>
      </div>

      <Card className="w-full max-w-[1000px] grid md:grid-cols-2 overflow-hidden">
        {/* Left Section - Illustration */}
        <div className="relative bg-muted p-6 hidden md:flex items-center justify-center">
          <div className="relative w-full aspect-square">
            <Image 
              src={donation_illustration} 
              alt="Donation Illustration"
              fill
              className="object-contain p-6"
              priority
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="p-8 md:p-12 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <Coffee className="h-8 w-8 text-primary" />
            <div className="text-sm text-muted-foreground">
              Need help? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold tracking-tight">Be an Early Supporter</h1>
              <p className="text-muted-foreground">Help us kickstart our mission to make education accessible to all</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" /> Be part of our founding supporters
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" /> Help shape our early initiatives
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" /> Support our pilot programs
                </li>
              </ul>
            </div>

            {/* Donation Button */}
            <Button 
              className="w-full h-11 text-base"
              asChild
            >
              <Link href={support_link}>
                Support Our Initiative
              </Link>
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">
              By donating, you agree to our{' '}
              <Link href="/terms" className="hover:underline text-primary">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </Card>

      {/* Vision Cards */}
      <div className="w-full max-w-[1000px] grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Users, label: "Target Students", value: "Starting Small" },
          { icon: BookOpen, label: "Learning Focus", value: "Quality Education" },
          { icon: Heart, label: "Our Mission", value: "Equal Access" },
          { icon: Coffee, label: "Current Phase", value: "Getting Started" },
        ].map((stat, index) => (
          <Card key={index} className="p-4 text-center flex flex-col items-center gap-2">
            <stat.icon className="h-6 w-6 text-primary" />
            <p className="font-semibold text-lg">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
