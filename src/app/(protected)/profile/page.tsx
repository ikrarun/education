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
	BadgeCheck,
	Briefcase,
	Calendar,
	Circle,
	CircleCheck,
	Home,
	Mail,
	MapPin,
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


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
	<div className='relative'>
		<Avatar className='h-24 w-24'>
			<AvatarImage
				src={avatar || 'https://github.com/shadcn.png'}
				alt='@shadcn'
			/>
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
		<Badge
			className={cn(
				'absolute -bottom-2 right-0',
				'duration-500 animate-in fade-in-0'
			)}
			variant={subscriptionStatus.isPro ? 'success' : 'secondary'}
		>
			<span className='inline-flex items-center gap-1'>
				{subscriptionStatus.isPro ? (
					<>
						Pro
						<CircleCheck className='h-3 w-3' />
					</>
				) : (
					'Free'
				)}
			</span>
		</Badge>
	</div>
);

const UserInfo = ({ name }: { name: string }) => (
	<div className='mt-6 flex w-full flex-col items-start md:w-fit'>
		<h1 className='px-2 text-2xl font-bold'>{name}</h1>
		<div className='mt-1 flex items-center gap-2'>
			<Badge variant='secondary'>
				<Briefcase className='mr-1 h-3 w-3' />
				Full Stack Developer
			</Badge>
		</div>
		<Separator className='my-2 w-full' />
		<div className='space-y-2 px-2'>
			<h3 className='inline-flex items-center gap-2 text-muted-foreground'>
				<Calendar className='h-4 w-4' />
				Active Since 2023{' '}
				<BadgeCheck
					fill='#0058e6'
					className='h-5 w-5 text-primary-foreground'
				/>
			</h3>
			<div className='flex items-center gap-2 text-muted-foreground'>
				<MapPin className='h-4 w-4' />
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

const InsightsCard = () => (
	<Card className='flex w-auto grow flex-col'>
		<CardHeader className='space-y-2'>
			<div className='flex items-center justify-between'>
				<CardTitle className='text-2xl font-medium'>
					Thorough Evaluation
				</CardTitle>
				<Badge variant='outline' className='px-4'>
					Beta
				</Badge>
			</div>
			<CardDescription className='text-sm text-muted-foreground'>
				Review your detailed insights here
			</CardDescription>
		</CardHeader>
		<CardContent className='flex grow flex-col items-center justify-center'>
			<h1 className='relative inline-flex items-center gap-2'>
				I am working on it
				<Circle
					className='absolute -right-3 -top-2 h-3 w-3 animate-pulse transition-all duration-1000 ease-in-out'
					stroke='green'
					fill='green'
				/>
			</h1>
		</CardContent>
		<CardFooter className='flex h-fit'>
			<CardDescription>We will add more soon</CardDescription>
		</CardFooter>
	</Card>
);

export default function Profile() {
	const { data: session, status } = useSession();

	if (status === 'loading') return <div>Loading...</div>;
	if (status === 'unauthenticated') return redirect('/login');

	if (!session?.user) {
		return redirect('/login');
	}

	console.log(session.user);

	return (
		<main className='items-top justify-top flex h-full min-h-[90vh] w-full grow flex-col-reverse gap-2 p-2 md:flex-row md:p-0'>
			<Card className='mx-auto flex w-full max-w-full flex-col gap-2 p-2 md:w-fit md:max-w-xs'>
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
						<UserInfo name={session.user.name || 'Name'} />
					</div>
					<ContactInfo
						email={session.user.email || 'Email Unavailable'}
						address={'Remote Address'}
					/>
				</CardContent>
			</Card>
			<InsightsCard />
		</main>
	);
}
