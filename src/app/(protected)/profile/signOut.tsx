'use client';
import { BetterButton, buttonVariants } from '@/components/ui/betterbutton';
import { signOut } from 'next-auth/react';

export function SignOut() {
	return (
		<BetterButton
			onClick={() => signOut()}
			className={`${buttonVariants({ variant: 'destructive' })} flex-1`}
		>
			Logout
		</BetterButton>
	);
}
