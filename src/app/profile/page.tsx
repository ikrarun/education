import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Copybutton from "@/components/ui/copybutton";
import { Separator } from "@/components/ui/separator";
import { Circle, CircleCheck, Home, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

/**
 * Profile page, displays user profile information and other details like
 * detailed evaluation etc.
 *
 * @returns {React.ReactElement} The Profile page component
 */
export default function Profile() {
	return (
		<main className='flex select-none md:p-0 p-2 h-full min-h-[90vh] md:flex-row gap-2 flex-col-reverse w-full grow items-top justify-top'>
			<Card className='mx-auto w-full md:w-fit flex flex-col p-2 max-w-full md:max-w-xs gap-2'>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-xl font-medium'>Profile</CardTitle>
					<CardDescription>Hey, Welcome to EduKation</CardDescription>
				</CardHeader>
				<CardContent className='h-full grow flex flex-col justify-between'>
					<div className='flex gap-1 flex-col items-center w-full md:w-fit'>
						<div className='flex gap-1 flex-col items-center self-start w-full md:w-fit'>
							<Avatar className='h-24 w-24'>
								<AvatarImage
									src='https://github.com/shadcn.png'
									alt='@shadcn'
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<p
								className='text-sm inline-flex
						items-center gap-2 text-muted-foreground'>
								@suraj_is_arun <Copybutton text={"@suraj_is_arun"} />
							</p>
						</div>
						<div className='flex flex-col items-start md:w-fit w-full mt-6'>
							<h1 className='text-2xl font-bold'>Kumar Arun</h1>
							<p className='text-gray-700 text-sm'>Full Stack Developer</p>
							<Separator className='w-full bg-gray-300 my-2' />
							<h3 className='text-gray-800 inline-flex items-center gap-2'>
								Active Since 2023{" "}
								<CircleCheck
									fill='rgb(34 197 94)'
									stroke='white'
									className='h-5 w-5'
								/>
							</h3>
							<p className='text-gray-700 leading-5 text-sm'>+91 1234567890</p>
						</div>
					</div>

					<div className='flex flex-col mt-6 gap-2'>
						<div className='inline-flex text-gray-700 gap-2 items-center'>
							<Mail className='w-5 h-5' />
							<p className=' leading-5 text-sm'>iamkrarun@gmail.com</p>
						</div>
						<div className='inline-flex text-gray-700 gap-2 items-center'>
							<Home className='w-5 h-5' />
							<p className=' leading-5 text-sm'>Mukharjee Nagar, New Delhi</p>
						</div>
						<Separator className='w-full bg-gray-200 my-4' />
						<Link
							href={"/"}
							className={`${buttonVariants({ variant: "destructive" })}`}>
							Logout
						</Link>
					</div>
				</CardContent>
			</Card>
			<Card className='w-auto flex flex-col grow'>
				<CardHeader className='space-y-2'>
					<CardTitle className='text-2xl font-medium text-gray-800'>
						Thorough Evaluation
					</CardTitle>
					<CardDescription className='text-sm text-gray-600'>
						Review your detailed insights here
					</CardDescription>
				</CardHeader>

				<CardContent className='grow flex flex-col items-center justify-center'>
					<h1 className="inline-flex relative gap-2 items-center">
						I am working on it
						<Circle
							className='w-3 absolute -top-2 -right-3 animate-pulse duration-1000 ease-in-out transition-all h-3'
							stroke='green'
							fill='green'
						/>
					</h1>
				</CardContent>
				<CardFooter className='flex h-fit'>
					<CardDescription>We will add more soon</CardDescription>
				</CardFooter>
			</Card>
		</main>
	);
}
