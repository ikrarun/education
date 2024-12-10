"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface ListAnimationProps {
	children: React.ReactNode;
	className?: string;
	startAfter?: number;
	gapInItems?: number;
	initial?: MotionProps["initial"]; // Expecting `initial` prop from parent
	animate?: MotionProps["animate"]; // Expecting `animate` prop from parent
	transition?: MotionProps["transition"]; // Expecting `transition` prop from parent
	loop?: boolean;
}

export default function AnimatedContainer({
	children,
	className,
	gapInItems = 0.2,
	transition,
	startAfter = 0,
	loop = false,
}: ListAnimationProps) {
	const defaultAnimation = { opacity: 0, y: 20 };
	const commonTransition = {
		duration: 0.24,
		ease: "easeInOut",
	};
	return (
		<div className={className}>
			{React.Children.map(children, (child, index) => (
				<motion.div
					key={index}
					initial={defaultAnimation}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: !loop, amount: 0.1 }}
					transition={{
						...commonTransition,
						...transition,
						delay: startAfter + gapInItems * index,
					}}>
					{child}
				</motion.div>
			))}
		</div>
	);
}
