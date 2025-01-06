"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { usePaymentContext } from "@/components/providers/paymentContext";
import { cn } from "@/lib/utils";
import React from "react";
const predefinedAmounts = [1, 5, 10, 20, 50, 100];

const DonationPicker = () => {
	const paymentContext = usePaymentContext();

	return (
		<Card className='w-full my-4 p-4 h-fit gap-4 duration-1000 ease-in-out transition-all flex flex-col '>
			<CardHeader className='p-0 '>
				<CardTitle>Donation Details</CardTitle>
				<CardDescription>
					<p>Your Donation is to support the development of the platform</p>
				</CardDescription>
			</CardHeader>
			<CardContent className='p-0 flex flex-col gap-2'>
				<h1 className='mt-4 text-sm text-muted-foreground'>
					Choose your desired amount to donate
				</h1>
				<div className='grid container w-full gap-1 grid-cols-2 sm:grid-cols-4 md:grid-cols-6'>
					{predefinedAmounts.map((amount) => (
						<Button
							key={amount}
							onClick={() => paymentContext.setDonationAmount(amount)}
							className={cn(
								"w-full text-foreground",
								buttonVariants({
									variant:
										paymentContext.donationAmount === amount
											? "default"
											: "outline",
								})
							)}>
							{amount}
						</Button>
					))}
				</div>

				<Button
					disabled={paymentContext.showPaymentPanel}
					className='w-fit self-center mt-2'
					variant={"default"}
					onClick={paymentContext.startSettingUpPayment}>
					Continue
				</Button>
			</CardContent>
			<CardFooter className='mb-0 p-0'>
				<CardDescription>
					<p className=''>{paymentContext.donationDate}</p>
				</CardDescription>
			</CardFooter>
		</Card>
	);
};

export default DonationPicker;
