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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { useState, useEffect, useRef, SetStateAction, Dispatch } from "react";
import { getPaymentSessionId } from "./paymentBackend";
import { CopyIcon, EyeIcon } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const predefinedAmounts = [1, 5, 10, 20, 50, 100];

const DonationCard = () => {
	// State Variables
	const [donationAmount, setDonationAmount] = useState(1);
	const cashfree = useRef<unknown>(null);
	const [paymentSessionId, setPaymentSessionId] = useState<string | undefined>(
		undefined
	);
	const [orderId, setOrderId] = useState<string | undefined>(undefined);
	const [paymentMethod, setPaymentMethod] = useState<
		"upi" | "debit" | undefined
	>(undefined);
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [donationDate] = useState(
		new Date().toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		})
	);

	// QR Code Ref
	const qrCodeRef = useRef<HTMLDivElement>(null);
	const paymentComponent = useRef<unknown>(null);

	// Pre Check for Cashfree
	const preCheck = () => {
		if (!cashfree.current) {
			console.log("Cashfree not initialized , Now initializing");
			cashfree.current = window.Cashfree({
				mode: "sandbox",
			});
		}

		if (!cashfree.current) {
			console.warn("Cashfree could not be initialized");
			return false;
		}
		return true;
	};

	// Get Payment Session Id
	useEffect(() => {
		getPaymentSessionId({ amount: donationAmount }).then((response) => {
			if (response !== undefined) {
				console.log(response);
				setPaymentSessionId(response.payment_session_id);
				setOrderId(response.order_id);
			} else {
				console.log("Error");
			}
		});
	}, [isOpen, donationAmount]);

	// Initialize Cashfree
	useEffect(() => {
		cashfree.current = window.Cashfree({
			mode: "sandbox",
		});
		preCheck();
	}, []);

	useEffect(() => {
		if (paymentMethod === undefined) {
			return;
		}
		if (!preCheck()) {
			console.log("Cashfree was not initialized so cannot proceed");
			return;
		}
		if (paymentMethod === "upi") {
			// @ts-expect-error Cashfree is not typed
			paymentComponent.current = cashfree.current?.create("upiQr", {
				values: {
					size: "220px",
				},
			});
			// @ts-expect-error Cashfree is not typed
			paymentComponent.current.on("loaderror", (data: unknown) => {
				console.error(data);
			});
			// @ts-expect-error Cashfree is not typed
			paymentComponent.current.mount(qrCodeRef.current);
			// @ts-expect-error Cashfree is not typed
			paymentComponent.current.on("load", (data: unknown) => {
				console.log(data);
			});
		}
	}, [paymentMethod]);

	const performPaymentSetup = () => {
		console.log("Performing payment setup");
		if (!preCheck()) {
			console.log("Cashfree was not initialized so cannot proceed");
			return;
		}
		setIsOpen(true);
		console.log("changed the Open State");
	};

	const payNow = async () => {
		console.log("Paying Now");
		if (!preCheck()) {
			console.log("Cashfree was not initialized so cannot proceed");
			return;
		}
		if (paymentMethod === "upi") {
			const PaymentOptions = {
				paymentMethod: paymentComponent.current,
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
			console.log("Payment Method is not set");
			return false;
		}
	};

	return (
		<>
			<Card
				style={{ fontFamily: inter.style.fontFamily }}
				className='w-full my-4 p-4 gap-4 flex flex-col max-w-[400px]'>
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

					<Button className='w-full mt-2' onClick={performPaymentSetup}>
						Donate
					</Button>
				</CardContent>
				<CardFooter className='mb-0 p-0'>
					<CardDescription>
						<p className=''>Donation Date: {donationDate}</p>
					</CardDescription>
				</CardFooter>
			</Card>
			<PaymentDialog
				donationAmount={donationAmount}
				open={isOpen}
				setOpen={setIsOpen}
				paymentSessionId={paymentSessionId}
				qrCodeRef={qrCodeRef}
				setPaymentMethod={setPaymentMethod}
				payNow={payNow}
			/>
		</>
	);
};

function PaymentDialog({
	donationAmount,
	open,
	setOpen,
	paymentSessionId,
	qrCodeRef,
	setPaymentMethod,
	payNow,
}: {
	donationAmount: number;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	paymentSessionId: string | undefined;
	qrCodeRef: React.RefObject<HTMLDivElement | null>;
	setPaymentMethod: Dispatch<SetStateAction<"upi" | "debit" | undefined>>;
	payNow: () => Promise<boolean | undefined>;
}) {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent
				onInteractOutside={(e) => {
					e.preventDefault();
				}}
				style={{ fontFamily: inter.style.fontFamily }}>
				<DialogHeader>
					<DialogTitle>Are you sure you want to donate?</DialogTitle>
					<DialogDescription>
						Since you are donating to a non-profit organization, your donation
						will be used to support the development of the platform.
					</DialogDescription>
				</DialogHeader>

				<div className='flex text-sm mt-6 flex-col gap-1'>
					<h1>You are donating ₹ {donationAmount}</h1>
					<h1 className='text-muted-foreground text-xs'>
						We have multiple payment option kindly select on which suits you
						better.
					</h1>
					<Tabs
						defaultValue='upi'
						className='min-w-xl gap-1 h-full w-full flex flex-row'>
						{/* Tabs List */}
						<div className='w-fit flex flex-col h-full'>
							<TabsList className='w-fit flex flex-col h-fit mt-2 mr-1'>
								<TabsTrigger
									onClick={() => setPaymentMethod("upi")}
									className='w-full'
									value='upi'>
									UPI
								</TabsTrigger>
								<TabsTrigger
									onClick={() => setPaymentMethod("debit")}
									className='w-full'
									value='debit'>
									Debit Card
								</TabsTrigger>
							</TabsList>
						</div>
						{/* Tabs Content is Here */}
						<TabsContent value='upi' className='w-full h-full'>
							<Card className='w-full p-0 h-full'>
								<CardHeader className='p-4 pb-0'>
									<CardTitle>Scan QR Code</CardTitle>
									<CardDescription>
										We have the easiest solution to pay now
									</CardDescription>
								</CardHeader>
								<CardContent className='p-4 pb-2'>
									{paymentSessionId ? (
										<div className='flex flex-col gap-1'>
											<div
												className={cn(
													"mt-2 text-muted-foreground inline-flex items-center gap-1",
													paymentSessionId ? "" : "hidden"
												)}>
												Click to copy the payment Id
												<CopyIcon
													onClick={() => {
														navigator.clipboard.writeText(
															paymentSessionId ?? ""
														);
													}}
													size={12}
													className='cursor-pointer'
												/>
											</div>
											<div className='w-fit mx-auto  flex-col relative h-full flex justify-center items-center'>
												<div ref={qrCodeRef} className='h-full max-w-[220px]' />
												<Button
													id='reveal-qr-code'
													variant={"outline"}
													onClick={() => {
														payNow().then((res) => {
															if (res) {
																const revealButton =
																	document.getElementById("reveal-qr-code");
																revealButton?.classList.add("hidden");
															}
														});
													}}
													className='absolute rounded-full mx-auto'>
													<EyeIcon size={12} />
												</Button>
											</div>
										</div>
									) : (
										<div className='mt-2 animate-pulse transition-all duration-1000 text-muted-foreground inline-flex items-center gap-1'>
											Loading...
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value='debit' className='w-full h-full'>
							<Card className='w-full h-full'>
								<CardHeader>
									<CardTitle>Hi I am Password</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>Hi I am Password</CardDescription>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default DonationCard;
