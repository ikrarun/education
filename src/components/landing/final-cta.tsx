import { BetterButton } from '@/components/ui/betterbutton';
import { ArrowRight, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function FinalCTA() {
	return (
		<Card className='w-full rounded-lg p-12'>
			<CardHeader className='flex flex-col items-center justify-center gap-6'>
				<CardTitle className='text-center'>
					<h2 className='text-4xl font-bold tracking-tight'>Stay Updated</h2>
					<p className='max-w-2xl text-lg text-muted-foreground'>
						Follow our journey and be the first to know when we launch new
						features.
					</p>
				</CardTitle>
			</CardHeader>

			<CardContent className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
				<BetterButton
					href='mailto:iamkrarun@gmail.com'
					variant='default'
					size='lg'
					className='group transition-transform duration-300 hover:scale-105'
				>
					<span className='flex items-center gap-2'>
						<Mail className='h-4 w-4' />
						Contact Us
					</span>
				</BetterButton>

				<BetterButton
					href='/about'
					variant='outline'
					size='lg'
					className='group border-secondary-foreground/40 transition-transform duration-300 hover:scale-105 hover:bg-secondary/15'
				>
					<span className='flex items-center gap-2'>
						Learn More
						<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
					</span>
				</BetterButton>
			</CardContent>
		</Card>
	);
}
