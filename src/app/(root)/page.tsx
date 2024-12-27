import AnimatedContainer from '@/components/animations/animatedContainer';
import logo from '@/components/providers/logo.svg';
import { BetterButton } from '@/components/ui/betterbutton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import testimonial from '@/store/testimonial.json';
import { Check, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import SalientFeatures from './salient_features';
import Testimonial from './testimonial';

const ListItem = ({ text }: { text: string }) => (
	<li className='inline-flex items-center'>
		<span className='mr-2 flex items-center justify-center rounded-full bg-primary p-2 text-background shadow-md'>
			<Check strokeWidth={4} className='h-3 w-3' />
		</span>
		<span className='text-base font-normal text-muted-foreground'>{text}</span>
	</li>
);

// Hero Section
const HeroSection = () => (
	<main className='mt-12 sm:mt-16 md:mt-24 flex w-full flex-col items-center justify-center pb-3 text-center px-4'>
		<h1 className='mb-4 sm:mb-6 md:mb-8 mx-auto text-4xl sm:text-5xl md:text-6xl'>
			<span className='bg-clip-text  sm:ml-8 ml-0 inline-flex items-center mx-auto font-bold flex-wrap justify-center'>
				Welcome to
				<span className='relative inline-flex items-center'>
					<Image
						src={logo}
						alt='EduKation Logo'
						width={72}
						height={72}
						className='w-12 h-12 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px]'
						priority
					/>
					<span className='relative'>duKation!</span>
				</span>
			</span>
		</h1>
		<h2 className='text-xl sm:text-2xl font-normal text-muted-foreground'>
			Where Learning Meets Opportunity!
		</h2>
		<p className='mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-muted-foreground max-w-sm sm:max-w-xl md:max-w-2xl mx-auto'>
			Join our community of learners and educators. Experience personalized learning journeys 
			tailored to your unique needs and aspirations.
		</p>
	</main>
);

// Call to Action Section
const CallToAction = () => (
	<div className='mx-auto flex w-fit flex-col items-center justify-center'>
		<div className='mx-auto mt-4 flex w-fit flex-col gap-2 md:flex-row'>
			<BetterButton
				href='/filldetail'
				size={'lg'}
				className='inline-flex w-full items-center gap-2 px-4 pr-4 text-2xl'
			>
				<h1 className='text-lg font-normal'>I am a Student</h1>
			</BetterButton>
			<BetterButton
				size={'lg'}
				href='/about'
				className='inline-flex w-full items-center gap-2 px-4 text-2xl'
			>
				<h1 className='text-lg font-normal'>I am a Teacher</h1>
			</BetterButton>
		</div>

		<div className='mx-auto mt-8 flex w-full flex-col gap-4 text-start text-base font-normal md:mt-16 md:flex-row'>
			<ListItem text='100% Free, No Hidden Fees' />
			<ListItem text='Free to use' />
			<ListItem text='No Credit Card Required' />
		</div>
	</div>
);

// Description Section
const DescriptionSection = () => (
	<section className='flex w-full grow flex-col items-center justify-center'>
		<Card className='w-full overflow-hidden rounded-lg shadow-lg'>
			<CardHeader className='bg-primary p-6 text-primary-foreground'>
				<CardTitle className='flex items-center justify-center text-center text-base font-medium md:text-2xl'>
					<GraduationCap className='mr-2 hidden md:flex md:h-6 md:w-6' />
					Connecting Students with the Perfect Teachers
				</CardTitle>
			</CardHeader>
			<CardContent className='bg-card p-6 text-card-foreground'>
				<p className='text-center text-base'>
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
	<section className='my-8 flex w-full flex-col items-start gap-6 text-start'>
		<h2 className='mb-4 text-3xl font-semibold'>What Our Users Are Saying</h2>
		<AnimatedContainer
			onetime='no'
			className='grid h-full w-full gap-3 md:grid-cols-2'
		>
			{testimonial.map((testimonial, index) => (
				<Testimonial
					key={index}
					author={testimonial.author}
					rating={testimonial.rating}
				>
					{testimonial.message}
				</Testimonial>
			))}
		</AnimatedContainer>
	</section>
);

export default function Home() {
	return (
		<div className='mx-auto flex min-h-screen w-full max-w-6xl grow flex-col items-center justify-center gap-12 px-4 py-8 md:py-16'>
			{/* Hero Section */}
			<HeroSection />

			{/* Call to Action Section */}
			<CallToAction />

			{/* Description Section */}
			<DescriptionSection />

			{/* Features Section */}
			<SalientFeatures />

			{/* Testimonial Section */}
			<TestimonialSection />
		</div>
	);
}
