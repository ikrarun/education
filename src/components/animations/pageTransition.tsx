"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface PageTransitionProps {
	children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
	const pathname = usePathname();
	const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			setClickPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("click", handleClick);

		return () => {
			window.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<motion.div
			key={pathname}
			initial={{
				clipPath: `circle(0% at ${clickPosition.x}px ${clickPosition.y}px)`,
			}}
			animate={{ clipPath: "circle(150% at 50% 50%)" }}
			exit={{
				clipPath: `circle(0% at ${clickPosition.x}px ${clickPosition.y}px)`,
			}}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className='flex flex-col grow h-full items-center justify-center'>
			{children}
		</motion.div>
	);
};

export default PageTransition;
