import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Check, GraduationCap } from "lucide-react";
import Featured_section from "./featured_section";
import Link from "next/link";

import { Dela_Gothic_One } from "next/font/google";
import MotionButton from "./motionButton";
import ListAnimation from "@/components/animations/listAnimation";
import Testimonial, { GradientColor } from "./testimonial";

const getRandomGradientColor = (): GradientColor => {
	const colors = Object.values(GradientColor); // Get all enum values
	return colors[Math.floor(Math.random() * colors.length)];
};

const delaGothic = Dela_Gothic_One({
	subsets: ["latin"],
	weight: "400",
});

function Home() {
	return (
		<div className='flex flex-col gap-12 max-w-6xl grow items-center justify-center mx-auto w-full min-h-screen px-4 py-8 md:py-16'>
			{/* Hero Section */}
			<main className='flex select-none mt-24 flex-col items-center justify-center w-full text-center py-16 md:py-24'>
				<h1
					className={`${delaGothic.className} font-dela-gothic text-6xl font-bold mb-8`}>
					<span style={{ color: "blue" }} className=''>
						Welcome to EduKation!
					</span>
				</h1>

				<h2 className='text-2xl font-medium text-muted-foreground mb-4'>
					Learning Meets Opportunity!
				</h2>
				<Link
					className='mt-8 group transition-all duration-1000 ease-in-out'
					href='/about'>
					<MotionButton style={{ backgroundColor: "black" }} className='group'>
						Get Started
					</MotionButton>
				</Link>
				<ListAnimation className='text-base flex flex-col md:flex-row gap-2 w-fit mx-auto  font-medium text-start text-muted-foreground mt-4 md:mt-10'>
					<li
						className='inline-flex
					 items-center'>
						<span
							style={{ backgroundColor: "blue" }}
							className='p-2 mr-2 rounded-full'>
							<Check
								rotate={-30}
								stroke='white'
								className='w-3 text-white h-3'
							/>
						</span>
						100% Free
					</li>
					<li
						className='inline-flex
					 items-center'>
						<span
							style={{ backgroundColor: "blue" }}
							className='p-2 mr-2 rounded-full'>
							<Check
								rotate={-30}
								stroke='white'
								className='w-3 text-white h-3'
							/>
						</span>
						No Hidden Fees
					</li>
					<li
						className='inline-flex
					 items-center'>
						<span
							style={{ backgroundColor: "blue" }}
							className='p-2 mr-2 rounded-full'>
							<Check
								rotate={-30}
								stroke='white'
								className='w-3 text-white h-3'
							/>
						</span>
						Free to use
					</li>
				</ListAnimation>
			</main>
			{/* Description Section */}

			<div className='flex w-full flex-col items-center justify-center grow'>
				<Card className='w-full overflow-hidden rounded-lg shadow-lg'>
					<CardHeader className=' bg-blue-800 text-primary-foreground p-6'>
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
					<Testimonial
						color={getRandomGradientColor()}
						author='Prof. John Doe, Physics Teacher'
						rating={4.5}>
						As a teacher, I&apos;ve connected with so many passionate students
						from around the world. The platform&lsquo;s ease of use and the fact
						that it&lsquo;s free makes it accessible to everyone!
					</Testimonial>

					<Testimonial
						color={getRandomGradientColor()}
						author='Prof. Michela R., Literature Expert'
						rating={4}>
						This platform is a game-changer! I have access to a global community
						of learners, and I love the simplicity of setting up my lessons.
					</Testimonial>

					<Testimonial
						color={getRandomGradientColor()}
						author='Prof. Albert Einstein, Physics Genius'
						rating={3.8}>
						What I love most about this platform is the fact that it’s
						accessible to all students, regardless of their background or
						financial situation.
					</Testimonial>
				</div>
			</section>
		</div>
	);
}

export default Home;
