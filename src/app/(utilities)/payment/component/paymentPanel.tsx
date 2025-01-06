"use client";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { usePaymentContext } from "@/components/providers/paymentContext";

import UpiCompoent from "./upiQRCompoent";
import PaymentModeSwitcher from "./PaymentModeSwitcher";
import UpiCollectComponent from "./upiCollectComponent";
import UpiIntentComponent from "./upiIntentComponent";

const PaymentCard = () => {
	const paymentContext = usePaymentContext();
	return paymentContext.showPaymentPanel ? (
		<Card
			className={cn(
				"w-full my-4 p-4 duration-1000 ease-in-out transition-all gap-4 flex flex-col "
			)}>
			<CardHeader className='p-0'>
				<CardTitle>
					You are donating ₹ {paymentContext.donationAmount}
				</CardTitle>
				<CardDescription>
					We have multiple payment option kindly select on which suits you
					better.
				</CardDescription>
			</CardHeader>

			<CardContent className='p-0 flex flex-col gap-2 mt-4'>
				{/* List of Payment Methods */}
				<PaymentModeSwitcher />
				{/* UPI Payment Method */}
				<UpiCompoent />
				{/* Debit Card Payment Method
				<DebitCardComponent /> */}
				{/* UPI Collect Payment Method */}
				<UpiCollectComponent />
				{/* UPI Intent Payment Method */}
				{paymentContext.onlyOnMobile && <UpiIntentComponent />}
			</CardContent>
		</Card>
	) : null;
};

export default PaymentCard;
