"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type MotionButtonProps = HTMLMotionProps<"button"> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
	({ className, ...props }, ref) => {
		return (
			<motion.button
				ref={ref} // No need for explicit casting now
				whileTap={{ scale: 0.98 }}
				className={className}
				{...props} // Pass all combined props
			/>
		);
	}
);

MotionButton.displayName = "MotionButton";

export default MotionButton;
