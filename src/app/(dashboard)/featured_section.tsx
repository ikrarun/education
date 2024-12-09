import AnimatedContainer from "@/components/animations/animatedContainer";
import { Card, CardContent } from "@/components/ui/card";
import {
	BookOpen,
	Clock,
	Sparkles,
	UserCheck,
	Globe,
	Shield,
} from "lucide-react";

export default function EduKationFeatures() {
	const features = [
		{
			icon: <Sparkles className='h-8 w-8 text-yellow-500' />,
			title: "100% Free",
			description:
				"No hidden costs or premium features. Quality education accessible to all.",
		},
		{
			icon: <UserCheck className='h-8 w-8 text-green-500' />,
			title: "Smart Matching",
			description:
				"Our AI-powered system connects you with the perfect learning partners.",
		},
		{
			icon: <Clock className='h-8 w-8 text-blue-500' />,
			title: "Flexible Scheduling",
			description:
				"Learn or teach anytime, anywhere. Fit education into your lifestyle.",
		},
		{
			icon: <BookOpen className='h-8 w-8 text-purple-500' />,
			title: "Diverse Subjects",
			description:
				"From academic topics to practical skills, find the knowledge you seek.",
		},
		{
			icon: <Globe className='h-8 w-8 text-red-500' />,
			title: "Global Community",
			description:
				"Connect with learners and educators worldwide. Expand your horizons.",
		},
		{
			icon: <Shield className='h-8 w-8 text-indigo-500' />,
			title: "Safe & Secure",
			description:
				"Your privacy and safety are our top priorities. Learn with peace of mind.",
		},
	];

	return (
		<section className='flex w-full flex-col items-center justify-center mt-12'>
			<h2 className='text-4xl font-semibold text-center mb-8 text-black'>
				Why Choose EduKation?
			</h2>
			<AnimatedContainer variants="always" className='grid gap-2 h-fit md:gap-3 sm:grid-cols-2 lg:grid-cols-3 w-full'>
				{features.map((feature, index) => (
					<Card
						key={index}
						className='h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
						<CardContent className='flex flex-col items-center text-center p-6 h-full'>
							<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
								{feature.icon}
							</div>
							<h3 className='text-xl font-medium mb-2'>{feature.title}</h3>
							<p className='text-muted-foreground'>{feature.description}</p>
						</CardContent>
					</Card>
				))}
			</AnimatedContainer>
		</section>
	);
}
