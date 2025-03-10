import React from "react";

import { Cashfree } from "cashfree-pg";
import { redirect } from "next/navigation";
import { ArrowRight, CheckIcon, Loader2, XIcon } from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { RetryPaymentSection } from "./retryPaymentSection";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

Cashfree.XClientId = process.env.CASHFREE_X_CLIENT_ID;
Cashfree.XClientSecret = process.env.CASHFREE_X_CLIENT_SECRET;
Cashfree.XEnvironment =
	process.env.NODE_ENV === "development"
		? Cashfree.Environment.SANDBOX
		: Cashfree.Environment.PRODUCTION;

const Success = async ({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
	const orderId = (await searchParams).order_id;

	if (!orderId || typeof orderId !== "string") {
		return (
			<div className='flex flex-col justify-center items-center h-full grow'>
				<Card>
					<CardHeader>
						<CardTitle>Uh oh!</CardTitle>
						<CardDescription>
							This page is not supposed to be accessed directly
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Link
							className={buttonVariants({ variant: "default" })}
							href='/donate'>
							Go Home
						</Link>
					</CardContent>
				</Card>
			</div>
		);
	}

	const response = await Cashfree.PGOrderFetchPayments("2023-08-01", orderId)
		.then((response) => {
			return response.data;
		})
		.catch(() => {
			redirect("/donate");
		});

	if (!response || response.length === 0) {
		return (
			<div className='flex flex-col p-4 justify-center items-center h-full grow'>
				<Card>
					<CardHeader>
						<CardTitle>
							You might have dropped out of the payment process
						</CardTitle>
						<CardDescription>
							Please try again by clicking the button below
						</CardDescription>
					</CardHeader>
					<CardContent>
						<RetryPaymentSection orderId={orderId} />
					</CardContent>
				</Card>
				<pre className='mx-auto font-sans select-text w-fit max-w-[900px] p-4'>
					{JSON.stringify(response, null, 2)}
				</pre>
			</div>
		);
	}

	const status = response[0].payment_status;

	return (
		<div className='flex flex-col p-4 justify-center items-center h-full grow'>
			<Card>
				<CardHeader>
					<CardTitle>Thank you for Choosing Us!</CardTitle>
					<CardDescription className='flex flex-row items-center gap-1'>
						TXN ID <ArrowRight size={10} /> {orderId}
					</CardDescription>
				</CardHeader>
				{(() => {
					switch (status) {
						case "SUCCESS":
							return (
								<CardContent>
									<h1 className='flex flex-row items-center gap-1'>
										<CheckIcon
											size={32}
											strokeWidth={4}
											className='text-white bg-green-500 rounded-full p-1'
										/>
										Your Last Payment was successful
									</h1>
								</CardContent>
							);
						case "FAILED":
							return (
								<CardContent>
									<h1 className='flex flex-row items-center gap-1'>
										<XIcon
											size={32}
											strokeWidth={4}
											className='text-white bg-red-500 rounded-full p-1'
										/>
										Your Last Payment was failed
									</h1>
								</CardContent>
							);

						case "PENDING":
							return (
								<CardContent>
									<h1 className='flex flex-row items-center gap-1'>
										<Loader2
											size={32}
											strokeWidth={4}
											className='text-white bg-yellow-500 rounded-full p-1'
										/>
										Your Last Payment is pending
									</h1>
								</CardContent>
							);

						case undefined:
							return <p>Payment status unknown</p>;
						default:
							return <p>Payment status unknown</p>;
					}
				})()}
			</Card>
			<pre className='mx-auto font-sans select-text w-fit max-w-[900px] p-4'>
				{JSON.stringify(response, null, 2)}
			</pre>
		</div>
	);
};

export default Success;
