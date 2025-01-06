"use server";

import { Cashfree } from "cashfree-pg";

Cashfree.XClientId = process.env.CASHFREE_X_CLIENT_ID;
Cashfree.XClientSecret = process.env.CASHFREE_X_CLIENT_SECRET;
Cashfree.XEnvironment =
	process.env.NODE_ENV === "development"
		? Cashfree.Environment.SANDBOX
		: Cashfree.Environment.PRODUCTION;

const request = (amount: number, customerId: string, customerPhone: string) => {
	const orderId = new Date().getTime().toString();
	return {
		order_amount: amount,
		order_currency: "INR",
		order_id: orderId,
		customer_details: {
			customer_id: customerId,
			customer_phone: customerPhone,
		},
		order_meta: {
			return_url:
				process.env.NODE_ENV === "development"
					? `http://localhost:3000/payment/success?order_id=${orderId}`
					: `https://edukation.vercel.app/payment/success?order_id=${orderId}`,
		},
	};
};

export const getPaymentSessionId = async ({
	amount,
	name,
	phone,
}: {
	amount: number;
	name: string;
	phone: string;
}) => {
	if (amount === undefined) {
		return undefined;
	}
	if (amount <= 0) {
		return undefined;
	}
	if (typeof amount !== "number") {
		return undefined;
	}
	// console.log("Getting Payment Session Id for amount", amount);
	const req = request(amount, name, phone);
	const response = await Cashfree.PGCreateOrder("2023-08-01", req)
		.then((response) => {
			// console.log("Order created successfully:", response.data);
			return response.data;
		})
		.catch((error) => {
			const err = error as Error;
			console.error("Error:", err.message);
			return undefined;
		});
	return response;
};
