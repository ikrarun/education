"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavigationBar from "@/components/navigation/navigationbar";
import Footer from "@/components/navigation/footer";
interface PageTransitionProps {
	children: React.ReactNode;
}
import { Toaster } from "sonner";
import { useEffect } from "react";

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
	const pathname = usePathname();
	// const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

	// useEffect(() => {
	// 	const handleClick = (e: MouseEvent) => {
	// 		setClickPosition({ x: e.clientX, y: e.clientY });
	// 	};

	// 	window.addEventListener("click", handleClick);

	// 	return () => {
	// 		window.removeEventListener("click", handleClick);
	// 	};
	// }, []);

	useEffect(() => {
		const handleClick = (e: KeyboardEvent) => {
			if (e.key === "Tab") {
				e.preventDefault();
				return;
			}
		};

		window.addEventListener("keydown", handleClick);
		return () => {
			window.removeEventListener("keydown", handleClick);
		};
	}, []);

	return (
		<div
			className='mx-auto min-h-dvh  flex flex-col w-full
							h-full grow'>
			<NavigationBar />
			<Toaster richColors visibleToasts={1} expand />

			{/* <PageTransition> */}
			<div className='min-h-full flex flex-col p-2 max-w-[1200px] mx-auto w-full grow'>
				<motion.div
					key={pathname}
					className='flex flex-col grow h-full items-center justify-center'>
					{children}
				</motion.div>
			</div>
			<Footer />
			{/* </PageTransition> */}
		</div>
	);
};

export default PageTransition;
