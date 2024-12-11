import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, GraduationCap } from "lucide-react";
import FeaturedSection from "./featured_section";
import AnimatedContainer from "@/components/animations/animatedContainer";
import Testimonial from "./testimonial";
import testimonial from "@/store/testimonial.json";
import { BetterButton } from "@/components/ui/betterbutton";

const ListItem = ({ text }: { text: string }) => (
	<li className='inline-flex items-center'>
		<span className='p-2 mr-2 rounded-full bg-primary text-background shadow-md flex items-center justify-center'>
			<Check strokeWidth={4} className='w-3 h-3' />
		</span>
		<span className='text-base font-normal text-muted-foreground'>{text}</span>
	</li>
);

// Hero Section
const HeroSection = () => (
	<main className='flex mt-24 flex-col items-center justify-center w-full text-center pb-3'>
		<h1 className='text-6xl mb-8'>
			<span className='bg-clip-text font-bold '>Welcome to EduKation!</span>
		</h1>
		<h2 className='text-2xl font-normal text-muted-foreground'>
			Where Learning Meets Opportunity!
		</h2>
	</main>
);

// Call to Action Section
const CallToAction = () => (
	<div className='flex flex-col items-center justify-center w-fit mx-auto'>
		<div className='flex md:flex-row w-fit flex-col mx-auto mt-4 gap-2'>
			<BetterButton
				href='/filldetail'
				size={"lg"}
				className='inline-flex w-full px-4 pr-4 text-2xl items-center gap-2'>
				<h1 className='text-lg font-normal'>I am a Student</h1>
			</BetterButton>
			<BetterButton
				size={"lg"}
				href='/about'
				className='inline-flex w-full px-4 text-2xl items-center gap-2'>
				<h1 className='text-lg font-normal'>I am a Teacher</h1>
			</BetterButton>
		</div>

		<div className='text-base flex flex-col md:flex-row gap-4 w-full mx-auto font-normal text-start mt-8 md:mt-16'>
			<ListItem text='100% Free, No Hidden Fees' />
			<ListItem text='Free to use' />
			<ListItem text='No Credit Card Required' />
		</div>
	</div>
);

// Description Section
const DescriptionSection = () => (
	<section className='flex w-full flex-col items-center justify-center grow'>
		<Card className='w-full overflow-hidden rounded-lg shadow-lg'>
			<CardHeader className=' bg-primary text-primary-foreground p-6'>
				<CardTitle className='flex items-center text-center justify-center text-base md:text-2xl font-medium'>
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
			onetime='no'
			className='grid gap-3 h-full md:grid-cols-2 w-full'>
			{testimonial.map((testimonial, index) => (
				<Testimonial
					key={index}
					author={testimonial.author}
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
