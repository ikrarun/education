'use client';

import { signIn, useSession } from 'next-auth/react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { motion } from 'motion/react';
import Link from 'next/link';
import { BsGithub, BsTwitterX } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { redirect } from 'next/navigation';

export default function Component() {
	const session = useSession();

	if (session.status === 'authenticated') {
		redirect('/profile');
	}

	if (session.status === 'loading') {
		return <div>Loading...</div>;
	}

	return (
		<main className='flex h-full grow items-center justify-center bg-background'>
			<Card className='w-full max-w-md p-8 shadow-none'>
				<CardHeader className='space-y-2 pb-8 text-left'>
					<CardTitle className='text-2xl font-semibold text-foreground'>
						Hey there!
					</CardTitle>
					<CardDescription>Sign in with preferred account</CardDescription>
				</CardHeader>
				<CardContent className='space-y-6'>
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
							onClick={() => signIn(button.id)}
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
							className={`inline-flex w-full items-center justify-center rounded-xl border border-gray-200 p-4 font-medium ${button.className}`}
						>
							<button.icon className='mr-3 h-5 w-5' />
							<span className='font-medium'>{button.text}</span>
						</motion.button>
					))}
				</CardContent>
				<CardFooter className='flex justify-center pt-6'>
					<div className='text-sm'>
						Can&apos;t access your account?{' '}
						<Link
							href='mailto:support@edukation.com'
							className='text-blue-600 hover:text-blue-700'
						>
							Contact support
						</Link>
					</div>
				</CardFooter>
			</Card>
		</main>
	);
}
