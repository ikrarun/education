'use client';
import Footer from '@/components/providers/footer';
import NavigationBar from '@/components/providers/navigationbar';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';

interface PageTransitionProps {
	children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
	const pathname = usePathname();

	return (
		<div className='mx-auto antialiased flex h-full min-h-dvh w-full grow flex-col'>
			<NavigationBar />

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
