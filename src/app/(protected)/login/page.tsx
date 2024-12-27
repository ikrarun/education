'use client';

import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { motion } from 'motion/react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsTwitterX } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Component() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<string | null>(null);

	const handleLogin = async (provider: string) => {
		setIsLoading(provider);
		// Simulate login delay
		await new Promise((resolve) => setTimeout(resolve, 800));
		// Add your login logic here
		router.push('/profile');
	};

	return (
		<main className='flex h-full grow flex-col items-center justify-center bg-gradient-to-b from-background to-muted/50'>
			<Card className='mx-auto my-auto max-w-sm space-y-2 border-muted/20 p-4 shadow-lg backdrop-blur-sm'>
				<CardHeader className='space-y-4 text-center'>
					<CardTitle className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent'>
						Welcome Back
					</CardTitle>
					<CardDescription className='text-gray-500 dark:text-gray-400'>
						Choose your preferred login method to continue
					</CardDescription>
				</CardHeader>
				<CardContent className='my-4 space-y-4'>
					{[
						{
							id: 'google',
							icon: FcGoogle,
							text: 'Continue with Google',
							className: 'hover:bg-gray-50 dark:hover:bg-gray-800',
						},
						{
							id: 'facebook',
							icon: BsFacebook,
							text: 'Continue with Facebook',
							iconColor: 'text-blue-800',
							className: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
						},
						{
							id: 'twitter',
							icon: BsTwitterX,
							text: 'Continue with Twitter',
							className: 'hover:bg-gray-50 dark:hover:bg-gray-800',
						},
					].map((button, index) => (
						<motion.button
							onClick={() => handleLogin(button.id)}
							disabled={isLoading !== null}
							key={button.text}
							custom={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							transition={{
								duration: 0.2,
								ease: 'easeInOut',
								delay: index * 0.1,
							}}
							className={`inline-flex w-full items-center justify-center rounded-lg border border-border p-3 outline-none transition-colors duration-200 ${button.className} ${isLoading !== null && 'cursor-not-allowed opacity-50'}`}
						>
							{isLoading === button.id ? (
								<Loader2 className='mr-3 h-5 w-5 animate-spin' />
							) : (
								<button.icon
									className={`mr-3 h-5 w-5 ${button.iconColor || ''}`}
								/>
							)}
							<span className='font-medium'>{button.text}</span>
						</motion.button>
					))}
				</CardContent>
				<CardFooter className='flex flex-col space-y-4 text-center'>
					<div className='relative w-full'>
						<div className='absolute inset-0 flex items-center'>
							<span className='w-full border-t' />
						</div>
						<div className='relative flex justify-center text-xs uppercase'>
							<span className='bg-background px-2 text-muted-foreground'>
								Or
							</span>
						</div>
					</div>
					<Link
						href='/report'
						className='text-sm text-muted-foreground transition-colors duration-200 hover:text-primary'
						prefetch={false}
					>
						Having trouble logging in?
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
}
