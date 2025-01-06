import { usePaymentContext } from '@/components/providers/paymentContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react'

const DebitCardComponent = () => {
    const paymentContext = usePaymentContext();
    return (
			<Card
				className={cn(
					"flex flex-col gap-1 ",
					paymentContext.paymentMethod === "debit" ? "block" : "hidden"
				)}>
				<CardHeader>
					<CardTitle>Debit Card</CardTitle>
					<CardDescription>Pay using your debit card</CardDescription>
				</CardHeader>
				<CardContent>
					<Button>Pay Now</Button>
				</CardContent>
			</Card>
		);
}

export default DebitCardComponent
