import { Card, CardContent } from "@/components/ui/card";
import { Github, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function page() {
	return (
		<div className='flex flex-col items-center justify-center grow'>
			<div className='flex flex-col gap-1 items-center '>
				<h1 className='my-2 mb-8 text-2xl'>Connect with the Developer !</h1>
				<div className='flex gap-2 w-fit flex-col md:flex-row'>
					<Card className='h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
						<CardContent className='flex flex-col items-center text-center p-6 h-full'>
							<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
								<Twitter stroke='blue' className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Twitter</h3>
							<p className='text-muted-foreground'>
								Connect with me on Twitter
							</p>
						</CardContent>
					</Card>

					<Card className='h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
						<CardContent className='flex flex-col items-center text-center p-6 h-full'>
							<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
								<Instagram stroke='red' className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Instagram</h3>
							<p className='text-muted-foreground'>
								Connect with me on Instagram
							</p>
						</CardContent>
					</Card>

					<Card className='h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
						<CardContent className='flex flex-col items-center text-center p-6 h-full'>
							<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
								<Github stroke='black' className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Github</h3>
							<p className='text-muted-foreground'>Connect with me on Github</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
