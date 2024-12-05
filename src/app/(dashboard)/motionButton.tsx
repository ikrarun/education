"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRightCircle } from "lucide-react"; // Ensure you import your icon properly

export type MotionButtonProps = HTMLMotionProps<"button"> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<motion.button
				ref={ref}
				whileTap={{ scale: 0.98 }} // Slightly scale down when clicked
				whileHover={{
					scale: 1.05, // Slight scale increase on hover
					transition: { duration: 0.2, ease: "easeInOut" }, // Smooth transition on hover
				}}
				className={`relative inline-flex gap-2 items-center text-2xl px-4 py-2 text-white rounded-lg shadow-lg ${className}`}
				{...props}>
				{children}
				<motion.div
					className='w-6 h-6'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.3 }}>
					<ArrowRightCircle stroke='white' className='w-6 h-6' />
				</motion.div>
			</motion.button>
		);
	}
);

MotionButton.displayName = "MotionButton";

export default MotionButton;
