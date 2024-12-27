import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	BookOpen,
	Briefcase,
	Camera,
	Code2,
	Gamepad,
	Github,
	Heart,
	Laptop,
	Mail,
	Music,
	Rocket,
	Twitter
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/components/providers/logo.svg";

export default function AboutPage() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background to-background/50">
			{/* Gradient Effects */}
			<div className="absolute inset-0 overflow-hidden -z-10">
				<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px]" />
				<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px]" />
			</div>

			<div className="container px-4 py-12 mx-auto max-w-4xl">
				{/* Hero Section */}
				<div className="flex flex-col items-center justify-center text-center mb-16">
					<div className="relative w-32 h-32 mb-8">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[20px] opacity-50" />
						<Image
							src={logo}
							alt="Profile"
							fill
							className="rounded-full object-cover border-4 border-background"
						/>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary ">
						Hi, I&apos;m Kr. Arun
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Full-stack developer passionate about creating meaningful digital experiences
						and turning ideas into reality through code.
					</p>
				</div>

				{/* Main Content */}
				<Tabs defaultValue="about" className="mb-16">
					<TabsList className="w-full gap-2 flex h-12 items-center justify-center rounded-lg bg-gradient-to-br from-card/50 to-card p-1 mb-8">
						<TabsTrigger 
							value="about"
							className="w-full ring-1 ring-inherit rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
						>
							<div className="flex items-center justify-center gap-2">
								<Code2 className="h-4 w-4" />
								<span>About Me</span>
							</div>
						</TabsTrigger>
						<TabsTrigger 
							value="journey"
							className="w-full ring-1 ring-inherit rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
						>
							<div className="flex items-center justify-center gap-2">
								<Rocket className="h-4 w-4" />
								<span>Journey</span>
							</div>
						</TabsTrigger>
						<TabsTrigger 
							value="interests"
							className="w-full ring-1 ring-inherit rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
						>
							<div className="flex items-center justify-center gap-2">
								<Heart className="h-4 w-4" />
								<span>Interests</span>
							</div>
						</TabsTrigger>
					</TabsList>

					<TabsContent value="about" className="mt-6 space-y-6 focus-visible:outline-none">
						<div className="space-y-4">
							<Card className="border-2 border-border/50 bg-gradient-to-br from-card/50 to-card hover:border-primary/50 transition-colors">
								<CardContent className="p-6">
									<p className="text-lg leading-relaxed text-muted-foreground">
										I&apos;m a self-taught developer with a passion for building web applications
										that solve real-world problems. With 5 years of experience in full-stack
										development, I specialize in React, Node.js, and modern web technologies.
									</p>
								</CardContent>
							</Card>

							<div className="grid md:grid-cols-2 gap-4">
								{techStack.map((tech, index) => (
									<Card key={index} className="group border-2 border-border/50 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card/50 to-card">
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<div className="rounded-lg p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors">
													{tech.icon}
												</div>
												<div>
													<h3 className="font-semibold mb-2">{tech.title}</h3>
													<p className="text-muted-foreground">{tech.description}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</TabsContent>

					<TabsContent value="journey" className="mt-6 focus-visible:outline-none">
						<div className="space-y-6">
							{journey.map((item, index) => (
								<Card key={index} className="overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card">
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<div className="rounded-full p-3 bg-primary/10">
												{item.icon}
											</div>
											<div>
												<div className="flex items-center gap-2 mb-1">
													<h3 className="font-semibold">{item.title}</h3>
													<span className="text-sm text-muted-foreground">• {item.period}</span>
												</div>
												<p className="text-muted-foreground">{item.description}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>

					<TabsContent value="interests" className="mt-6 focus-visible:outline-none">
						<div className="grid md:grid-cols-3 gap-6">
							{interests.map((interest, index) => (
								<Card key={index} className="group hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-card/50 to-card border-0">
									<CardContent className="p-6 text-center">
										<div className="rounded-lg p-3 bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-colors">
											{interest.icon}
										</div>
										<h3 className="font-semibold mb-2">{interest.title}</h3>
										<p className="text-muted-foreground text-sm">{interest.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>
				</Tabs>

				{/* Connect Section */}
				<section className="text-center">
					<Card className="border-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
						<CardContent className="p-12">
							<h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
							<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
								Whether you want to discuss a project or just say hi, I&apos;m always open to new
								connections and opportunities.
							</p>
							<div className="flex justify-center gap-4">
								{socialLinks.map((social, index) => (
									<Button key={index} variant="outline" asChild className="group">
										<Link href={social.url} target="_blank">
											{social.icon}
											<span className="ml-2">{social.label}</span>
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

const techStack = [
	{
		icon: <Laptop className="h-5 w-5 text-primary" />,
		title: "Frontend Development",
		description: "React, Next.js, TypeScript, Tailwind CSS"
	},
	{
		icon: <Code2 className="h-5 w-5 text-primary" />,
		title: "Backend Development",
		description: "Node.js, Express, PostgreSQL, MongoDB"
	},
];

const journey = [
	{
		icon: <Briefcase className="h-5 w-5 text-primary" />,
		title: "Freelance Developer",
		period: "2023 - Present",
		description: "Building custom web solutions for clients worldwide."
	},
	{
		icon: <Rocket className="h-5 w-5 text-primary" />,
		title: "First Major Project",
		period: "2022",
		description: "Launched my first full-stack application."
	},
	{
		icon: <BookOpen className="h-5 w-5 text-primary" />,
		title: "Started Coding",
		period: "2021",
		description: "Began my self-taught programming journey."
	},
];

const interests = [
	{
		icon: <Code2 className="h-5 w-5 text-primary" />,
		title: "Coding",
		description: "Building and experimenting with new technologies"
	},
	{
		icon: <Music className="h-5 w-5 text-primary" />,
		title: "Music",
		description: "Playing guitar and discovering new genres"
	},
	{
		icon: <Camera className="h-5 w-5 text-primary" />,
		title: "Photography",
		description: "Capturing moments and editing photos"
	},
	{
		icon: <Gamepad className="h-5 w-5 text-primary" />,
		title: "Gaming",
		description: "Enjoying story-driven games and indies"
	},
];

const socialLinks = [
	{
		icon: <Github className="h-5 w-5" />,
		label: "GitHub",
		url: "https://github.com/yourusername"
	},
	{
		icon: <Twitter className="h-5 w-5" />,
		label: "Twitter",
		url: "https://twitter.com/yourusername"
	},
	{
		icon: <Mail className="h-5 w-5" />,
		label: "Email",
		url: "mailto:your@email.com"
	},
];
