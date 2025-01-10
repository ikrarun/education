// import { BetterButton } from "@/components/ui/betterbutton";
// import { Check, UserCog, UserPlus } from "lucide-react";
import { Check } from "lucide-react";
// const ROLE_BUTTONS = [
// 	{
// 		href: "/student",
// 		Icon: UserPlus,
// 		label: "Join as Student",
// 		variant: "default" as const,
// 	},
// 	{
// 		href: "/about",
// 		Icon: UserCog,
// 		label: "Join as Teacher",
// 		variant: "outline" as const,
// 	},
// ] as const;

const ListItem = ({ text }: { text: string }) => (
	<li className='flex cursor-pointer items-center gap-3 rounded-md p-3 transition-colors '>
		<span className='flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm'>
			<Check className='h-3.5 w-3.5' strokeWidth={3} />
		</span>
		<span className='text-sm font-medium '>{text}</span>
	</li>
);

export default function CallToAction() {
	return (
		<div className='mx-auto w-full max-w-3xl px-4'>
			<div className='flex flex-col items-center space-y-8'>
				{/* Quick Benefits */}
				<div className='flex w-full flex-col gap-4 '>
					<ul className='grid gap-4 md:grid-cols-3'>
						<ListItem text='No Platform Fees' />
						<ListItem text='Pay for Lessons Only' />
						<ListItem text='Zero Commission' />
					</ul>
				</div>
				{/* Role Selection Buttons
				<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
					{ROLE_BUTTONS.map(({ href, Icon, label, variant }) => (
						<BetterButton
							key={href}
							href={href}
							size='lg'
							variant={variant}
							className='group relative overflow-hidden transition-all hover:scale-105'>
							<div className='flex items-center justify-center gap-3 p-2'>
								<Icon className='h-6 w-6 transition-transform group-hover:scale-110' />
								<span className='text-lg font-medium'>{label}</span>
							</div>
						</BetterButton>
					))}
				</div> */}
			</div>
		</div>
	);
}
