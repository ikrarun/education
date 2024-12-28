'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsGithub, BsTwitterX } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

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
		<main className='flex h-full grow items-center justify-center bg-background'>
			<Card className='w-full max-w-md p-8 shadow-none'>
				<CardHeader className='space-y-2 text-left pb-8'>
					<CardTitle className='text-2xl font-semibold text-foreground'>
						Hey there!
					</CardTitle>
					<CardDescription>
						Sign in with preferred account
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					{[
						{
							id: 'google',
							icon: FcGoogle,
							text: 'Continue with Google',
							className: 'hover:scale-105	',
						},
						{
							id: 'twitter',
							icon: BsTwitterX,
							text: 'Continue with Twitter',
							className: 'hover:scale-105',
						},
						{
							id: 'github',
							icon: BsGithub,
							text: 'Continue with GitHub',
							className: 'hover:scale-105',
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
							className={`inline-flex w-full items-center justify-center rounded-xl border border-gray-200 p-4 font-medium ${button.className} ${
								isLoading !== null && 'cursor-not-allowed opacity-50'
							}`}
						>
							{isLoading === button.id ? (
								<Loader2 className='mr-3 h-5 w-5 animate-spin' />
							) : (
								<button.icon className="mr-3 h-5 w-5" />
							)}
							<span className='font-medium'>{button.text}</span>
						</motion.button>
					))}
				</CardContent>
				<CardFooter className='flex justify-center	 pt-6'>
					<div className='text-sm'>
							Can&apos;t access your account?{' '}
							<Link href='mailto:support@edukation.com' className='text-blue-600 hover:text-blue-700'>
								Contact support
							</Link>
					</div>
				</CardFooter>
			</Card>
		</main>
	);
}
