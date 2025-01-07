import donation_illustration from "@/components/donation_sticker.svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Coffee, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function DonatePage() {
	
	return (
		<div className='flex h-full w-full grow flex-col items-center justify-center gap-6 bg-background p-4'>
			{/* Vision Statement */}
			<div className='w-full max-w-[1000px] p-6 text-center'>
				<p className='text-muted-foreground'>
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
						<div className='text-sm text-muted-foreground'>
							Need help?{" "}
							<Link href='/contact' className='text-primary hover:underline'>
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
							<p className='text-muted-foreground'>
								Help us kickstart our mission to make education accessible to
								all
							</p>
							<ul className='space-y-2 text-sm text-muted-foreground'>
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
						<Button className='h-11 w-full text-base' asChild>
							<Link href='/payment'>Support Our Initiative</Link>
						</Button>

						{/* Footer */}
						<p className='text-center text-sm text-muted-foreground'>
							By donating, you agree to our{" "}
							<Link href='/terms' className='text-primary hover:underline'>
								Terms of Service
							</Link>
						</p>
					</div>
				</div>
			</Card>

			{/* Vision Cards */}
			<div className='grid w-full max-w-[1000px] grid-cols-2 gap-4 md:grid-cols-4'>
				{[
					{ icon: Users, label: "Target Students", value: "Starting Small" },
					{
						icon: BookOpen,
						label: "Learning Focus",
						value: "Quality Education",
					},
					{ icon: Heart, label: "Our Mission", value: "Equal Access" },
					{ icon: Coffee, label: "Current Phase", value: "Getting Started" },
				].map((stat, index) => (
					<Card
						key={index}
						className='flex flex-col items-center gap-2 p-4 text-center'>
						<stat.icon className='h-6 w-6 text-primary' />
						<p className='text-lg font-semibold'>{stat.value}</p>
						<p className='text-sm text-muted-foreground'>{stat.label}</p>
					</Card>
				))}
			</div>
		</div>
	);
}
