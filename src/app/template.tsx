"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import NavigationBar from "@/components/providers/navigationbar";
import Footer from "@/components/providers/footer";
interface PageTransitionProps {
	children: React.ReactNode;
}
import { Toaster } from "sonner";
import { ArrowLeft, Axis3D } from "lucide-react";

const PageTransition: React.FC<PageTransitionProps> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const router = useRouter();
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
		<div
			tabIndex={-1}
			className='mx-auto min-h-dvh  flex flex-col w-full
							h-full grow'>
			<div className='title-bar transition-all duration-1000 sticky top-0 z-50 inline-flex w-fit items-center justify-between pl-6 '>
				<div className='inline-flex items-center'>
					<Axis3D className='w-5 h-5' />
					<h1 className='text-sm'>EduKation</h1>
				</div>
				<div className='inline-flex items-center'>
					{pathname !== "/" && (
						<button className="cursor-pointer" onClick={() => router.back()}>
							<ArrowLeft className='w-5 h-5 mr-2' />
						</button>
					)}
				</div>
			</div>
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
