"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavigationBar from "@/components/navigation/navigationbar";
import Footer from "@/components/navigation/footer";
interface PageTransitionProps {
	children: React.ReactNode;
}
import { Toaster } from "sonner";

const PageTransition: React.FC<PageTransitionProps> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const pathname = usePathname();

	// useEffect(() => {
	// 	const handleClick = (e: KeyboardEvent) => {
	// 		if (e.key === "Tab") {
	// 			e.preventDefault();
	// 			return;
	// 		}
	// 	};

	// 	window.addEventListener("keydown", handleClick);
	// 	return () => {
	// 		window.removeEventListener("keydown", handleClick);
	// 	};
	// }, []);

	return (
		<div tabIndex={-1}
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
