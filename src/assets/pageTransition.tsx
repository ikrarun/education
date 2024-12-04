"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathName = usePathname();

	return (
		<motion.div
			key={pathName}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.43, ease: "easeInOut" }}
        className="flex flex-col grow h-full items-center justify-center">
			{children}
		</motion.div>
	);
};

export default PageTransition;
