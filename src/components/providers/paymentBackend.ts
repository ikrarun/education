"use server";

import { Cashfree } from "cashfree-pg";

Cashfree.XClientId = process.env.CASHFREE_X_CLIENT_ID;
Cashfree.XClientSecret = process.env.CASHFREE_X_CLIENT_SECRET;
Cashfree.XEnvironment =
	process.env.NODE_ENV === "development"
		? Cashfree.Environment.SANDBOX
		: Cashfree.Environment.PRODUCTION;

const request = (amount: number, customerId: string, customerPhone: string, customerName: string) => {
	const orderId = new Date().getTime().toString();
	return {
		order_amount: amount,
		order_currency: "INR",
		order_id: orderId,
		customer_details: {
			customer_id: customerId.trim().replace(/ /g,"_"),
			customer_phone: customerPhone.trim(),
			customer_name: customerName.trim(),
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
	const req = request(amount, name.trim(), phone.trim(), name.trim());
	console.log("Request:", JSON.stringify(req));
	const response = await Cashfree.PGCreateOrder("2023-08-01", req)
		.then((response) => {
			// console.log("Order created successfully:", response.data);
			return response.data;
		})
		.catch((error) => {
			console.error("Error:", error.message);
			return error;
		});
	return response;
};
