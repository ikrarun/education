'use client';
import { MultiSelect, MultiSelectHandle } from '@/components/multi-select';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { SubmitHandler, useForm } from 'react-hook-form';
const subjectsList = [
	{ value: 'mathematics', label: 'Mathematics' },
	{ value: 'science', label: 'Science' },
	{ value: 'computer_science', label: 'Computer Science' },
	{ value: 'history', label: 'History' },
	{ value: 'geography', label: 'Geography' },
	{ value: 'literature', label: 'Literature' },
	{ value: 'music', label: 'Music' },
];

import DateTimePicker from '@/components/date-time-picker';
import { PhoneInput } from '@/components/phone-input';
import { BetterButton } from '@/components/ui/betterbutton';
import { Input } from '@/components/ui/input';
import { formSchema } from '@/lib/schemas'; // Assuming you have defined the type
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import { handleFormSubmit } from './action';

export default function RequestTutor() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
		setValue,
		trigger,
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone: '',
			location: '',
			subject: [],
		},
	});

	const multiRef = useRef<MultiSelectHandle>(null);
	const [isPending, setIsPending] = useState(false);
	const [step, setStep] = useState(0);
	const totalSteps = 5;
	const [isSubmitted, setIsSubmitted] = useState(false);

	const formFields = [
		{
			title: "What's your name?",
			description: "Let's start with your name",
			component: (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className='space-y-4'
				>
					<Input
						type='text'
						placeholder='Enter your name'
						{...register('name')}
						disabled={isPending}
						className='max-w-full text-lg'
					/>
					{errors.name && (
						<p className='text-sm text-red-500'>{errors.name.message}</p>
					)}
				</motion.div>
			),
		},
		{
			title: "What's your phone number?",
			description: "We'll use this to contact you",
			component: (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className='space-y-4'
				>
					<PhoneInput
						countries={['IN']}
						id='phone'
						disabled={isPending}
						onChange={(value) => setValue('phone', value)}
						maxLength={11}
						value={watch('phone')}
						tabIndex={2}
						countryCallingCodeEditable={false}
						defaultCountry='IN'
						autoComplete='off'
						international={false}
						className='col-span-1'
						placeholder='Enter a phone number'
					/>
					{errors.phone && (
						<p className='text-sm text-red-500'>{errors.phone.message}</p>
					)}
				</motion.div>
			),
		},

		{
			title: 'What subjects do you need help with?',
			description: 'Select one or more subjects',
			component: (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className='space-y-4'
				>
					<MultiSelect
						options={subjectsList}
						{...register('subject')}
						maxCount={20}
						onValueChange={(value) => setValue('subject', value)}
						ref={multiRef}
					/>
					{errors.subject && (
						<p className='text-sm text-red-500'>{errors.subject.message}</p>
					)}
				</motion.div>
			),
		},
		{
			title: 'Where are you located?',
			description: 'Help us find tutors in your area',
			component: (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className='space-y-4'
				>
					<Input
						type='text'
						placeholder='Enter your location'
						{...register('location')}
						disabled={isPending}
						className='max-w-full text-lg'
					/>
					{errors.location && (
						<p className='text-sm text-red-500'>{errors.location.message}</p>
					)}
				</motion.div>
			),
		},
		{
			title: 'When we can contact you?',
			description: "We'll contact you on this date and time",
			component: (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className='space-y-4'
				>
					<DateTimePicker
						id='date'
						date={watch('date')}
						setDate={(date) =>
							setValue('date', date!, { shouldValidate: true })
						}
						className='col-span-1'
					/>
					{errors.date && (
						<p className='text-sm text-red-500'>{errors.date.message}</p>
					)}
				</motion.div>
			),
		},
	];

	const handleNext = async () => {
		const fields: Record<number, keyof z.infer<typeof formSchema>> = {
			0: 'name',
			1: 'phone',
			2: 'subject',
			3: 'location',
			4: 'date',
		};

		const isValid = await trigger(fields[step]);
		if (isValid) {
			setStep(step + 1);
		}
	};

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
		try {
			setIsPending(true);
			const response = await handleFormSubmit(data);
			toast.success(response);
			multiRef.current?.handleClear();
			reset();
			setIsSubmitted(true);
		} catch (error) {
			console.error('Submission error:', error);
			toast.error('Failed to submit the form. Please try again.');
		} finally {
			setIsPending(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (step < totalSteps - 1) {
				handleNext();
			} else {
				handleSubmit(onSubmit)();
			}
		}
	};

	return (
		<main className='flex h-full w-full max-w-3xl flex-col items-center justify-center gap-8 p-4'>
			<div className='mb-8 flex flex-col items-center justify-center gap-3'>
				<h1 className='text-5xl font-bold'>Request Tutor</h1>
				<p className='text-muted-foreground'>
					Fill out the form below to request a tutor for yourself or your child.
				</p>
			</div>
			<Card className='w-full max-w-3xl backdrop-blur-3xl'>
				{isSubmitted ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						className='space-y-4 p-8 text-center'
					>
						<CardHeader>
							<CardTitle className='text-3xl'>Thank You!</CardTitle>
							<CardDescription className='text-xl'>
								We&apos;ve received your request and will contact you soon.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<BetterButton href='/'>Go To Dashboard</BetterButton>
						</CardContent>
					</motion.div>
				) : (
					<>
						<CardHeader>
							<motion.div
								key={step}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
							>
								<CardTitle className='text-3xl'>
									{formFields[step].title}
								</CardTitle>
								<CardDescription>
									{formFields[step].description}
								</CardDescription>
							</motion.div>
						</CardHeader>

						<CardContent>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className='space-y-8'
								onKeyDown={handleKeyPress}
							>
								<AnimatePresence mode='wait'>
									{formFields[step].component}
								</AnimatePresence>

								<motion.div className='flex justify-between pt-8'>
									{step > 0 && (
										<BetterButton
											type='button'
											variant='outline'
											onClick={() => setStep(step - 1)}
										>
											<ArrowLeft className='mr-2 h-4 w-4' />
											Back
										</BetterButton>
									)}

									{step < totalSteps - 1 ? (
										<BetterButton
											type='button'
											onClick={handleNext}
											className='ml-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
										>
											Next
											<ArrowRight className='ml-2 h-4 w-4' />
										</BetterButton>
									) : (
										<BetterButton
											type='submit'
											disabled={isPending}
											className='ml-auto'
										>
											<Send className='mr-2 h-4 w-4' />
											{isPending ? 'Submitting...' : 'Submit'}
										</BetterButton>
									)}
								</motion.div>
							</form>
						</CardContent>

						<CardFooter>
							<div className='w-full'>
								<div className='flex justify-center gap-1'>
									{Array.from({ length: totalSteps }).map((_, i) => (
										<motion.div
											key={i}
											className={`h-1 rounded-full ${
												i <= step ? 'bg-primary dark:bg-secondary-foreground' : 'bg-muted'
											}`}
											style={{ width: `${100 / totalSteps}%` }}
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 0.3 }}
										/>
									))}
								</div>
							</div>
						</CardFooter>
					</>
				)}
			</Card>
		</main>
	);
}
