"use client";

import { usePaymentContext } from "@/components/providers/paymentContext";
import { Button } from "@/components/ui/button";
import React from "react";

export const RetryPaymentSection = ({ orderId }: { orderId: string }) => {
	const paymentContext = usePaymentContext();
	return (
		<Button
			onClick={() => {
				paymentContext.retryPayment(orderId);
			}}>
			Try Again
		</Button>
	);
};
