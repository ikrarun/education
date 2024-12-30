import * as motion from 'motion/react-client';

export default function HeroSection() {
	return (
		<main className='mt-12 flex w-full flex-col items-center justify-center px-4 pb-3 text-center sm:mt-16 md:mt-24'>
			<h1 className='mx-auto mb-4 text-4xl font-medium sm:mb-6 sm:text-5xl md:mb-8 md:text-9xl'>
				{Array.from('Welcome to EduKation!').map((char, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.05, once: true }}
					>
						{char}
					</motion.span>
				))}
			</h1>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, once: true }}
				className='text-xl font-normal text-muted-foreground sm:text-2xl'
			>
				Unlock Potential with Expert Tutors at Your Fingertips{' '}
			</motion.h2>
			<p className='mx-auto mt-2 max-w-sm text-sm text-muted-foreground sm:mt-3 sm:max-w-xl sm:text-base md:mt-4 md:max-w-2xl'>
				Your Path to Knowledge Starts Here – EduKation connects you with expert
				tutors in any subject. Learn on your terms with flexible schedules and a
				community focused on growth and success.
			</p>
		</main>
	);
}
