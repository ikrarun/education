import { Card } from '@/components/ui/card';
import * as motion from 'motion/react-client';
import { RocketIcon, StarIcon } from 'lucide-react';

export default function EarlyAccessSection() {
  return (
    <section className='w-full py-12'>
      <Card className='relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8'>
        {/* Background Elements */}
        <div className='absolute top-0 right-0 -z-10 opacity-20'>
          <StarIcon className='h-32 w-32' />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col items-center text-center gap-6'
        >
          <div className='rounded-full bg-primary/10 p-3'>
            <RocketIcon className='h-6 w-6 text-primary' />
          </div>

          <div className='space-y-4'>
            <h2 className='text-2xl md:text-3xl font-bold'>
              Be Among the First to Experience EduKation
            </h2>
            
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              We&apos;re preparing to launch something special. Join our waitlist to get early access 
              and be notified when we go live. Be part of the future of education!
            </p>
          </div>

        

          {/* Early Access Benefits */}
          <div className='grid md:grid-cols-3 gap-6 mt-8 text-left'>
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
                <h3 className='font-semibold'>{title}</h3>
                <p className='text-sm text-muted-foreground'>{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Card>
    </section>
  );
} 
