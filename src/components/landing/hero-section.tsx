import logo from '@/components/providers/logo.svg';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className='mt-12 sm:mt-16 md:mt-24 flex w-full flex-col items-center justify-center pb-3 text-center px-4'>
      <h1 className='mb-4 sm:mb-6 md:mb-8 mx-auto text-4xl sm:text-5xl md:text-6xl'>
        <span className='bg-clip-text sm:ml-8 ml-0 inline-flex items-center mx-auto font-bold flex-wrap justify-center'>
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
} 
