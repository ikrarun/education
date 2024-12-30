import { BetterButton } from '@/components/ui/betterbutton';
import { cn } from '@/lib/utils';
import { BookOpen, Clock, Globe, Shield, Sparkles } from 'lucide-react';
import * as motion from 'motion/react-client';

const KEY_BENEFITS = [
	{
		title: '100% Free',
		description:
			'Access quality education with no platform fees. Premium options available for added features.',
		icon: Sparkles,
		gradient: 'from-yellow-600 to-amber-600',
	},

	{
		title: 'Flexible Scheduling',
		description: 'Learn or teach on your terms, anytime, anywhere',
		icon: Clock,
		gradient: 'from-blue-600 to-indigo-600',
	},
	{
		title: 'Diverse Subjects',
		description:
			'Explore a wide range of subjects, from academic to practical skills',
		icon: BookOpen,
		gradient: 'from-purple-600 to-pink-600',
	},
	{
		title: 'Diverse Community',
		description:
			'Connect with learners and educators all over the India. Expand your horizons.',
		icon: Globe,
		gradient: 'from-red-600 to-rose-600',
	},
	{
		title: 'Safe & Secure',
		description: 'Your privacy and data are our top priorities.',
		icon: Shield,
		gradient: 'from-indigo-600 to-violet-600',
	},
] as const;

export default function BenefitsSection() {
	return (
		<section className='relative w-full overflow-hidden pt-16'>
			<div className='container relative mx-auto px-4'>
				{/* Background Elements */}
				<div className='absolute inset-0 -z-10'>
					<div className='absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl' />
				</div>

				{/* Section Header */}
				<div className='relative mb-12 text-center'>
					<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
						Why Choose EduKation?
					</h2>
					<p className='mx-auto max-w-2xl text-muted-foreground'>
						Experience a new way of learning that puts your growth and success
						first
					</p>
				</div>

				{/* Benefits Grid */}
				<div className='z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{KEY_BENEFITS.map(
						({ title, description, icon: Icon, gradient }, index) => (
							<motion.div
								key={title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='group'
							>
								<div className='h-full rounded-2xl border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
									<div
										className={cn(
											'mb-4 inline-flex rounded-xl p-3',
											'bg-gradient-to-br',
											gradient
										)}
									>
										<Icon className='h-6 w-6 text-white' />
									</div>

									<h3 className='mb-2 text-xl font-semibold tracking-tight'>
										{title}
									</h3>

									<p className='text-sm text-muted-foreground'>{description}</p>
								</div>
							</motion.div>
						)
					)}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
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
							Start Learning Today
							<Sparkles className='h-4 w-4 transition-transform group-hover:translate-x-1' />
						</span>
					</BetterButton>
				</motion.div>
			</div>
		</section>
	);
}
