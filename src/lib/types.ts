import { z } from "zod";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	phone: z.string().min(13, {
		message: "Phone number must be at least 10 characters.",
	}),
	subject: z.array(z.string()).min(1, {
		message: "Please select at least one subject.",
	}),
	date: z.date({
		required_error: "Please select a date.",
	}),
	location: z.string().min(2, {
		message: "Location must be at least 2 characters.",
	}),
});

export { formSchema };
