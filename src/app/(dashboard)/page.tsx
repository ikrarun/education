import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Star } from "lucide-react";
import Featured_section from "./featured_section";
import Link from "next/link";

import { Dela_Gothic_One } from "next/font/google";
import MotionButton from "./motionButton";

const delaGothic = Dela_Gothic_One({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-dela-gothic",
});
function Home() {
	return (
		<div className='flex flex-col gap-12 max-w-6xl grow items-center justify-center mx-auto w-full min-h-screen px-4 py-8 md:py-16'>
			{/* Hero Section */}
			<main className='flex select-none flex-col items-center justify-center w-full text-center py-16 md:py-24'>
				<h2 className='text-xl font-medium text-muted-foreground mb-4'>
					Where Learning Meets Opportunity—For Free!
				</h2>
				<h1
					className={`${delaGothic.variable} font-dela-gothic text-4xl md:text-7xl font-bold mb-8`}>
					<span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>
						Welcome to EduKation!
					</span>
				</h1>

				<section className='flex flex-col items-center w-full max-w-md mb-8'>
					<h2 className='text-xl text-muted-foreground mb-4'>
						Being a student is easy. Learning requires actual work.
					</h2>
					<Separator className='mb-4' />
					<p className='text-sm text-muted-foreground italic'>
						— William Crawford
					</p>
				</section>

				<MotionButton className='text-2xl bg-black px-4 py-2 text-white rounded-lg'>
					<Link href='/about'>Get Started</Link>
				</MotionButton>
			</main>
			{/* Description Section */}

			<div className='flex w-full flex-col items-center justify-center grow'>
				<Card className='w-full overflow-hidden rounded-lg shadow-lg'>
					<CardHeader className='bg-primary text-primary-foreground p-6'>
						<CardTitle className='flex items-center text-center justify-center text-base md:text-2xl font-bold'>
							<GraduationCap className='mr-2 md:flex hidden md:h-6 md:w-6' />
							Connecting Students with the Perfect Teachers
						</CardTitle>
					</CardHeader>
					<CardContent className='p-6 bg-card text-card-foreground'>
						<p className='text-lg text-center'>
							EduKation makes it easy for students to find their ideal teacher,
							and for teachers to connect with eager learners. Create a profile,
							browse, and start your journey today. No charges. No barriers.
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Features Section */}
			<Featured_section />

			<Separator />

			{/* Testimonial Section */}
			<section className='flex flex-col my-8 gap-6 items-start text-start w-full'>
				<h2 className='text-3xl font-bold mb-4'>What Our Users Are Saying</h2>
				<div className='grid gap-6 md:grid-cols-2 w-full'>
					<Card className='p-6 bg-gradient-to-br from-pink-100 to-purple-100'>
						<div className='flex items-center mb-4'>
							<Star
								fill='rgb(234 179 8)'
								className='text-yellow-500 h-5 w-5 mr-1'
							/>
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5 mr-1' />
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5 mr-1' />
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5 mr-1' />
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5' />
						</div>
						<p className='text-lg mb-4'>
							&#34;I found the perfect tutor for my exam prep. EduKation&apos;s
							matching system is incredibly accurate, and the flexibility of
							scheduling is a game-changer!&quot;
						</p>
						<p className='font-semibold'>
							— Sarah K., Computer Science Student
						</p>
					</Card>
					<Card className='p-6 bg-gradient-to-br from-blue-100 to-green-100'>
						<div className='flex items-center mb-4'>
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5 mr-1' />
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5 mr-1' />
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5 mr-1' />
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5 mr-1' />
							<Star fill='rgb(234 179 8)' className='text-yellow-500 h-5 w-5' />
						</div>
						<p className='text-lg mb-4'>
							&quot;As a teacher, I&apos;ve connected with so many passionate
							students from around the world. The platform&lsquo;s ease of use
							and the fact that it&lsquo;s free makes it accessible to
							everyone!&quot;
						</p>
						<p className='font-semibold'>
							— Prof. Michael R., Literature Expert
						</p>
					</Card>
				</div>
			</section>
		</div>
	);
}

export default Home;
