"use client";
import useCashfree from "@/components/hook/useCashFree";

import { usePaymentContext } from "@/components/providers/paymentContext";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { toast } from "sonner";

const UpiCompoent = () => {
	const paymentContext = usePaymentContext();
	const QrCodeContainer = useRef<HTMLDivElement | null>(null);
	const { checkIsCashfreeInitialized, CashFree } = useCashfree();
	const upiMethod = useRef<unknown>(null);

	useEffect(() => {
		if (!checkIsCashfreeInitialized()) {
			toast.error(
				"Can't use UPi payment method right now, because CashFree is not initialized"
			);
			return;
		}
		if (QrCodeContainer.current === null) {
			toast.error("Can't render QR Code because of missing container");
			return;
		}
		const container = QrCodeContainer.current;
		// @ts-expect-error - CashFree is not defined
		upiMethod.current = CashFree.current?.create("upiQr", {
			values: {
				size: "220px",
			},
		});

		// @ts-expect-error - CashFree is not defined
		upiMethod.current?.on("loaderror", (error: unknown) =>
			toast.error(("Error loading QR Code" + error) as string)
		);

		// @ts-expect-error - CashFree is not defined
		upiMethod.current?.mount(container);

		// @ts-expect-error - CashFree is not defined
		upiMethod.current?.on("load", () => {
			toast.success("QR Code rendered successfully");
		});
	}, [CashFree, checkIsCashfreeInitialized]);

	const startPayment = async () => {
		try {
			if (paymentContext.donationAmount === undefined) {
				throw new Error("Donation Amount is not selected");
			}
			toast.info("Payment is not implemented yet");
			console.log("Trying to set up the payment session");

			toast.warning("UPI Payment");
			const Order = await paymentContext.getOrderDetails();
			if (Order === undefined) {
				throw new Error("Error in setting up the payment session");
			}

			const paymentId = Order.payment_session_id;
			const orderId = Order.order_id;

			if (paymentId === undefined) {
				throw new Error("Payment ID is not found");
			}
			if (orderId === undefined) {
				throw new Error("Order ID is not found");
			}

			if (upiMethod.current === null || upiMethod.current === undefined) {
				throw new Error("QR Code Container is not found");
			}
			const PaymentOptions = {
				paymentMethod: upiMethod.current,
				paymentSessionId: paymentId,
				returnUrl:
					process.env.NODE_ENV === "development"
						? `http://localhost:3000/payment/success?order_id=${orderId}`
						: `https://edukation.vercel.app/payment/success?order_id=${orderId}`,
			};
			// @ts-expect-error - CashFree is
			CashFree.current?.pay(PaymentOptions);
		} catch (error: unknown) {
			const err = error as Error;
			console.warn(err.cause, err.message);
			toast.error("Error in starting the payment because" + err.message);
		}
	};

	return (
		<Card
			className={cn(
				"w-full p-0 h-full",
				paymentContext.paymentMethod === "upi" ? "block" : "hidden"
			)}>
			<CardHeader className='p-4 pb-0'>
				<CardTitle>Scan QR Code</CardTitle>
				<CardDescription>
					We have the easiest solution to pay now
				</CardDescription>
			</CardHeader>
			<CardContent className='p-4 pb-2'>
				<div className={cn("flex flex-col gap-1 ")}>
					<div className='w-fit mx-auto flex-col relative h-full flex justify-center items-center'>
						<div
							className={cn("h-full z-10 max-w-[220px]")}
							ref={QrCodeContainer}
						/>
						<button
							onClick={startPayment}
							className='text-xs text-muted-foreground'>
							Reveal the QR code to scan
						</button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default UpiCompoent;
