import { BetterButton } from '@/components/ui/betterbutton';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import { BookOpen, Clock, Globe, Shield, Sparkles, UserCheck } from 'lucide-react';

const KEY_BENEFITS = [
  {
    title: '100% Free',
    description: 'No hidden costs or premium features. Quality education accessible to all.',
    icon: Sparkles,
    gradient: 'from-yellow-600 to-amber-600',
  },
  {
    title: 'Smart Matching',
    description: 'Our AI-powered system connects you with the perfect learning partners.',
    icon: UserCheck,
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Flexible Scheduling',
    description: 'Learn or teach anytime, anywhere. Fit education into your lifestyle.',
    icon: Clock,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Diverse Subjects',
    description: 'From academic topics to practical skills, find the knowledge you seek.',
    icon: BookOpen,
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Global Community',
    description: 'Connect with learners and educators worldwide. Expand your horizons.',
    icon: Globe,
    gradient: 'from-red-600 to-rose-600',
  },
  {
    title: 'Safe & Secure',
    description: 'Your privacy and safety are our top priorities. Learn with peace of mind.',
    icon: Shield,
    gradient: 'from-indigo-600 to-violet-600',
  },
] as const;

export default function BenefitsSection() {
  return (
    <section className='relative w-full py-16 overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Background Elements */}
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl' />
        </div>

        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Why Choose EduKation?
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Experience a new way of learning that puts your growth and success first
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {KEY_BENEFITS.map(({ title, description, icon: Icon, gradient }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='h-full rounded-2xl border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                <div className={cn(
                  'mb-4 inline-flex rounded-xl p-3',
                  'bg-gradient-to-br',
                  gradient
                )}>
                  <Icon className='h-6 w-6 text-white' />
                </div>
                
                <h3 className='mb-2 text-xl font-semibold tracking-tight'>
                  {title}
                </h3>
                
                <p className='text-sm text-muted-foreground'>
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
          transition={{ duration: 0.5, delay: 0.4 }}
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
              Start Learning Today
              <Sparkles className='w-4 h-4 transition-transform group-hover:translate-x-1' />
            </span>
          </BetterButton>
        </motion.div>
      </div>
    </section>
  );
} 
