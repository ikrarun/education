import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function DescriptionSection() {
	return (
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
						EduKation makes it easy for students to find their ideal teacher,
						and for teachers to connect with eager learners. Create a profile,
						browse, and start your journey today. No charges. No barriers.
					</p>
				</CardContent>
			</Card>
		</section>
	);
}
