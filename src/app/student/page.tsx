import { Badge } from '@/components/ui/badge';
import { BetterButton } from '@/components/ui/betterbutton';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	Check,
	HeartHandshake,
	MessageSquare,
	ReceiptIndianRupee,
	Shield,
	Zap,
} from 'lucide-react';
import { FcApproval, FcGraduationCap } from 'react-icons/fc';

const ListItem = ({ text }: { text: string }) => (
	<li className='flex items-center gap-3 p-2'>
		<span className='flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary'>
			<Check className='h-3.5 w-3.5' strokeWidth={3} />
		</span>
		<span className='text-sm text-muted-foreground'>{text}</span>
	</li>
);

const ProPlanFeatures = [
	'✨ Premium Verified Tutors Only',
	'💯 100% Money-Back Guarantee',
	'⚡ Priority Support 24/7',
	'🛡️ Full Payment Protection',
	'🏆 Exclusive Learning Resources',
	'⭐ Dedicated Account Manager',
];

const FeatureComparison = [
	{
		feature: 'Payment Handling',
		free: 'Self-managed direct payments',
		pro: '✓ Secure platform-managed payments',
	},
	{
		feature: 'Tutor Communication',
		free: 'Direct unmonitored chat',
		pro: '✓ Monitored safe channels',
	},
	{
		feature: 'Dispute Resolution',
		free: 'No platform support',
		pro: '✓ Full resolution service',
	},
	{
		feature: 'Money Protection',
		free: 'No guarantees',
		pro: '✓ 100% money-back guarantee',
	},
	{
		feature: 'Tutor Verification',
		free: 'Basic verification',
		pro: '✓ Advanced background checks',
	},
	{
		feature: 'Support Level',
		free: 'Community support',
		pro: '✓ 24/7 Priority support',
	},
];

const StudentPage = () => {
	return (
		<div className='container mx-auto flex w-full max-w-[900px] flex-col justify-center gap-12 px-4 py-16'>
			<div className='flex flex-col items-center justify-center space-y-6 text-center'>
				<Badge variant='secondary' className='mb-4'>
					<FcGraduationCap className='mr-2 h-4 w-4' />
					Student Dashboard
				</Badge>
				<h1 className='text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl'>
					Welcome to Your{' '}
					<span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
						Learning Journey!
					</span>
				</h1>
				<p className='max-w-2xl text-lg text-muted-foreground'>
					A platform designed with you in mind to help you succeed in your
					academic goals.
				</p>
			</div>

			{/* Quick Feature Overview */}
			<div className='space-y-8'>
				<div className='space-y-4 text-center'>
					<Badge variant='outline' className='px-4 py-1'>
						<Zap className='mr-2 h-4 w-4 text-yellow-500' />
						Platform Features
					</Badge>
					<h2 className='text-3xl font-bold'>Choose Your Learning Style</h2>
					<p className='mx-auto max-w-2xl text-muted-foreground'>
						Compare our plans and choose the one that fits your needs
					</p>
				</div>

				{/* Detailed Pricing Plans */}
				<div className='space-y-8'>
					<div className='mx-auto flex w-full flex-col gap-6'>
						{/* Free Plan */}
						<Card className='relative overflow-hidden border-2'>
							<CardHeader className='space-y-2'>
								<CardTitle className='text-2xl font-bold'>Basic Plan</CardTitle>
								<CardDescription className='flex items-center gap-2'>
									<FcApproval className='h-5 w-5' />
									Self-managed learning
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='text-3xl font-bold'>
									₹0
									<span className='text-lg font-normal text-muted-foreground'>
										/month
									</span>
								</div>
								<div className='rounded-lg bg-secondary/50 p-4 text-sm'>
									<p className='text-muted-foreground'>
										Basic access with no platform fees. Self-managed learning.
									</p>
								</div>
								<div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
									<ListItem text='Basic access to tutor listings' />
									<ListItem text='Direct messaging with tutors' />
									<ListItem text='Self-managed learning' />
									<ListItem text='Non-Protected Payments' />
								</div>
							</CardContent>
							<CardFooter>
								<BetterButton href='/login' className='w-full' variant='outline'>
									Start Free
								</BetterButton>
							</CardFooter>
						</Card>

						{/* Pro Plan */}
						<Card className='relative overflow-hidden border-2 border-blue-600 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/50 dark:to-background'>
							<div className='absolute -right-16 -top-16 h-40 w-40 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-10 blur-3xl' />
							<div className='absolute right-4 top-4'>
								<Badge className='bg-gradient-to-r from-blue-600 to-indigo-600 uppercase'>
									Recommended
								</Badge>
							</div>
							<CardHeader className='space-y-2'>
								<CardTitle className='text-2xl font-bold'>
									Premium Plan
								</CardTitle>
								<CardDescription className='flex items-center gap-2'>
									<ReceiptIndianRupee
										fill='gold'
										stroke='green'
										className='h-5 w-5'
									/>
									Full Platform Protection & Benefits
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='text-3xl font-bold'>
									₹300
									<span className='text-lg font-normal text-muted-foreground'>
										/month
									</span>
									<span className='ml-2 text-sm text-green-600 dark:text-green-400'>
										Save 20% yearly
									</span>
								</div>
								<div className='rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 p-4 text-sm dark:from-blue-950/50 dark:to-indigo-950/50'>
									<p className='font-medium text-blue-900 dark:text-blue-100'>
										🛡️ Premium Protection Package:
									</p>
									<ul className='mt-2 list-disc pl-4 text-muted-foreground'>
										<li>Full payment protection & escrow service</li>
										<li>100% refund guarantee for valid issues</li>
										<li>Dedicated dispute resolution team</li>
									</ul>
								</div>
								<ul className='space-y-2'>
									{ProPlanFeatures.map((feature, index) => (
										<ListItem key={index} text={feature} />
									))}
								</ul>
							</CardContent>
							<CardFooter className='flex flex-col gap-4'>
								<BetterButton
									href='/login'
									className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
								>
									Upgrade to Premium
								</BetterButton>
								<p className='text-center text-xs text-muted-foreground'>
									30-day money-back guarantee • Cancel anytime
								</p>
							</CardFooter>
						</Card>
					</div>
				</div>

				{/* Feature Highlights */}
				<div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
					<Card className='border-2'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2 text-lg'>
								<Shield className='h-5 w-5 text-primary' />
								Payment Security
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-muted-foreground'>
								Pro users get escrow protection and guaranteed refunds for valid
								issues
							</p>
						</CardContent>
					</Card>

					<Card className='border-2'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2 text-lg'>
								<MessageSquare className='h-5 w-5 text-primary' />
								Safe Communication
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-muted-foreground'>
								All messages are monitored and stored for your protection
							</p>
						</CardContent>
					</Card>

					<Card className='border-2'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2 text-lg'>
								<HeartHandshake className='h-5 w-5 text-primary' />
								Dispute Resolution
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-muted-foreground'>
								Our team handles any issues that arise between you and tutors
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Value Proposition */}
				<div className='rounded-lg border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center dark:border-blue-900 dark:from-blue-950/50 dark:to-indigo-950/50'>
					<h3 className='mb-4 text-2xl font-bold'>Why Go Pro?</h3>
					<p className='mx-auto max-w-2xl text-muted-foreground'>
						Our Pro plan offers complete peace of mind with full platform
						protection. We handle all payments, communications, and potential
						issues, letting you focus solely on your learning journey.
					</p>
					<Button
						className='mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
						size='lg'
					>
						<Shield className='mr-2 h-4 w-4' /> Get Protected Now
					</Button>
				</div>
			</div>

			{/* Feature Comparison Table */}
			<div className='space-y-4 text-center'>
				<Badge variant='outline' className='px-4 py-1'>
					<Zap className='mr-2 h-4 w-4 text-yellow-500' />
					Detailed Plans
				</Badge>
				<h2 className='text-3xl font-bold'>Choose Your Plan</h2>
			</div>
			<Card className='border-2'>
				<CardHeader>
					<CardTitle>Plan Comparison</CardTitle>
					<CardDescription>
						See what&apos;s included in each plan
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[300px]'>Feature</TableHead>
								<TableHead>Free Plan</TableHead>
								<TableHead>Pro Plan</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{FeatureComparison.map((item, i) => (
								<TableRow key={i}>
									<TableCell className='font-medium'>{item.feature}</TableCell>
									<TableCell className='text-muted-foreground'>
										{item.free}
									</TableCell>
									<TableCell className='font-medium text-primary'>
										{item.pro}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter className='text-sm text-muted-foreground'>
					* Pro plan includes all Free plan features plus enhanced protection
				</CardFooter>
			</Card>
		</div>
	);
};

export default StudentPage;
