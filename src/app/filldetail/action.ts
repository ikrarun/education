"use server";

import { formSchema } from "@/lib/types";
import { z } from "zod";

export async function handleFormSubmit(data: z.infer<typeof formSchema>) {
	// Convert FormData to a plain object

	console.log("Form data: Submitted by user", data);

	return `Form submitted successfully! Data: ${JSON.stringify(data)}`;

	// Perform actions with `data` (e.g., send it to an API)
}
