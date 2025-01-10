import { Card } from '@/components/ui/card';
import * as motion from 'motion/react-client';
import { RocketIcon, Sparkles, StarIcon } from 'lucide-react';

export default function EarlyAccessSection() {
	return (
		<section className='w-full py-12'>
			<Card className='relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8'>
				{/* Background Elements */}
				<div className='absolute right-0 top-0 opacity-20'>
					<StarIcon className='h-32 w-32' />
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='flex flex-col items-center gap-6 text-center'
				>
					<div className='rounded-full bg-primary/10 p-3'>
						<RocketIcon className='h-6 w-6 text-primary' />
					</div>

					<div className='space-y-4'>
						<h2 className='text-2xl font-bold md:text-3xl'>
							Be Among the First to Experience EduKation
						</h2>

						<p className='mx-auto max-w-2xl text-muted-foreground'>
							We&apos;re preparing to launch something special. Join our
							waitlist to get early access and be notified when we go live. Be
							part of the future of education!
						</p>
					</div>

					{/* Early Access Benefits */}
					<div className='mt-8 grid w-full place-items-start gap-6 px-4 text-left sm:place-items-center md:grid-cols-3'>
						{[
							{
								title: 'Priority Access',
								description: 'Be the first to try our platform when we launch',
							},
							{
								title: 'Special Perks',
								description: 'Exclusive benefits for early adopters',
							},
							{
								title: 'Shape the Future',
								description: 'Help us build the perfect learning platform',
							},
						].map(({ title, description }) => (
							<div key={title} className='flex flex-col gap-2'>
								<div className='flex items-center gap-2'>
									<div className='rounded-full bg-primary/10 p-2'>
										<Sparkles className='h-4 w-4 text-primary' />
									</div>
									<h3 className='font-semibold'>{title}</h3>
								</div>
								<p className='text-sm text-muted-foreground'>{description}</p>
							</div>
						))}
					</div>
				</motion.div>
			</Card>
		</section>
	);
}
