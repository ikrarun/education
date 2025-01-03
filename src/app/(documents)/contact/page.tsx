import { NextResponse } from "next/server";

export default async function ContactPage() {
	return NextResponse.json({
		title: "Contact Us",
		message:
			"If you have any questions or need assistance, feel free to reach out to us.",
		email: "thewiseconcern@gmail.com",
		footer: "We look forward to hearing from you!",
	});
}
