"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ListAnimation({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={className}>
			{React.Children.map(children, (child, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.43,
						ease: "easeInOut",
						delay: 0.2 * index,
					}}>
					{child}
				</motion.div>
			))}
		</div>
	);
}
