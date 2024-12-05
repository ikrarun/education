"use client";

import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitterX } from "react-icons/bs";

const buttonVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: [0.48, 0.15, 0.25, 0.96],
		},
	}),
	hover: {
		scale: 1.05,
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
	tap: {
		scale: 0.95,
	},
};

export default function Component() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='flex flex-col grow items-center justify-center'>
			<Card className='mx-auto my-auto p-4 max-w-sm space-y-2'>
				<CardHeader className='space-y-2 text-center'>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<CardTitle className='text-3xl font-bold'>Login</CardTitle>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}>
						<CardDescription className='text-gray-500 dark:text-gray-400'>
							We have a few options for you to login, please select one of the
							options below.
						</CardDescription>
					</motion.div>
				</CardHeader>
				<CardContent className='space-y-4 my-4'>
					{[
						{ icon: FcGoogle, text: "Login with Google" },
						{
							icon: BsFacebook,
							text: "Login with Facebook",
							iconColor: "text-blue-800",
						},
						{ icon: BsTwitterX, text: "Login with Twitter" },
					].map((button, index) => (
						<motion.button
							key={button.text}
							variants={buttonVariants}
							initial='hidden'
							animate='visible'
							whileHover='hover'
							whileTap='tap'
							custom={index}
							className='w-full p-2 inline-flex rounded-md border border-gray-200 items-center justify-center
                         hover:bg-gray-200 transition-all duration-300
                         ease-in-out outline-none hover:border-gray-800/40'>
							<button.icon
								className={`mr-2 h-6 w-6 ${button.iconColor || ""}`}
							/>
							<span className='text-gray-600 hover:text-gray-800 place-self-center'>
								{button.text}
							</span>
						</motion.button>
					))}
				</CardContent>
				<CardFooter>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						className='w-full'>
						<Link
							href='/report'
							className='block w-full text-muted-foreground underline underline-offset-2 text-center text-sm'
							prefetch={false}>
							Something wrong? Report here!
						</Link>
					</motion.div>
				</CardFooter>
			</Card>
		</motion.main>
	);
}
