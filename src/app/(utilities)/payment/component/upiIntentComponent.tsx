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

const UpiCollectComponent = () => {
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
		const allAppNodes = document.getElementsByClassName("icon");
		for (let i = 0; i < allAppNodes.length; i++) {
			const element = allAppNodes[i];

			const upiApp = element.getAttribute("id");
			// @ts-expect-error - CashFree is not defined
			const component = CashFree.current?.create("upiApp", {
				values: {
					upiApp: upiApp,
				},
			});
			component.mount("#" + upiApp);
			component.on("click", function () {
				startPayment(component);
			});
			component.on(
				"loaderror",
				function (data: { error: { message: string } }) {
					console.log(data.error.message);
				}
			);
		}

		// @ts-expect-error - CashFree is not defined
		upiMethod.current?.on("loaderror", (error: unknown) =>
			toast.error(
				("Error occurred while loading UPI Collect" + error) as string
			)
		);

		// @ts-expect-error - CashFree is not defined
		upiMethod.current?.mount(container);

		// @ts-expect-error - CashFree is not defined
		upiMethod.current?.on("load", () => {
			toast.success("UPI Collect rendered successfully");
		});
	});

	async function startPayment(component: unknown) {
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

			const PaymentOptions = {
				paymentMethod: component,
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
	}

	return (
		<Card
			className={cn(
				"w-full p-0 h-full",
				paymentContext.paymentMethod === "upiIntent" ? "block" : "hidden"
			)}>
			<CardHeader className='p-4 pb-0'>
				<CardTitle>Scan QR Code</CardTitle>
				<CardDescription>
					We have the easiest solution to pay now
				</CardDescription>
			</CardHeader>
			<CardContent className='p-4 pb-2'>
				<div className={cn("flex flex-col gap-1 ")}>
					<div className='w-fit mx-auto gap-2 flex-col relative h-full flex justify-center items-center'>
						<div
							className={cn(
								"h-full p-2 rounded-md border-2 border-secondary w-fit flex flex-col justify-center items-center z-10 max-w-[220px]"
							)}
							ref={QrCodeContainer}
						/>
						<div className='row'>
							<div className='col-6 bank col'>
								<div id='phonepe' className='icon upimount'></div>
								<div className='btext'>PhonePe</div>
							</div>
							<div className='col-6 bank col'>
								<div id='paytm' className='icon upimount'></div>
								<div className='btext'>Paytm</div>
							</div>
							<div className='col-6 bank col'>
								<div id='gpay' className='icon upimount'></div>
								<div className='btext'>Google Pay</div>
							</div>
							<div className='col-6 bank col'>
								<div id='default' className='icon upimount'></div>
								<div className='btext'>Intent</div>
							</div>
							<div className='col-6 bank col'>
								<div id='web' className='icon upimount'></div>
								<div className='btext'>Link</div>
							</div>
						</div>
						{/* <Button variant={"default"} onClick={startPayment}>
							Request Payment
						</Button> */}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default UpiCollectComponent;
