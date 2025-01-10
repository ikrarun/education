import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BetterButton } from "@/components/ui/betterbutton";
import hero from "@/images/hero.webp";

// const hero = `https://cdni.iconscout.com/illustration/premium/thumb/boy-doing-online-reading-book-illustration-download-in-svg-png-gif-file-formats--e-learning-study-education-pack-school-illustrations-10098509.png?f=webp`;

export default function ResponsiveHero() {
	return (
		<main className='container mx-auto px-4 py-12 md:py-24 lg:py-32'>
			<div
				className='flex flex-col
			 items-start justify-between gap-8 md:flex-row'>
				{/* Left Section - Content */}
				<div className='flex flex-col w-full items-start justify-start space-y-6'>
					<h1 className='font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl'>
						High-Quality Teaching, <br /> Low-Cost Learning.
					</h1>
					<h2 className='text-lg font-medium text-muted-foreground '>
						Connect with skilled tutors who fit your budget and learning goals.
						Start your journey toward success today.
					</h2>
					<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
						<BetterButton href="/about"  variant='outline' className='w-full sm:w-auto'>
							Learn More
						</BetterButton>
						<BetterButton className='w-full sm:w-auto'>
							Try For Free <ArrowRight className='ml-2' size={16} />
						</BetterButton>
					</div>
				</div>

				{/* Right Section - Image */}
				<div className='relative flex flex-col justify-center  aspect-square w-full max-w-md mx-auto'>
					<Image
						src={hero}
						alt='Hero Image'
						fill
						unoptimized
						objectFit='contain'
						className='rounded-lg  px-12 md:pb-0'
						priority
					/>
				</div>
			</div>
		</main>
	);
}
