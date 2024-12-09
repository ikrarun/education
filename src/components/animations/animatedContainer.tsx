"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type Variants = "once" | "always";

interface ListAnimationProps {
	children: React.ReactNode;
	className?: string;
	startAfter?: number;
	gapInItems?: number;
	initial?: MotionProps["initial"]; // Expecting `initial` prop from parent
	animate?: MotionProps["animate"]; // Expecting `animate` prop from parent
	transition?: MotionProps["transition"]; // Expecting `transition` prop from parent
	variants?: Variants;
}

export default function AnimatedContainer({
	children,
	className,
	initial,
	animate,
	gapInItems = 0.2,
	transition,
	startAfter = 0,
	variants = "once",
}: ListAnimationProps) {
	const defaultAnimation = { opacity: 0, y: 20 };
	const commonTransition = {
		duration: 0.24,
		ease: "easeInOut",
	};

	const getMotionProps = () => {
		return {
			initial: initial ?? defaultAnimation,
			animate: animate ?? { opacity: 1, y: 0 },
			transition: { ...commonTransition, ...transition },
		};
	};

	switch (variants) {
		case "once":
			return (
				<div className={className}>
					{React.Children.map(children, (child, index) => (
						<motion.div
							key={index}
							{...getMotionProps()}
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
		case "always":
			return (
				<div className={className}>
					{React.Children.map(children, (child, index) => (
						<motion.div
							key={index}
							initial={defaultAnimation}
							whileInView={{ opacity: 1, y: 0 }}
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
		default:
			return null;
	}
}
