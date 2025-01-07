"use client";
import { usePaymentContext } from "@/components/providers/paymentContext";

import { Inter as Font } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardTitle,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NumericFormat } from "react-number-format";

const font = Font({
	subsets: ["latin"],
});

const PaymentPage = () => {
	const paymentContext = usePaymentContext();
	return (
		<div className='flex h-full w-fit grow flex-col max-w-fit mx-auto gap-2 pt-12 bg-background p-4'>
			<h1 className='text-2xl font-bold'>Thank you for your support!</h1>
			<p className='text-sm text-muted-foreground'>
				Your donation will help us continue to support our initiative.
			</p>
			<div style={font.style}>
				<Card className='w-fit mx-auto h-fit duration-1000 ease-in-out transition-all'>
					<CardHeader>
						<CardTitle>Donation Details</CardTitle>
					</CardHeader>
					<CardContent className='flex flex-col gap-2'>
						<NumericFormat
							placeholder='Enter your desired amount'
							value={paymentContext.donationAmount}
							allowNegative={false}
							allowLeadingZeros={false}
							fixedDecimalScale={true}
							decimalScale={2}
							prefix='₹ '
							autoComplete='off'
							className='space-x-1'
							min={1}
							onValueChange={(value) => {
								paymentContext.setDonationAmount(value.floatValue ?? 0);
							}}
							inputMode='decimal'
							customInput={Input}
						/>
						<p className='text-sm text-muted-foreground'>
							Please enter the amount you wish to donate.
						</p>

						<Input
							type='text'
							placeholder='Enter your name'
							value={paymentContext.userName}
							onChange={(e) => {
								paymentContext.setUserName(e.target.value);
							}}
						/>
						<p className='text-sm text-muted-foreground'>
							Please enter your name.
						</p>

						<Input
							type='text'
							placeholder='Enter your phone number'
							value={paymentContext.userPhone}
							onChange={(e) => {
								paymentContext.setUserPhone(e.target.value);
							}}
						/>
						<p className='text-sm text-muted-foreground'>
							Please enter your phone number.
						</p>

						<Button
							className='w-fit mt-2'
							variant={"default"}
							onClick={() => {
								paymentContext.proceedToPayment();
							}}>
							Continue
						</Button>
					</CardContent>
					<CardFooter>
						<p className='text-xs text-muted-foreground'>
							Your donation will be used to support the development of the
							platform
						</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default PaymentPage;
