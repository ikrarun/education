"use client";
import { usePaymentContext } from "@/components/providers/paymentContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NumericFormat } from "react-number-format";
import {
	formatPhoneNumber,
	isValidPhoneNumber,
} from "react-phone-number-input";
import { z } from "zod";
import RPInput from "react-phone-number-input/input";
import { SparklesIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormField,
	FormLabel,
	FormItem,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters."),
	phoneNumber: z.string().refine((value) => isValidPhoneNumber(value), {
		message: "Please enter a valid phone number",
	}),
	donationAmount: z
		.number({
			required_error: "Please enter a donation amount",
		})
		.positive({
			message: "Donation amount must be positive",
		})
		.min(1, "Minimum donation amount is ₹1"),
});

export type FormValues = z.infer<typeof formSchema>;

const PaymentPage = () => {
	const paymentContext = usePaymentContext();
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phoneNumber: "",
			donationAmount: 1.0,
		},
	});


	const onSubmit = async (data: FormValues) => {
		console.log("amount", data.donationAmount);
		const formattedPhoneNumber = formatPhoneNumber(data.phoneNumber)
			.replace(/^\+/, "")
			.replace(/\s+/g, "")
			.replace(/^0/, "");

		if (data.donationAmount === 0 || data.donationAmount === undefined) {
			toast.error("Please enter a donation amount");
			return;
		}

		toast.info("Proceeding to payment...");

		try {
			await paymentContext.proceedToPayment(
				data.donationAmount,
				data.name,
				formattedPhoneNumber
			);
		} catch (error) {
			toast.error("Error processing payment");
		}
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className=' flex flex-col gap-2 '>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='flex flex-col mb-2 gap-1'>
								<FormLabel>Name</FormLabel>

								<FormControl>
									<Input
										{...field}
										value={field.value}
										onChange={field.onChange}
										type='text'
										placeholder='eg. Kr Arun'
										className='text-sm text-foreground/90 placeholder:text-foreground/20'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='phoneNumber'
						render={({ field }) => (
							<FormItem className='flex flex-col mb-2 gap-1'>
								<FormLabel>Phone Number</FormLabel>

								<RPInput
									country='IN'
									autoComplete='tel'
									{...field}
									value={field.value}
									onChange={field.onChange}
									className='text-sm text-foreground/90 placeholder:text-foreground/20'
									placeholder='9876543210'
									inputComponent={Input}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='donationAmount'
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<FormItem className='flex flex-col mb-2 gap-1'>
								<FormLabel>Amount</FormLabel>
								<FormControl>
									<NumericFormat
										className='text-sm text-foreground/90 placeholder:text-foreground/20'
										allowNegative={false}
										allowLeadingZeros={false}
										fixedDecimalScale={true}
										decimalScale={2}
										placeholder='₹ 1.00'
										autoComplete='off'
										min={1}
										prefix='₹ '
										type='tel'
										inputMode='numeric'
										customInput={Input}
										value={value}
										onValueChange={(val) => {
											const { formattedValue, value, floatValue } = val;
											console.log({
												formattedValue: formattedValue,
												value: value,
												floatValue: floatValue,
											});
											onChange(floatValue);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						effect={"expandIcon"}
						className='w-fit'
						icon={SparklesIcon}
						iconPlacement='right'
						type='submit'
						variant={"default"}>
						Donate
					</Button>
				</form>
			</Form>
			{/* DOM element to display the payment page */}
		</>
	);
};

export default PaymentPage;
