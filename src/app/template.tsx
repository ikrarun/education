'use client';
import Footer from '@/components/providers/footer';
import NavigationBar from '@/components/providers/navigationbar';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { Toaster } from 'sonner';

interface PageTransitionProps {
	children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState(true);
	const pressTimer = useRef<NodeJS.Timeout>();
	const longPressTime = 1000; // 1 second for long press

	const handleTouchStart = useCallback(() => {
		pressTimer.current = setTimeout(() => {
			setIsVisible(false);
		}, longPressTime);
	}, []);

	const handleTouchEnd = useCallback(() => {
		if (pressTimer.current) {
			clearTimeout(pressTimer.current);
		}
	}, []);

	return (
		<div className='mx-auto flex h-full min-h-dvh w-full grow flex-col'>
			<NavigationBar />
			{isVisible && (
				<div
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					onTouchCancel={handleTouchEnd}
					onMouseDown={handleTouchStart}
					onMouseUp={handleTouchEnd}
					onMouseLeave={handleTouchEnd}
					className='fixed bottom-4 left-0 right-0 z-40 mx-auto mt-20 inline-flex w-fit cursor-pointer select-none items-center justify-center gap-3 rounded-full border border-primary/20 bg-background/50 px-2 py-2 pr-2 shadow-sm backdrop-blur-3xl transition-transform duration-200 active:scale-95 sm:bottom-auto sm:left-auto sm:right-4 sm:top-0 sm:px-6 sm:pr-3'
				>
					<span className='text-xs font-medium text-muted-foreground sm:text-sm'>
						Currently in development
					</span>
					<div className='rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary sm:text-sm'>
						🚀 Launching Soon
					</div>
				</div>
			)}
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
