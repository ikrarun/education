'use client';
import { buttonVariants } from '@/components/ui/betterbutton';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'motion/react';
import React from 'react';

export type MotionButtonProps = HTMLMotionProps<'button'> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<motion.button
				ref={ref}
				whileTap={{ scale: 0.98 }} // Slightly scale down when clicked
				whileHover={{
					transition: { duration: 0.2, ease: 'easeInOut' },
					scale: 1.05, // Smooth transition on hover
				}}
				className={cn(buttonVariants({ variant: 'default' }), className)}
				{...props}
			>
				{children}
			</motion.button>
		);
	}
);

MotionButton.displayName = 'MotionButton';

export default MotionButton;
