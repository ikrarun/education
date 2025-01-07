"use server";

import { Cashfree } from "cashfree-pg";

Cashfree.XClientId = process.env.CASHFREE_X_CLIENT_ID;
Cashfree.XClientSecret = process.env.CASHFREE_X_CLIENT_SECRET;
Cashfree.XEnvironment =
	process.env.NODE_ENV === "development"
		? Cashfree.Environment.SANDBOX
		: Cashfree.Environment.PRODUCTION;

const request = (
	amount: number,
	customerId: string,
	customerPhone: string,
	customerName: string
) => {
	const orderId = new Date().getTime().toString();
	return {
		order_amount: amount,
		order_currency: "INR",
		order_id: orderId,
		customer_details: {
			customer_id: customerId.trim().replace(/ /g, "_"),
			customer_phone: customerPhone.trim(),
			customer_name: customerName.trim(),
		},

		order_meta: {
			payment_methods: "upi,dc,dcemi",
			return_url:
				process.env.NODE_ENV === "development"
					? `http://localhost:3000/success?order_id=${orderId}`
					: `https://edukation.vercel.app/success?order_id=${orderId}`,
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
	const trimmedName = name.trim();
	let trimmedPhone = phone.trim();
	trimmedPhone = trimmedPhone
		.replace(/^\+/, "")
		.replace(/\s+/g, "")
		.replace(/^0/, "");
	if (
		amount === undefined ||
		amount <= 0 ||
		typeof amount !== "number" ||
		trimmedName.length < 3 ||
		trimmedName.length > 20 ||
		trimmedPhone.length !== 10 ||
		trimmedPhone.startsWith("0") ||
		trimmedPhone.length > 12
	) {
		return undefined;
	}
	const req = request(amount, name.trim(), phone.trim(), name.trim());

	const response = await Cashfree.PGCreateOrder("2023-08-01", req)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});
	return response;
};

export const getOrderDetailsById = async (orderId: string) => {
	const response = await Cashfree.PGFetchOrder("2023-08-01", orderId)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return undefined;
		});
	return response;
};
