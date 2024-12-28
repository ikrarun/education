import { BetterButton } from '@/components/ui/betterbutton';
import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <div className='w-full rounded-lg bg-gradient-to-br from-primary to-primary/90 p-8 text-primary-foreground'>
      <div className='flex flex-col items-center gap-8 text-center'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>Stay Updated</h2>
          <p className='max-w-2xl text-primary-foreground/90'>
            Follow our journey and be the first to know when we launch new features.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 items-center'>
          <BetterButton
            href='mailto:iamkrarun@gmail.com'
            variant='secondary'
            size='lg'
            className='hover:scale-105 group'
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
            className='hover:scale-105 bg-transparent border-white/20 text-white hover:text-white hover:bg-white/10 group'
          >
            <span className='flex items-center gap-2'>
              Learn More
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </span>
          </BetterButton>
        </div>
       
      </div>
    </div>
  );
} 
