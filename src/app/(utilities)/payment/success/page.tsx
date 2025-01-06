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
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
		redirect("/donate");
	}

	const response = await Cashfree.PGOrderFetchPayments("2023-08-01", orderId)
		.then((response) => {
			// console.log("Order fetched successfully:", response.data);
			return response.data;
		})
		.catch((error) => {
			console.error("Error:", error.response.data.message);
			redirect("/donate");
		});

	// console.log("response recieved is ", response);
	const status = response[0].payment_status;

	return (
		<div className='flex flex-col justify-center items-center h-full grow'>
			<Card className={poppins.className}>
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
						default:
							return <p>Payment status unknown</p>;
					}
				})()}
			</Card>
		</div>
	);
};

export default Success;
