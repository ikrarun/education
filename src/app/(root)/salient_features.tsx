import AnimatedContainer from '@/components/animations/animatedContainer';
import { Card, CardContent } from '@/components/ui/card';
import {
	BookOpen,
	Clock,
	Globe,
	Shield,
	Sparkles,
	UserCheck,
} from 'lucide-react';

export default function EduKationSalientFeatures() {
	const features = [
		{
			icon: <Sparkles className='h-8 w-8 text-yellow-500' />,
			title: '100% Free',
			description:
				'No hidden costs or premium features. Quality education accessible to all.',
		},
		{
			icon: <UserCheck className='h-8 w-8 text-green-500' />,
			title: 'Smart Matching',
			description:
				'Our AI-powered system connects you with the perfect learning partners.',
		},
		{
			icon: <Clock className='h-8 w-8 text-blue-500' />,
			title: 'Flexible Scheduling',
			description:
				'Learn or teach anytime, anywhere. Fit education into your lifestyle.',
		},
		{
			icon: <BookOpen className='h-8 w-8 text-purple-500' />,
			title: 'Diverse Subjects',
			description:
				'From academic topics to practical skills, find the knowledge you seek.',
		},
		{
			icon: <Globe className='h-8 w-8 text-red-500' />,
			title: 'Global Community',
			description:
				'Connect with learners and educators worldwide. Expand your horizons.',
		},
		{
			icon: <Shield className='h-8 w-8 text-indigo-500' />,
			title: 'Safe & Secure',
			description:
				'Your privacy and safety are our top priorities. Learn with peace of mind.',
		},
	];

	return (
		<section className='mt-12 flex w-full flex-col items-center justify-center'>
			<h2 className='mb-8 text-center text-4xl font-semibold'>
				Why Choose EduKation?
			</h2>
			<AnimatedContainer
				onetime='yes'
				className='grid h-fit w-full gap-2 sm:grid-cols-2 md:gap-3 lg:grid-cols-3'
			>
				{features.map((feature, index) => (
					<Card
						key={index}
						className='h-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg'
					>
						<CardContent className='flex h-full flex-col items-center p-6 text-center'>
							<div className='mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-4'>
								{feature.icon}
							</div>
							<h3 className='mb-2 text-xl font-medium'>{feature.title}</h3>
							<p className='text-muted-foreground'>{feature.description}</p>
						</CardContent>
					</Card>
				))}
			</AnimatedContainer>
		</section>
	);
}
