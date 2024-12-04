"use client";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
const features: { title: string; logo: string; description: string }[] = [
	{
		title: "Twitter",
		logo: "https://simpleicons.org/icons/x.svg",
		description: "Follow me on Twitter",
	},
	{
		title: "GitHub",
		logo: "https://simpleicons.org/icons/github.svg",
		description: "Follow me on GitHub",
	},
	{
		title: "Instagram",
		logo: "https://simpleicons.org/icons/instagram.svg",
		description: "Follow me on Instagram",
	},
];

export default function page() {
	return (
		<div className='flex flex-col items-center justify-center grow'>
			<div className='flex flex-col gap-1 items-center '>
				<h1 className='my-2'>Connect with the Developer !</h1>
				<div className='flex gap-2 [&>a]:px-4 [&>a]:py-2 w-fit flex-col'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}>
							<Card className='h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
								<CardContent className='flex flex-col items-center text-center p-6 h-full'>
									<div className='p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4'>
										<Image width={20} height={20} src={feature.logo} alt='' />
									</div>
									<h3 className='text-xl font-semibold mb-2'>
										{feature.title}
									</h3>
									<p className='text-muted-foreground'>{feature.description}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
