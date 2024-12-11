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
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Component() {
	const router = useRouter();

	const handleLogin = () => {
		// Add your login logic here
		router.push("/profile");
	};
	return (
		<main className='flex flex-col grow items-center justify-center'>
			<Card className='mx-auto my-auto p-4 max-w-sm space-y-2'>
				<CardHeader className='space-y-2 text-center'>
					<CardTitle className='text-3xl font-bold'>Login</CardTitle>

					<CardDescription className='text-gray-500 dark:text-gray-400'>
						We have a few options for you to login, please select one of the
						options below.
					</CardDescription>
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
							onClick={handleLogin}
							key={button.text}
							custom={index}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2, ease: "easeInOut" }}
							className='w-full p-2 inline-flex rounded-md border border-gray-200 items-center justify-center
                          outline-none '>
							<button.icon
								className={`mr-2 h-6 w-6 ${button.iconColor || ""}`}
							/>
							<span className=' place-self-center'>{button.text}</span>
						</motion.button>
					))}
				</CardContent>
				<CardFooter>
					<div className='w-full'>
						<Link
							href='/report'
							className='block w-full text-muted-foreground underline underline-offset-2 text-center text-sm'
							prefetch={false}>
							Something wrong? Report here!
						</Link>
					</div>
				</CardFooter>
			</Card>
		</main>
	);
}
