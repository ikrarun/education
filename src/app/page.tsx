"use client";

import * as motion from "motion/react-client";
import {
	Shield,
	Users,
	ChevronRight,
	Book,
	Globe,
	Flame,
	GoalIcon,
	Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PreLaunchEduKation = () => {
	const features = [
		{
			icon: (
				<Flame className='w-9 p-1 pb-2 h-9 text-red-500 bg-red-500/20 rounded-full' />
			),
			title: "Priority Access",
			description:
				"Be the first to experience revolutionary learning tools and features.",
		},
		{
			icon: (
				<Users className='w-9 p-1 py-2 h-9 text-blue-700 bg-blue-700/20 rounded-full' />
			),
			title: "Founding Member Status",
			description:
				"Exclusive perks and benefits reserved for our earliest supporters.",
		},
		{
			icon: (
				<GoalIcon className='w-9 p-1 py-2 h-9 text-green-500 bg-green-500/20 rounded-full' />
			),
			title: "Direct Input",
			description:
				"Shape the platform's future with direct access to our development team.",
		},
	];

	return (
		<div className='h-full flex flex-col  items-center justify-center'>
			{/* Hero Section */}
			<section className='py-8 relative overflow-hidden'>
				<div className='container mx-auto px-6 text-center relative z-10'>
					<div className='inline-flex items-center gap-1 border pl-2 pr-4 outline outline-1 outline-amber-700/40 animate-pulse transition-all ease-in-out duration-1000 py-2 rounded-full mb-10'>
						<Sparkles className='w-6 p-1 rounded-full text-amber-700 h-6' />
						<span className='text-sm font-medium'>Coming Soon</span>
					</div>

					<motion.h1
						className='text-5xl md:text-7xl font-bold mb-8'
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						The Future of Learning
						<br />
						<span className='bg-clip-text'>Is Almost Here</span>
					</motion.h1>

					<motion.p
						className='text-xl mb-8 max-w-2xl mx-auto'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}>
						Join us in revolutionizing education through personalized learning
						experiences and expert-led instruction. Be among the first to shape
						the future.
					</motion.p>

					<motion.div
						className='flex flex-col sm:flex-row gap-6 justify-center mb-14'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}>
						<Button
							asChild
							className='px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
							<Link href='/newsletter' className='flex items-center gap-2'>
								Join Waitlist <ChevronRight className='w-4 h-4' />
							</Link>
						</Button>
					</motion.div>

					<div className='flex flex-wrap justify-center gap-10 text-sm'>
						<div className='flex outline outline-1 outline-emerald-500/40 pl-1 pr-2 py-1 rounded-full items-center gap-1'>
							<Shield className='w-6 p-1 bg-emerald-500/20 rounded-full text-emerald-500 h-6' />
							<span>Verified Tutors</span>
						</div>
						<div className='flex outline outline-1 outline-blue-700/40 pl-1 pr-2 py-1 rounded-full  items-center gap-1'>
							<Globe className='w-6 p-1 bg-blue-700/20 rounded-full text-blue-700 h-6' />
							<span>Vast Community</span>
						</div>
						<div className='flex outline outline-1 outline-amber-700/40 pl-1 pr-2 py-1 rounded-full items-center gap-1'>
							<Book className='w-6 p-1 bg-amber-700/20 rounded-full text-amber-700 h-6' />
							<span>Expert-Led Content</span>
						</div>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className='py-4 relative'>
				<div className='container mx-auto px-6'>
					<motion.h2
						className='text-4xl font-bold text-center mb-14'
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						Early Access Benefits
					</motion.h2>

					<div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2, duration: 0.8 }}>
								<Card className='h-full outline outline-1 outline-primary/20 p-6 backdrop-blur-sm'>
									<div className='w-12 h-12 rounded-full flex items-center justify-center mb-4'>
										{feature.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2'>
										{feature.title}
									</h3>
									<p className=''>{feature.description}</p>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<div className='h-fit py-4 mt-10 w-full  self-end bottom-0 bg-gradient-to-b from-transparent to-background'>
				<h1 className='text-center text-sm font-medium'>
					Crafted with ❤️ by{" "}
					<Link
						href='https://www.instagram.com/@suraj_is_arun'
						target='_blank'
						className='text-blue-500 hover:text-blue-600 transition-colors'>
						Kumar Arun
					</Link>
				</h1>
			</div>
		</div>
	);
};

export default PreLaunchEduKation;
