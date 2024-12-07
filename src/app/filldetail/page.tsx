"use client";
import { PhoneInput } from "@/components/phone-input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { MultiSelect } from "@/components/multi-select";
import {
	SiLibreofficemath,
	SiCilium,
	SiCodeforces,
	SiTower,
	SiGoogleearth,
	SiBookstack,
	SiMusicbrainz,
} from "@icons-pack/react-simple-icons";

const subjectList = [
	{ value: "mathematics", label: "Mathematics", icon: SiLibreofficemath },
	{ value: "science", label: "Science", icon: SiCilium },
	{ value: "computer_science", label: "Computer Science", icon: SiCodeforces },
	{ value: "history", label: "History", icon: SiTower },
	{ value: "geography", label: "Geography", icon: SiGoogleearth },
	{ value: "literature", label: "Literature", icon: SiBookstack },
	{ value: "music", label: "Music", icon: SiMusicbrainz },
];

import { Input } from "@/components/ui/input";
import { DateTimePicker } from "@/components/date-time-picker";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
import { formSchema } from "@/lib/types"; // Assuming you have defined the type
import { z } from "zod";
import { handleFormSubmit } from "./action";

export default function Detail() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue, // Added setValue
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			location: "",
			subject: [],
			date: new Date(),
		},
	});

	const [isPending, setIsPending] = useState(false);

	const resetForm = () => {
		if (window !== undefined) {
			const phoneInput = document.getElementById("phone") as HTMLInputElement;
			if (phoneInput) {
				phoneInput.value = "";
			}
			const dateInput = document.getElementById("date") as HTMLInputElement;
			if (dateInput) {
				dateInput.value = "";
			}
			const locationInput = document.getElementById(
				"location"
			) as HTMLInputElement;
			if (locationInput) {
				locationInput.value = "";
			}
		}
	};

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
		try {
			setIsPending(true);

			// Perform your form submission logic here
			console.log(data);

			// Example: Simulate API call
			// const response = await handleFormSubmit(data);

			// Show success message

			const response = await handleFormSubmit(data);
			alert(response);
			// Reset the form
			await resetForm();
			reset();
		} catch (error) {
			console.error("Submission error:", error);
			alert("Failed to submit the form. Please try again.");
		} finally {
			setIsPending(false);
		}
	};

	return (
		<main className='w-full grow h-full p-4'>
			<Card className='w-full container max-w-[900px] mx-auto h-full'>
				<CardHeader>
					<CardTitle>Request a Tutor</CardTitle>
					<CardDescription>
						Fill out the form below to request a tutor
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-2 flex flex-col'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4'>
						<div className='space-y-1'>
							<Input
								type='text'
								placeholder='Name'
								autoComplete='off'
								{...register("name")}
								disabled={isPending}
								className='col-span-1 focus-visible:ring-primary-foreground shadow shadow-amber-500/50'
							/>
							{errors.name && (
								<p className='text-xs text-red-500 pl-2'>
									{errors.name.message}
								</p>
							)}
							<p className='text-xs text-muted-foreground pl-2'>Eg: Kr Arun</p>
						</div>

						<div className='space-y-1'>
							<PhoneInput
								countries={["IN"]}
								id='phone'
								defaultCountry='IN'
								disabled={isPending}
								onChange={(value) => setValue("phone", value)}
								maxLength={11}
								autoComplete='off'
								className='col-span-1 shadowborder-none focus-visible:ring-primary-foreground overflow-hidden rounded-lg shadow-amber-500/50'
								placeholder='Enter a phone number'
							/>
							{errors.phone && (
								<p className='text-xs text-red-500 pl-2'>
									{errors.phone.message}
								</p>
							)}
							<p className='text-xs text-muted-foreground pl-2'>
								Eg: 1234567890
							</p>
						</div>

						<div className='space-y-1'>
							<DateTimePicker
								id='date'
								onChange={(value) => setValue("date", value)}
								disabled={isPending}
								className='col-span-1 justify-between shadow shadow-amber-500/50'
							/>
							{errors.date && (
								<p className='text-xs text-red-500 pl-2'>
									{errors.date.message}
								</p>
							)}
							<p className='text-xs text-muted-foreground pl-2'>
								Select appropriate time, your tutor will contact you
							</p>
						</div>

						<div className='space-y-1'>
							<Input
								type='text'
								placeholder='Address'
								autoComplete='off'
								{...register("location")}
								disabled={isPending}
								className='col-span-1 focus-visible:ring-primary-foreground shadow shadow-amber-500/50'
							/>
							{errors.location && (
								<p className='text-xs text-red-500 pl-2'>
									{errors.location.message}
								</p>
							)}
							<p className='text-xs text-muted-foreground pl-2'>
								Eg: Mukharjee Nagar, Delhi
							</p>
						</div>

						<div className='space-y-1'>
							<MultiSelect
								options={subjectList}
								className='col-span-1 md:col-span-2 shadow shadow-amber-500/50'
								placeholder='Select subjects'
								disabled={isPending}
								onValueChange={(value) => setValue("subject", value)}
							/>
							{errors.subject && (
								<p className='text-xs text-red-500 pl-2'>
									{errors.subject.message}
								</p>
							)}
							<p className='text-xs text-muted-foreground pl-2'>
								You can select multiple subjects
							</p>
						</div>

						<Button
							disabled={isPending}
							className='w-fit mt-4 col-span-1 md:col-span-2 shadow shadow-amber-500/50'
							type='submit'>
							<Send className='mr-2 h-4 w-4' />
							{isPending ? "Submitting..." : "Submit"}
						</Button>
					</form>
				</CardContent>
				<CardFooter>
					<CardDescription>
						It might take a while for the tutor to respond to your request.
						{errors.root && (
							<p className='text-xs text-red-500 mt-2'>{errors.root.message}</p>
						)}
					</CardDescription>
				</CardFooter>
			</Card>
		</main>
	);
}
