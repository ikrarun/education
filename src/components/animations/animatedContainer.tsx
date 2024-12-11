import React from "react";
import * as motion from "motion/react-client";

interface ListAnimationProps {
	children: React.ReactNode;
	className?: string;
	startAfter?: number;
	gapInItems?: number;
}

export default function AnimatedContainer({
	children,
	className,
	gapInItems = 0.2,
	startAfter = 0,
}: ListAnimationProps) {
	return (
		<div className={className}>
			{React.Children.map(children, (child, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.24,
						ease: "easeInOut",
						delay: startAfter + gapInItems * index,
					}}>
					{child}
				</motion.div>
			))}
		</div>
	);
}
