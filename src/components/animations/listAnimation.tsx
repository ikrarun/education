"use client";

import React from "react";
import { motion } from "framer-motion";

type Variants = "once" | "always";
export default function ListAnimation({
	children,
	className,
	variants = "once",
}: {
	children: React.ReactNode;
	className?: string;
	variants?: Variants;
}) {
	switch (variants) {
		case "once":
			return (
				<div className={className}>
					{React.Children.map(children, (child, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.24,
								ease: "easeInOut",
								delay: 0.2 * index,
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
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.24,
								ease: "easeInOut",
								delay: 0.2 * index,
							}}>
							{child}
						</motion.div>
					))}
				</div>
			);
	}
}
