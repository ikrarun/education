import { BetterButton } from '@/components/ui/betterbutton';
import { cn } from '@/lib/utils';
import { BookOpen, Target, UserPlus } from 'lucide-react';
import * as motion from 'motion/react-client';

const STEPS = [
	{
		title: 'Create Your Profile',
		description:
			'Sign up and tell us about your learning goals or teaching expertise',
		icon: UserPlus,
		gradient: 'from-blue-600 to-indigo-600',
	},
	{
		title: 'Find Your Match',
		description:
			'Browse through profiles and find the perfect student-teacher match',
		icon: Target,
		gradient: 'from-purple-600 to-pink-600',
	},
	{
		title: 'Start Learning',
		description:
			'Begin your personalized learning journey with structured guidance',
		icon: BookOpen,
		gradient: 'from-green-600 to-emerald-600',
	},
] as const satisfies readonly {
	title: string;
	description: string;
	icon: React.ComponentType<{ className?: string }>;
	gradient: string;
}[];

export default function HowItWorksSection() {
	return (
		<section className='relative w-full overflow-hidden py-16'>
			<div className='container mx-auto px-4'>
				{/* Background Elements */}
				<div className='absolute inset-0 -z-10'>
					<div className='absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl' />
					<div className='absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-2xl' />
				</div>

				{/* Section Header */}
				<div className='mb-16 text-center'>
					<h2 className='mb-4 text-3xl font-bold md:text-4xl'>How It Works</h2>
					<p className='mx-auto max-w-2xl text-muted-foreground'>
						Get started with EduKation in three simple steps. Our streamlined
						process ensures you can begin your learning journey quickly and
						efficiently.
					</p>
				</div>

				{/* Steps Grid */}
				<div className='relative grid gap-8 md:grid-cols-3'>
					{/* Connector Lines (visible on md+ screens) */}
					<div className='absolute left-[15%] top-[45%] hidden h-[2px] w-[70%] md:block'>
						<div className='h-full w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent' />
					</div>

					{STEPS.map(({ title, description, icon: Icon, gradient }, index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							className='group relative'
						>
							{/* Step Card */}
							<div className='relative flex flex-col items-center rounded-2xl border bg-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
								{/* Step Number */}
								<div
									className={cn(
										'absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white',
										'bg-gradient-to-r shadow-lg',
										gradient
									)}
								>
									{index + 1}
								</div>

								{/* Icon Container */}
								<div
									className={cn(
										'mb-6 rounded-xl bg-gradient-to-br p-4',
										'transform transition-transform duration-300 group-hover:scale-110',
										gradient
									)}
								>
									<Icon className='h-8 w-8 text-white' />
								</div>

								{/* Content */}
								<h3 className='mb-3 text-center text-xl font-semibold'>
									{title}
								</h3>
								<p className='text-center text-sm text-muted-foreground'>
									{description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true }}
					className='mt-12 text-center'
				>
					<BetterButton
						href='/student'
						variant='default'
						size='lg'
						className='group'
					>
						<span className='flex items-center gap-2'>
							Start Your Journey
							<UserPlus className='h-4 w-4 transition-transform group-hover:translate-x-1' />
						</span>
					</BetterButton>
				</motion.div>
			</div>
		</section>
	);
}
