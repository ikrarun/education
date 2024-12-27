import ListAnimation from '@/components/animations/animatedContainer';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div className='mx-auto flex w-full max-w-[900px] grow flex-col items-center justify-center px-4 pb-2 pt-4'>
			<div className='mx-auto flex w-full flex-col items-center justify-center gap-1'>
				<h1 className='my-2 mb-8 text-2xl font-semibold'>
					Connect with the Developer !
				</h1>
				<ListAnimation
					onetime='no'
					className='mx-auto flex w-full grow flex-col items-center justify-center gap-2 md:flex-row'
				>
					<Link
						className='h-full w-full grow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
						prefetch={false}
						target='_blank'
						href={'https://twitter.com/suraj_is_arun'}
					>
						<Card className='w-full'>
							<CardContent className='flex h-full flex-col items-center p-6 text-center'>
								<div className='mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-4'>
									<Twitter stroke='blue' className='h-8 w-8' />
								</div>
								<h3 className='mb-2 text-xl font-medium'>Twitter</h3>
								<p className='text-muted-foreground'>
									Connect with me on Twitter
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link
						className='h-full w-full grow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
						prefetch={false}
						target='_blank'
						href={'https://instagram.com/suraj_is_arun'}
					>
						<Card className='w-full'>
							<CardContent className='flex h-full flex-col items-center p-6 text-center'>
								<div className='mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-4'>
									<Instagram stroke='red' className='h-8 w-8' />
								</div>
								<h3 className='mb-2 text-xl font-medium'>Instagram</h3>
								<p className='text-muted-foreground'>
									Chat with me on Instagram
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link
						className='h-full w-full grow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
						prefetch={false}
						target='_blank'
						href={'https://github.com/ikrarun'}
					>
						<Card className='w-full'>
							<CardContent className='flex h-full flex-col items-center p-6 text-center'>
								<div className='mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-4'>
									<Github stroke='black' className='h-8 w-8' />
								</div>
								<h3 className='mb-2 text-xl font-medium'>Github</h3>
								<p className='text-muted-foreground'>Check my work on Github</p>
							</CardContent>
						</Card>
					</Link>
				</ListAnimation>
			</div>
		</div>
	);
}
