import { BetterButton } from '@/components/ui/betterbutton';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import { BookOpen, Target, UserPlus } from 'lucide-react';

const STEPS = [
  {
    title: 'Create Your Profile',
    description: 'Sign up and tell us about your learning goals or teaching expertise',
    icon: UserPlus,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Find Your Match',
    description: 'Browse through profiles and find the perfect student-teacher match',
    icon: Target,
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Start Learning',
    description: 'Begin your personalized learning journey with structured guidance',
    icon: BookOpen,
    gradient: 'from-green-600 to-emerald-600',
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section className='relative w-full py-16 overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Background Elements */}
        <div className='absolute inset-0'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl' />
          <div className='absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-2xl' />
        </div>

        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            How It Works
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Get started with EduKation in three simple steps. Our streamlined process ensures you can begin your learning journey quickly and efficiently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className='grid md:grid-cols-3 gap-8 relative'>
          {/* Connector Lines (visible on md+ screens) */}
          <div className='hidden md:block absolute top-[45%] left-[15%] w-[70%] h-[2px]'>
            <div className='w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent' />
          </div>

          {STEPS.map(({ title, description, icon: Icon, gradient }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='relative group'
            >
              {/* Step Card */}
              <div className='relative flex flex-col items-center p-6 rounded-2xl bg-card border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                {/* Step Number */}
                <div className={cn(
                  'absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm',
                  'bg-gradient-to-r shadow-lg',
                  gradient
                )}>
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className={cn(
                  'mb-6 p-4 rounded-xl bg-gradient-to-br',
                  'transform transition-transform duration-300 group-hover:scale-110',
                  gradient
                )}>
                  <Icon className='h-8 w-8 text-white' />
                </div>

                {/* Content */}
                <h3 className='text-xl font-semibold mb-3 text-center'>{title}</h3>
                <p className='text-muted-foreground text-center text-sm'>
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
            href='/filldetail'
            variant='default'
            size='lg'
            className='group'
          >
            <span className='flex items-center gap-2'>
              Start Your Journey
              <UserPlus className='w-4 h-4 transition-transform group-hover:translate-x-1' />
            </span>
          </BetterButton>
        </motion.div>
      </div>
    </section>
  );
} 
