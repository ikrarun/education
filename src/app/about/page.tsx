import ListAnimation from "@/components/animations/listAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

/**
 * The about page component.
 *
 * This component renders a list of links to the developer's social media profiles.
 *
 * @returns The about page component.
 */
export default function page() {
	return (
		<div className='flex px-4 pb-2 max-w-[900px] pt-4 flex-col w-full mx-auto items-center justify-center grow'>
			<div className='flex flex-col w-full justify-center gap-1 mx-auto items-center '>
				<h1 className='my-2 mb-8 font-semibold text-2xl'>
					Connect with the Developer !
				</h1>
				<ListAnimation className='flex gap-2 items-center justify-center mx-auto grow w-full flex-col md:flex-row'>
					<Link
						className='h-full w-full grow transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
						prefetch={false}
						target='_blank'
						href={"https://twitter.com/suraj_is_arun"}>
						<Card className='w-full'>
							<CardContent className='flex flex-col items-center text-center p-6 h-full'>
								<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
									<Twitter stroke='blue' className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-medium mb-2'>Twitter</h3>
								<p className='text-muted-foreground'>
									Connect with me on Twitter
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link
						className='h-full grow w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
						prefetch={false}
						target='_blank'
						href={"https://instagram.com/suraj_is_arun"}>
						<Card className='w-full'>
							<CardContent className='flex flex-col items-center text-center p-6 h-full'>
								<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
									<Instagram stroke='red' className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-medium mb-2'>Instagram</h3>
								<p className='text-muted-foreground'>
									Chat with me on Instagram
								</p>
							</CardContent>
						</Card>
					</Link>

					<Link
						className='h-full grow w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
						prefetch={false}
						target='_blank'
						href={"https://github.com/ikrarun"}>
						<Card className='w-full'>
							<CardContent className='flex flex-col items-center text-center p-6 h-full'>
								<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
									<Github stroke='black' className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-medium mb-2'>Github</h3>
								<p className='text-muted-foreground'>Check my work on Github</p>
							</CardContent>
						</Card>
					</Link>
				</ListAnimation>
			</div>
		</div>
	);
}
