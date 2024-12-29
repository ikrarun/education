'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BetterButton } from '@/components/ui/betterbutton';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Copybutton from '@/components/ui/copybutton';
import { Separator } from '@/components/ui/separator';
import { notImplemented } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
	Briefcase,
	Home,
	Mail,
	MapPin,
	MenuIcon,
	Shield,
	Sparkles,
	SquareUser,
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SubscriptionStatus {
	isPro: boolean;
	validUntil: string;
}

const subscriptionStatus: SubscriptionStatus = {
	isPro: true,
	validUntil: '2024-12-31',
};

const ProfileHeader = () => (
	<CardHeader className='space-y-1'>
		<CardTitle className='text-xl font-medium'>Namaste</CardTitle>
		<CardDescription>Welcome to EduKation</CardDescription>
	</CardHeader>
);

const ProfileAvatar = ({ avatar }: { avatar: string }) => (
	<div className='relative mb-6 flex flex-col items-center'>
		{subscriptionStatus.isPro && (
			<div className='absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-yellow-600 via-yellow-800 to-amber-900 opacity-100 shadow-lg blur-sm dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-600 dark:opacity-75 dark:blur-md' />
		)}
		<Avatar className='relative h-28 w-28 border-4 border-primary shadow-lg'>
			<AvatarImage
				src={avatar || 'https://github.com/shadcn.png'}
				alt='@shadcn'
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
		{subscriptionStatus.isPro && (
			<Badge
				className={cn(
					'absolute -bottom-3',
					'animate-fade-in ease-in-out',
					'rounded-full px-3 py-1 text-center shadow-lg'
				)}
			>
				<span className='inline-flex items-center gap-1'>
					Pro
					<Sparkles className='h-4 w-4' />
				</span>
			</Badge>
		)}
	</div>
);

const UserInfo = ({ name, role }: { name: string; role: string }) => (
	<div className='mt-6 flex w-full flex-col items-start md:w-full'>
		<div className='flex flex-col items-start gap-2 px-2'>
			<h1 className='text-2xl font-bold'>{name}</h1>
			<h3 className='inline-flex items-center gap-2 text-muted-foreground'>
				<Shield className='h-5 w-5' /> Since 2023
			</h3>
		</div>
		<Separator className='my-4 w-full' />
		<div className='w-full space-y-3 px-2'>
			<div className='flex items-center gap-2 text-muted-foreground'>
				<Briefcase className='h-5 w-5' />
				<p className='text-sm'>{role}</p>
			</div>

			<div className='flex items-center gap-2 text-muted-foreground'>
				<MapPin className='h-5 w-5' />
				<p className='text-sm'>India</p>
			</div>
		</div>
	</div>
);

const ContactInfo = ({
	email,
	address,
}: {
	email: string;
	address: string;
}) => (
	<div className='mt-6 flex flex-col gap-2'>
		<div className='inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'>
			<Mail className='h-5 w-5' />
			<p className='text-sm leading-5'>{email}</p>
		</div>
		<div className='inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary'>
			<Home className='h-5 w-5' />
			<p className='text-sm leading-5'>{address}</p>
		</div>
		<Separator className='my-4 w-full bg-gray-200' />
		<div className='inline-flex items-center justify-center gap-2'>
			<BetterButton
				onClick={notImplemented}
				variant={'outline'}
				className={'flex-1'}
			>
				Settings
			</BetterButton>
			<BetterButton
				onClick={() => signOut({ callbackUrl: '/' })}
				variant={'destructive'}
				className={'flex-1'}
			>
				Logout
			</BetterButton>
		</div>
	</div>
);

const InsightsCard = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => (
	<Card
		className={cn(
			'w-auto grow flex-col',
			isSidebarOpen ? 'hidden md:flex' : 'flex md:flex'
		)}
	>
		<CardHeader className='space-y-2'>
			<div className='flex items-center justify-between'>
				<CardTitle className='text-2xl font-bold'>
					Thorough Evaluation
				</CardTitle>
				<Badge variant='outline' className='animate-pulse px-4'>
					Beta
				</Badge>
			</div>
			<CardDescription className='text-sm text-muted-foreground'>
				Review your detailed insights here
			</CardDescription>
		</CardHeader>
		<CardContent className='flex grow flex-col items-center justify-center'>
			<div className='text-center'>
				<Sparkles className='h-16 w-16 animate-pulse text-yellow-500' />
				<h2 className='mt-4 text-xl font-semibold'>
					Exciting things are coming!
				</h2>
				<p className='mt-2 text-muted-foreground'>
					We&apos;re working hard to bring you valuable insights.
				</p>
			</div>
		</CardContent>
		<CardFooter className='flex h-fit justify-center'>
			<CardDescription>Stay tuned for updates</CardDescription>
		</CardFooter>
	</Card>
);

export default function Profile() {
	const { data: session, status } = useSession();

	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				setShow(false);
			}
		});
		return () => {
			window.removeEventListener('resize', () => {});
		};
	}, [show]);

	if (status === 'loading') return <div>Loading...</div>;
	if (status === 'unauthenticated') return redirect('/login');

	if (!session?.user) {
		return redirect('/login');
	}

	console.log(session.user);

	return (
		<>
			<span
				onClick={() => setShow(!show)}
				className='m-1 mr-3 inline-flex cursor-pointer items-center justify-end gap-2 self-end rounded-sm p-1 outline outline-1 md:hidden'
			>
				{show ? <SquareUser size={16} /> : <MenuIcon size={16} />}
			</span>
			<main
				className={
					'items-top justify-top flex h-full min-h-[88vh] w-full grow flex-col gap-2 p-2 md:min-h-[92vh] md:flex-row md:p-0'
				}
			>
				<Card
					className={cn(
						'mx-auto flex w-full max-w-full grow flex-col gap-2 p-2 md:w-fit md:max-w-xs',
						show
							? 'h-full md:flex md:h-auto'
							: 'hidden h-full md:flex md:h-auto'
					)}
				>
					<ProfileHeader />
					<CardContent className='flex h-full grow flex-col justify-between'>
						<div className='flex w-full flex-col items-center gap-1 md:w-fit'>
							<div className='flex w-full flex-col items-center gap-1 self-start md:w-fit'>
								<ProfileAvatar avatar={session.user.image || ''} />
								{subscriptionStatus.isPro && (
									<div className='mt-2'>
										<Badge variant='outline' className='text-xs'>
											Valid until{' '}
											{new Date(
												subscriptionStatus.validUntil
											).toLocaleDateString()}
										</Badge>
									</div>
								)}
								<p className='mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground'>
									{session.user.id}
									<Copybutton text={session.user.id || 'User ID'} />
								</p>
							</div>
							<UserInfo
								name={session.user.name || 'Name'}
								role={session.user.role}
							/>
						</div>
						<ContactInfo
							email={session.user.email || 'Email Unavailable'}
							address={'Remote Address'}
						/>
					</CardContent>
				</Card>
				<InsightsCard isSidebarOpen={show} />
			</main>
		</>
	);
}
