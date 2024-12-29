import logo from '@/components/providers/logo.svg';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<main className='mt-12 flex w-full flex-col items-center justify-center px-4 pb-3 text-center sm:mt-16 md:mt-24'>
			<h1 className='mx-auto mb-4 text-4xl sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl'>
				<span className='mx-auto ml-0 inline-flex flex-wrap items-center justify-center bg-clip-text font-bold sm:ml-8'>
					Welcome to
					<span className='relative inline-flex items-center'>
						<Image
							src={logo}
							alt='EduKation Logo'
							width={72}
							height={72}
							className='h-12 w-12 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]'
							priority
						/>
						<span className='relative'>duKation!</span>
					</span>
				</span>
			</h1>
			<h2 className='text-xl font-normal text-muted-foreground sm:text-2xl'>
				Where Learning Meets Opportunity!
			</h2>
			<p className='mx-auto mt-2 max-w-sm text-sm text-muted-foreground sm:mt-3 sm:max-w-xl sm:text-base md:mt-4 md:max-w-2xl'>
				Join our community of learners and educators. Experience personalized
				learning journeys tailored to your unique needs and aspirations.
			</p>
		</main>
	);
}
