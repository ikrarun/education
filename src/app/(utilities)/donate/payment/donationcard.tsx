"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { getPaymentSessionId } from "./paymentBackend";
import { CopyIcon, EyeIcon } from "lucide-react";
import { toast } from "sonner";
const inter = Inter({ subsets: ["latin"] });

const predefinedAmounts = [1, 5, 10, 20, 50, 100];

const DonationCard = () => {
	// Cashfree component
	const cashfree = useRef<unknown>(null);

	// Donation Amount
	const [donationAmount, setDonationAmount] = useState<number | undefined>(
		undefined
	);

	// Payment Session Id
	const [paymentSessionId, setPaymentSessionId] = useState<string | undefined>(
		undefined
	);
	const [isPaymentShown, setIsPaymentShown] = useState(false);

	// Order Id
	const [orderId, setOrderId] = useState<string | undefined>(undefined);
	const [paymentMethod, setPaymentMethod] = useState<"upi" | "debit">("upi");
	// Donation Date
	const [donationDate] = useState(
		new Date().toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		})
	);

	// QR Code Ref

	// Cashfree Component is Rendered here
	const renderQRCodehere = useRef<unknown>(null);

	// Test Is The Cashfree is initialized
	const checkIsCashfreeInitialized = () => {
		if (!cashfree.current) {
			toast.info("Cashfree not initialized , Now initializing");
			cashfree.current = window.Cashfree({
				mode: process.env.NODE_ENV === "development" ? "sandbox" : "production",
			});
		}

		if (!cashfree.current) {
			toast.error("Cashfree could not be initialized");
			return false;
		}
		return true;
	};

	// We get the Payment Session Id from the backend when the donation amount is set;
	useEffect(() => {
		if (donationAmount === undefined) {
			toast.info("Donation Amount is undefined");
			return;
		}
	}, [donationAmount]);

	// Fetch Session Id from the backend
	const fetchSessionId = async () => {
		if (donationAmount === undefined) {
			toast.info("Donation Amount is undefined");
			return;
		}
		await getPaymentSessionId({ amount: donationAmount }).then((response) => {
			if (response !== undefined) {
				console.log(response);
				setPaymentSessionId(response.payment_session_id);
				setOrderId(response.order_id);
			} else {
				toast.error("Error");
			}
		});
	};

	// We initialize the Cashfree component when the page is loaded , this is done only once
	useEffect(() => {
		cashfree.current = window.Cashfree({
			mode: "sandbox",
		});
	}, []);

	// Render Payment Component on Payment Method Change
	const renderPaymentComponent = ({
		modeofPayment = "upi",
	}: {
		modeofPayment?: "upi" | "debit";
	} = {}) => {
		const qrCodeContainer = document.getElementById("qr-code-container");
		if (!checkIsCashfreeInitialized()) {
			toast.error("Cashfree was not initialized so cannot proceed");
			return;
		}
		if (qrCodeContainer === null) {
			toast.info("QR Code Container is not found");
			return;
		}
		if (modeofPayment === "upi") {
			renderQRCodehere.current =
				// @ts-expect-error Cashfree is not typed
				cashfree.current?.create("upiQr", {
					values: {
						size: "220px",
					},
				});
			// @ts-expect-error Cashfree is not typed
			renderQRCodehere.current.on("loaderror", (data: unknown) => {
				toast.error(data as string);
			});

			// @ts-expect-error Cashfree is not typed
			renderQRCodehere.current.mount(qrCodeContainer);

			// @ts-expect-error Cashfree is not typed
			renderQRCodehere.current.on("load", (data: unknown) => {
				toast.info(data as string);
			});
		}
	};

	// Open Payment Dialog
	const startSettingUpPayment = () => {
		toast.info("Performing payment setup");
		if (!checkIsCashfreeInitialized()) {
			toast.error("Cashfree was not initialized so cannot proceed");
			return;
		}
		fetchSessionId();
		setIsPaymentShown(true);
		renderPaymentComponent();
	};

	// Pay Now
	const payNow = async () => {
		toast.info("Paying Now");
		if (!checkIsCashfreeInitialized()) {
			toast.error("Cashfree was not initialized so cannot proceed");
			return;
		}
		if (paymentMethod === "upi") {
			const PaymentOptions = {
				paymentMethod: renderQRCodehere.current,
				paymentSessionId: paymentSessionId,
				returnUrl:
					process.env.NODE_ENV === "development"
						? `http://localhost:3000/donate/success?order_id=${orderId}`
						: `https://edukation.vercel.app/donate/success?order_id=${orderId}`,
			};
			// @ts-expect-error Cashfree is not typed
			cashfree.current?.pay(PaymentOptions);
			return true;
		} else {
			toast.error("Payment Method is not set");
			return false;
		}
	};

	return (
		<div
			className='flex flex-col w-fit gap-2 max-w-[400px]'
			style={{ fontFamily: inter.style.fontFamily }}>
			<Card className='w-full my-4 p-4 gap-4 flex flex-col '>
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
					<div className='grid w-full gap-1 grid-cols-3'>
						{predefinedAmounts.map((amount) => (
							<Button
								key={amount}
								onClick={() => setDonationAmount(amount)}
								className={cn(
									"w-full text-foreground",
									buttonVariants({
										variant: donationAmount === amount ? "default" : "outline",
									})
								)}>
								{amount}
							</Button>
						))}
					</div>

					<Button className='w-full mt-2' onClick={startSettingUpPayment}>
						Donate
					</Button>
				</CardContent>
				<CardFooter className='mb-0 p-0'>
					<CardDescription>
						<p className=''>Donation Date: {donationDate}</p>
					</CardDescription>
				</CardFooter>
			</Card>

			{/* Dialog for Payment */}
			<Card
				className={cn(
					"w-full my-4 p-4 gap-4 flex flex-col ",
					isPaymentShown ? "block" : "scale-0"
				)}>
				<CardHeader className='p-0'>
					<CardTitle>You are donating ₹ {donationAmount}</CardTitle>
					<CardDescription>
						We have multiple payment option kindly select on which suits you
						better.
					</CardDescription>
				</CardHeader>
				{/* Tabs List */}

				<CardContent className='p-0 flex flex-col gap-2 mt-4'>
					<div className='w-full inline-flex mt-4 gap-1 '>
						<Button
							onClick={() => {
								setPaymentMethod("upi");
								renderPaymentComponent({ modeofPayment: "upi" });
							}}
							className='w-full'
							variant={paymentMethod === "upi" ? "default" : "outline"}
							value='upi'>
							UPI
						</Button>
						<Button
							onClick={() => {
								setPaymentMethod("debit");
								const qrCodeContainer =
									document.getElementById("qr-code-container");
								if (qrCodeContainer?.classList.contains("hidden")) {
									qrCodeContainer?.classList.remove("hidden");
								}
								renderPaymentComponent({ modeofPayment: "debit" });
							}}
							className='w-full'
							variant={paymentMethod === "debit" ? "default" : "outline"}
							value='debit'>
							Debit Card
						</Button>
					</div>

					{/* Tabs Content is Here */}
					<Card
						className={cn(
							"w-full p-0 h-full",
							paymentMethod === "upi" ? "block" : "hidden"
						)}>
						<CardHeader className='p-4 pb-0'>
							<CardTitle>Scan QR Code</CardTitle>
							<CardDescription>
								We have the easiest solution to pay now
							</CardDescription>
						</CardHeader>
						<CardContent className='p-4 pb-2'>
							{
								<div className={cn("flex flex-col gap-1 ")}>
									<div
										className={cn(
											"mt-2 text-muted-foreground inline-flex items-center gap-1",
											paymentSessionId ? "" : "scale-0"
										)}>
										Click to copy the payment Id
										<CopyIcon
											onClick={() => {
												navigator.clipboard.writeText(paymentSessionId ?? "");
											}}
											size={12}
											className='cursor-pointer'
										/>
									</div>
									<div className='w-fit mx-auto  flex-col relative h-full flex justify-center items-center'>
										<div
											id='qr-code-container'
											className='h-full max-w-[220px]'
										/>
										<button
											id='reveal-qr-code'
											onClick={() => {
												payNow().then((res) => {
													if (res) {
														// const revealButton =
														// 	document.getElementById("reveal-qr-code");
														// revealButton?.classList.add("hidden");
													}
												});
											}}
											className='absolute w-full h-full bg-primary/50 backdrop-blur-sm font-thin rounded-md items-center justify-center	flex'>
											<EyeIcon
												strokeWidth={1}
												className='text-white/60 font-thin'
												size={64}
											/>
										</button>
									</div>
								</div>
							}
						</CardContent>
					</Card>

					<Card
						className={cn(
							"flex flex-col gap-1 ",
							paymentMethod === "debit" ? "block" : "hidden"
						)}>
						<CardHeader>
							<CardTitle>Debit Card</CardTitle>
							<CardDescription>Pay using your debit card</CardDescription>
						</CardHeader>
						<CardContent>
							<Button>Pay Now</Button>
						</CardContent>
					</Card>
				</CardContent>
			</Card>
		</div>
	);
};

export default DonationCard;
