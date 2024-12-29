import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	BookOpenIcon,
	EyeIcon,
	GithubIcon,
	MailIcon,
	RocketIcon,
	TargetIcon,
	TwitterIcon,
} from 'lucide-react';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-background/50'>
			<div className='container mx-auto max-w-4xl px-4 py-12'>
				{/* Hero Section */}
				<div className='mb-20 flex flex-col items-center justify-center text-center'>
					<h1 className='mb-6 text-4xl font-bold text-foreground md:text-5xl'>
						Hi, I&apos;m Kr. Arun
					</h1>
					<p className='max-w-2xl text-lg text-muted-foreground'>
						Full-stack developer passionate about creating meaningful digital
						experiences and turning ideas into reality through code.
					</p>
				</div>

				{/* Why i started this project and what i want to achieve  */}
				<div className='mb-12 flex flex-col items-center justify-center text-center'>
					<h2 className='mb-8 text-3xl font-bold text-foreground md:text-4xl'>
						Why I Started This Project
					</h2>
				</div>
				<div className='grid gap-6 md:grid-cols-2'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='space-y-6 text-left'
					>
						<Card className='h-fit border-0 bg-red-500/50'>
							<CardHeader className='flex w-full flex-row items-center gap-3'>
								<div className='flex h-full items-center justify-center gap-2'>
									<span className='flex h-full items-center justify-center rounded-xl bg-red-500 p-1'>
										<EyeIcon className='text-white' size={32} />
									</span>
									<h3 className='text-center text-2xl font-semibold'>
										The Vision
									</h3>
								</div>
							</CardHeader>
							<CardContent>
								<p>
									I started EduKation with a simple yet powerful vision: to make
									quality education accessible to everyone. Growing up, I
									witnessed how limited access to good education could impact
									lives. This platform is my way of bridging that gap.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className='space-y-6 text-left'
					>
						<Card className='h-fit border-0 bg-amber-500/50'>
							<CardHeader className='flex w-full flex-row items-center gap-3'>
								<div className='flex h-full items-center justify-center gap-2'>
									<span className='flex h-full items-center justify-center rounded-xl bg-amber-500 p-1'>
										<TargetIcon className='text-white' size={32} />
									</span>
									<h3 className='text-center text-2xl font-semibold'>
										The Mission
									</h3>
								</div>
							</CardHeader>
							<CardContent>
								<p>
									Our mission is to create a global community where knowledge
									flows freely between those who want to learn and those who
									want to teach. By leveraging technology, we&apos;re making
									education more personalized, accessible, and effective.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						className='space-y-6 text-left'
					>
						<Card className='h-fit border-0 bg-purple-500/50'>
							<CardHeader className='flex w-full flex-row items-center gap-3'>
								<div className='flex h-full items-center justify-center gap-2'>
									<span className='flex h-full items-center justify-center rounded-xl bg-purple-500 p-2'>
										<BookOpenIcon className='text-white' size={28} />
									</span>
								</div>
								<h3 className='text-center text-2xl font-semibold'>The Goal</h3>
							</CardHeader>
							<CardContent>
								<p>
									We aim to empower millions of learners worldwide by connecting
									them with passionate educators. Our goal is to become the
									go-to platform for meaningful educational connections,
									fostering a world where learning knows no boundaries.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}
						className='space-y-6 text-left'
					>
						<Card className='h-fit border-0 bg-orange-500/50'>
							<CardHeader className='flex w-full flex-row items-center gap-3'>
								<div className='flex h-full items-center justify-center gap-2'>
									<span className='flex h-full items-center justify-center rounded-xl bg-orange-500 p-2'>
										<RocketIcon className='text-white' size={28} />
									</span>
								</div>
								<h3 className='text-center text-2xl font-semibold'>
									The Future
								</h3>
							</CardHeader>
							<CardContent>
								<p>
									Looking ahead, we&apos;re committed to continuously innovating
									and improving our platform. We&apos;re working on integrating
									advanced AI features, expanding our subject offerings, and
									building tools that make the learning experience even more
									engaging and effective.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Connect Section */}
				<section className='mt-20 text-center'>
					<Card className='border'>
						<CardContent className='p-12'>
							<h2 className='mb-6 text-3xl font-bold text-foreground'>
								Let&apos;s Connect
							</h2>
							<p className='mx-auto mb-8 max-w-2xl text-muted-foreground'>
								Whether you want to discuss a project or just say hi, I&apos;m
								always open to new connections and opportunities.
							</p>
							<div className='flex flex-wrap justify-center gap-4'>
								{socialLinks.map((social, index) => (
									<Button
										key={index}
										variant='outline'
										asChild
										className='group bg-background/60 hover:bg-background/80'
									>
										<Link href={social.url} target='_blank'>
											<div className='text-primary'>{social.icon}</div>
											<span className='ml-2 text-foreground'>
												{social.label}
											</span>
										</Link>
									</Button>
								))}
							</div>
						</CardContent>
					</Card>
				</section>
			</div>
		</div>
	);
}

const socialLinks = [
	{
		icon: <GithubIcon className='h-5 w-5' />,
		label: 'GitHub',
		url: 'https://github.com/ikrarun',
	},
	{
		icon: <TwitterIcon className='h-5 w-5' />,
		label: 'Twitter',
		url: 'https://twitter.com/yebuddhakadesh',
	},
	{
		icon: <MailIcon className='h-5 w-5' />,
		label: 'Email',
		url: 'mailto:iamkrarun@gmail.com',
	},
];
