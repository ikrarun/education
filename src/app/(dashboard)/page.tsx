import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, GraduationCap } from "lucide-react";
import { PiChalkboardTeacherDuotone, PiStudentDuotone } from "react-icons/pi";
import FeaturedSection from "./featured_section";
import Link from "next/link";
import MotionButton from "./motionButton";
import AnimatedContainer from "@/components/animations/animatedContainer";
import Testimonial, { GradientColor } from "./testimonial";
import testimonial from "@/store/testimonial.json";

const getRandomGradientColor = (): GradientColor => {
	const colors = Object.values(GradientColor);
	return colors[Math.floor(Math.random() * colors.length)];
};

// Reusable ListItem component for checklist items
const ListItem = ({ text }: { text: string }) => (
	<li className='inline-flex items-center'>
		<span className='p-2 mr-2 bg-amber-400 rounded-full shadow-md flex items-center justify-center'>
			<Check strokeWidth={4} className='w-3 h-3 text-black' />
		</span>
		<span className='text-base font-normal text-gray-700'>{text}</span>
	</li>
);

// Hero Section
const HeroSection = () => (
	<main className='flex select-none mt-24 flex-col items-center justify-center w-full text-center py-16 md:py-24'>
		<h1 className='text-6xl mb-8'>
			<span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-amber-500 via-red-600/80 to-amber-500'>
				Welcome to EduKation!
			</span>
		</h1>
		<h2 className='text-2xl font-normal text-muted-foreground mb-4'>
			Learning Meets Opportunity!
		</h2>
	</main>
);

// Call to Action Section
const CallToAction = () => (
	<AnimatedContainer gapInItems={0.2} className='flex flex-col items-center justify-center w-fit mx-auto'>
		<AnimatedContainer
			gapInItems={0.2}
			className='flex md:flex-row flex-col mx-auto mt-8 gap-2'>
			<Link href='/filldetail'>
				<MotionButton className='group bg-black/70 transition-all duration-300 ease-in-out hover:bg-black inline-flex gap-1'>
					I am a Student
					<PiStudentDuotone className='h-8 w-8' />
				</MotionButton>
			</Link>
			<Link href='/login'>
				<MotionButton className='group inline-flex bg-black/70 hover:bg-black transition-all duration-300 gap-1'>
					I am a Teacher
					<PiChalkboardTeacherDuotone stroke='white' className='w-8 h-8' />
				</MotionButton>
			</Link>
		</AnimatedContainer>

		<AnimatedContainer
			startAfter={0.25}
			className='text-base flex flex-col md:flex-row gap-4 w-full mx-auto font-normal text-start text-gray-800 mt-8 md:mt-16'>
			<ListItem text='100% Free, No Hidden Fees' />
			<ListItem text='No Credit Card Required' />
			<ListItem text='Free to use' />
		</AnimatedContainer>
	</AnimatedContainer>
);

// Description Section
const DescriptionSection = () => (
	<section className='flex w-full flex-col items-center justify-center grow'>
		<Card className='w-full overflow-hidden rounded-lg shadow-lg'>
			<CardHeader className='bg-amber-400 text-primary-foreground p-6'>
				<CardTitle className='flex items-center text-center justify-center text-base md:text-2xl text-black font-medium'>
					<GraduationCap className='mr-2 md:flex hidden md:h-6 md:w-6' />
					Connecting Students with the Perfect Teachers
				</CardTitle>
			</CardHeader>
			<CardContent className='p-6 bg-card text-card-foreground'>
				<p className='text-base text-center'>
					EduKation makes it easy for students to find their ideal teacher, and
					for teachers to connect with eager learners. Create a profile, browse,
					and start your journey today. No charges. No barriers.
				</p>
			</CardContent>
		</Card>
	</section>
);

// Testimonial Section
const TestimonialSection = () => (
	<section className='flex flex-col my-8 gap-6 items-start text-start w-full'>
		<h2 className='text-3xl font-semibold mb-4'>What Our Users Are Saying</h2>
		<AnimatedContainer
			variants={"always"}
			className='grid gap-6 h-full md:grid-cols-2 w-full'>
			{testimonial.map((testimonial, index) => (
				<Testimonial
					key={index}
					author={testimonial.author}
					color={getRandomGradientColor()}
					rating={testimonial.rating}>
					{testimonial.message}
				</Testimonial>
			))}
		</AnimatedContainer>
	</section>
);

export default function Home() {
	return (
		<div className='flex flex-col gap-12 max-w-6xl grow items-center justify-center mx-auto w-full min-h-screen px-4 py-8 md:py-16'>
			{/* Hero Section */}
			<HeroSection />

			{/* Call to Action Section */}
			<CallToAction />

			{/* Description Section */}
			<DescriptionSection />

			{/* Features Section */}
			<FeaturedSection />

			{/* Testimonial Section */}
			<TestimonialSection />
		</div>
	);
}
