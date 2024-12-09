"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type MotionButtonProps = HTMLMotionProps<"button"> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<motion.button
				ref={ref}
				whileTap={{ scale: 0.98 }} // Slightly scale down when clicked
				whileHover={{
					transition: { duration: 0.2, ease: "easeInOut" }, // Smooth transition on hover
				}}
				className={`relative inline-flex gap-2 items-center text-2xl px-4 py-2 text-white rounded-lg shadow-lg ${className}`}
				{...props}>
				{children}
			</motion.button>
		);
	}
);

MotionButton.displayName = "MotionButton";

export default MotionButton;
