import { z } from "zod";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	phone: z.string().min(10, {
		message: "Phone number must be at least 10 characters.",
	}),
	subject: z
		.array(z.string(), {
			required_error: "Please select at least one subject.",
			invalid_type_error: "Please select at least one subject.",
		})
		.min(1, {
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
