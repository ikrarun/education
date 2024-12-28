'use client';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import NavigationBar from '@/components/providers/navigationbar';
import Footer from '@/components/providers/footer';
import { Toaster } from 'sonner';
interface PageTransitionProps {
	children: React.ReactNode;
}
const PageTransition = ({ children }: PageTransitionProps) => {
	const pathname = usePathname();
	return (
		<div className='mx-auto flex h-full min-h-dvh w-full grow flex-col'>
			<NavigationBar />
			<div className='fixed z-40 top-0 right-4 mx-auto mt-20 inline-flex w-fit items-center justify-center gap-3 rounded-full border border-primary/20 bg-background/50 px-6 py-2 pr-3 shadow-sm backdrop-blur'>
				<span className='text-sm font-medium text-muted-foreground'>
					Currently in development
				</span>
				<div className='rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary'>
					🚀 Launching Soon
				</div>
			</div>
			<Toaster richColors visibleToasts={1} expand />
			<div className='mx-auto flex min-h-full w-full max-w-[1200px] grow flex-col p-2'>
				<motion.div
					key={pathname}
					className='flex h-full grow flex-col items-center justify-center'
				>
					{children}
				</motion.div>
			</div>

			<Footer />
		</div>
	);
};
export default PageTransition;
