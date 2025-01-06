"use client";
import { usePaymentContext } from "@/components/providers/paymentContext";
import { Button } from "@/components/ui/button";
import React from "react";

const PaymentModeSwitcher = () => {
	const paymentContext = usePaymentContext();
	return (
		<div className='w-full inline-flex mt-4 gap-1 '>
			<Button
				onClick={() => {
					paymentContext.setPaymentMethod("upi");
				}}
				className='w-full'
				variant={paymentContext.paymentMethod === "upi" ? "default" : "outline"}
				value='upi'>
				UPI
			</Button>
			{/* <Button
				onClick={() => {
					paymentContext.setPaymentMethod("debit");
				}}
				className='w-full'
				variant={
					paymentContext.paymentMethod === "debit" ? "default" : "outline"
				}
				value='debit'>
				Debit Card
			</Button> */}
			<Button
				onClick={() => {
					paymentContext.setPaymentMethod("upiCollect");
				}}
				className='w-full'
				variant={
					paymentContext.paymentMethod === "upiCollect" ? "default" : "outline"
				}
				value='upiCollect'>
				UPI Collect
			</Button>
			{paymentContext.onlyOnMobile && (
				<Button
					onClick={() => {
						paymentContext.setPaymentMethod("upiIntent");
					}}
					className='w-full'
					variant={
						paymentContext.paymentMethod === "upiIntent" ? "default" : "outline"
					}
					value='upiIntent'>
					UPI Intent
				</Button>
			)}
		</div>
	);
};

export default PaymentModeSwitcher;
