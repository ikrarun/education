import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/betterbutton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Copybutton from '@/components/ui/copybutton';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, Circle, CircleCheck, Home, Mail, MapPin} from 'lucide-react';
import Link from 'next/link';

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
		<CardTitle className='text-xl font-medium'>Profile</CardTitle>
		<CardDescription>Hey, Welcome to EduKation</CardDescription>
	</CardHeader>
);

const ProfileAvatar = () => (
	<div className='relative'>
		<Avatar className='h-24 w-24'>
			<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
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

const UserInfo = () => (
	<div className='mt-6 flex w-full flex-col items-start md:w-fit'>
		<h1 className='px-2 text-2xl font-bold'>Kumar Arun</h1>
		<div className='mt-1 flex items-center gap-2'>
			<Badge variant='secondary'>
				<Briefcase className='mr-1 h-3 w-3' />
				Full Stack Developer
			</Badge>
		</div>
		<Separator className='my-2 w-full bg-gray-300' />
		<div className='space-y-2 px-2'>
			<h3 className='inline-flex items-center gap-2 text-gray-800'>
				<Calendar className='h-4 w-4 text-gray-600' />
				Active Since 2023{' '}
				<CircleCheck fill='rgb(34 197 94)' stroke='white' className='h-5 w-5' />
			</h3>
			<div className='flex items-center gap-2 text-gray-700'>
				<MapPin className='h-4 w-4' />
				<p className='text-sm'>India</p>
			</div>
		</div>
	</div>
);

const ContactInfo = () => (
	<div className='mt-6 flex flex-col gap-2'>
		<div className='inline-flex items-center gap-2 text-gray-700 transition-colors hover:text-primary'>
			<Mail className='h-5 w-5' />
			<p className='text-sm leading-5'>iamkrarun@gmail.com</p>
		</div>
		<div className='inline-flex items-center gap-2 text-gray-700 transition-colors hover:text-primary'>
			<Home className='h-5 w-5' />
			<p className='text-sm leading-5'>Mukharjee Nagar, New Delhi</p>
		</div>
		<Separator className='my-4 w-full bg-gray-200' />
		<div className='flex gap-2'>
			<Link
				href='/settings'
				className={`${buttonVariants({ variant: 'outline' })} flex-1`}
			>
				Settings
			</Link>
			<Link
				href={'/'}
				className={`${buttonVariants({ variant: 'destructive' })} flex-1`}
			>
				Logout
			</Link>
		</div>
	</div>
);

const InsightsCard = () => (
	<Card className='flex w-auto grow flex-col'>
		<CardHeader className='space-y-2'>
			<div className='flex items-center justify-between'>
				<CardTitle className='text-2xl font-medium text-gray-800'>
					Thorough Evaluation
				</CardTitle>
				<Badge variant='outline' className='px-4'>
					Beta
				</Badge>
			</div>
			<CardDescription className='text-sm text-gray-600'>
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
	return (
		<main className='items-top justify-top flex h-full min-h-[90vh] w-full grow flex-col-reverse gap-2 p-2 md:flex-row md:p-0'>
			<Card className='mx-auto flex w-full max-w-full flex-col gap-2 p-2 md:w-fit md:max-w-xs'>
				<ProfileHeader />
				<CardContent className='flex h-full grow flex-col justify-between'>
					<div className='flex w-full flex-col items-center gap-1 md:w-fit'>
						<div className='flex w-full flex-col items-center gap-1 self-start md:w-fit'>
							<ProfileAvatar />
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
								@suraj_is_arun <Copybutton text={'@suraj_is_arun'} />
							</p>
						</div>
						<UserInfo />
					</div>
					<ContactInfo />
				</CardContent>
			</Card>
			<InsightsCard />
		</main>
	);
}
