"use server";

import { formSchema } from "@/lib/types";
import { z } from "zod";

export async function handleFormSubmit(data: z.infer<typeof formSchema>) {
	// Convert FormData to a plain object

	console.log("Form Data:", data);

	return `Form submitted successfully! \n Name:- ${data.name} \n Phone:- ${data.phone} \n Subjects:- ${data.subject} \n Date:- ${data.date} \n Location:- ${data.location}`;

	// Perform actions with `data` (e.g., send it to an API)
}
