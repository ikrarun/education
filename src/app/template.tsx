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
				<motion.div
					className='fixed bottom-4 left-0 right-0 z-50 mx-auto mt-20 inline-flex w-fit cursor-pointer select-none items-center justify-center gap-3 overflow-hidden rounded-full p-[2px] shadow-sm backdrop-blur-3xl transition-transform duration-200 active:scale-95 sm:bottom-auto sm:left-auto sm:right-4 sm:top-0'
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					onTouchCancel={handleTouchEnd}
					onMouseDown={handleTouchStart}
					onMouseUp={handleTouchEnd}
					onMouseLeave={handleTouchEnd}
				>
					{/* Background Gradient Animation */}
					<motion.div
						className='absolute inset-0 rounded-full'
						style={{
							background: 'linear-gradient(120deg, #2563eb, #3b82f6, #60a5fa)',
							backgroundSize: '200% 100%',
						}}
						animate={{
							backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
						}}
						transition={{
							duration: 3,
							ease: 'linear',
							repeat: Infinity,
						}}
					/>
					{/* Content Inside the Button */}
					<div className='relative z-10 flex items-center gap-2 rounded-full p-2 px-4 text-primary-foreground'>
						<span className='text-xs font-medium sm:text-sm'>
							Currently in development
						</span>
					</div>
				</motion.div>
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
