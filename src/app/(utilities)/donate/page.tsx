"use client";
import donation_illustration from "@/images/donation_sticker.svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ResponsiveModal as Dialog,
	ResponsiveModalContent as DialogContent,
	ResponsiveModalDescription as DialogDescription,
	ResponsiveModalHeader as DialogHeader,
	ResponsiveModalTitle as DialogTitle,
	ResponsiveModalTrigger as DialogTrigger,
} from "@/components/custom/responsive-modal";
import { BookOpen, Coffee, Heart, SparkleIcon, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PaymentModal from "@/components/paymmentModal";

export default function DonatePage() {
	return (
		<div className='flex h-full w-full grow flex-col items-center justify-center gap-6 bg-background p-4'>
			{/* Vision Statement */}
			<div className='w-full max-w-[1000px] p-6 text-center'>
				<p className=''>
					&quot;Every journey begins with a single step. Join us in taking the
					first steps towards educational equality.&quot;
				</p>
				<p className='mt-2 text-sm font-semibold'>- EduKation Initiative</p>
			</div>

			<Card className='grid w-full max-w-[1000px] overflow-hidden md:grid-cols-2'>
				{/* Left Section - Illustration */}
				<div className='relative hidden items-center justify-center bg-muted p-6 md:flex'>
					<div className='relative aspect-square w-full'>
						<Image
							src={donation_illustration}
							alt='Donation Illustration'
							fill
							className='object-contain p-6'
							priority
						/>
					</div>
				</div>

				{/* Right Section - Content */}
				<div className='relative p-8 md:p-12'>
					{/* Header */}
					<div className='mb-8 flex items-center justify-between'>
						<Coffee className='h-8 w-8 text-primary' />
						<div className='text-sm '>
							Need help?{" "}
							<Link href='/contact' className='underline underline-offset-2 text-secondary-foreground '>
								Contact us
							</Link>
						</div>
					</div>

					{/* Main Content */}
					<div className='space-y-6'>
						<div className='space-y-3'>
							<h1 className='text-2xl font-semibold tracking-tight'>
								Be an Early Supporter
							</h1>
							<p className=''>
								Help us kickstart our mission to make education accessible to
								all
							</p>
							<ul className='space-y-2 text-sm '>
								<li className='flex items-center gap-2'>
									<Heart className='h-4 w-4 text-primary' /> Be part of our
									founding supporters
								</li>
								<li className='flex items-center gap-2'>
									<BookOpen className='h-4 w-4 text-primary' /> Help shape our
									early initiatives
								</li>
								<li className='flex items-center gap-2'>
									<Users className='h-4 w-4 text-primary' /> Support our pilot
									programs
								</li>
							</ul>
						</div>

						{/* Donation Button */}
						<Dialog>
							<DialogTrigger asChild>
								<Button
									variant='default'
									effect={"expandIcon"}
									iconPlacement='right'
									icon={SparkleIcon}>
									Support Our Initiative
								</Button>
							</DialogTrigger>
							<DialogContent
								onInteractOutside={(e) => {
									e.preventDefault();
								}}>
								<DialogHeader>
									<DialogTitle>Support Our Initiative</DialogTitle>
									<DialogDescription>
										Support our mission to make education accessible to all
									</DialogDescription>
								</DialogHeader>

								<PaymentModal />
							</DialogContent>
						</Dialog>

						{/* Footer */}
						<p className='text-start text-sm '>
							By donating, you agree to our{" "}
							<Link href='/terms' className='underline underline-offset-2 text-secondary-foreground hover:underline'>
								Terms of Service
							</Link>
						</p>
					</div>
				</div>
			</Card>

			
		</div>
	);
}
