"use client";

import * as React from "react";
import { format, startOfToday, isSameDay } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const roundDatetoStepsof = (steps: number) => {
	// If no date provided, use current date
	const date = new Date();

	// Get minutes and calculate the next quarter hour
	const minutes = date.getMinutes();
	const roundedMinutes = Math.ceil(minutes / steps) * 15;

	// If rounded minutes is 60, move to next hour
	if (roundedMinutes === 60) {
		date.setHours(date.getHours() + 1, 0, 0, 0);
	} else {
		// Set minutes to rounded value, reset seconds and milliseconds
		date.setMinutes(roundedMinutes, 0, 0);
	}

	return date;
};

interface DateTimePickerProps extends React.HTMLAttributes<HTMLInputElement> {
	date: Date | undefined;
	setDate: (date: Date | undefined) => void;
	className: string;
}

export default function DateTimePicker({
	date,
	setDate,
	className,
}: DateTimePickerProps) {
	const minutes = ["00", "15", "30", "45"];
	const hours = Array.from({ length: 12 }, (_, i) =>
		i === 0 ? "12" : i.toString().padStart(2, "0")
	);
	const amPmOptions = ["AM", "PM"];

	const handleDateChange = (newDate: Date | undefined) => {
		if (newDate) {
			const now = new Date();
			if (isSameDay(newDate, now)) {
				// If selected date is today, set time to current time
				newDate.setHours(now.getHours(), now.getMinutes(), 0, 0);
			} else {
				// If selected date is in the future, set time to 12:00 AM
				newDate.setHours(0, 0, 0, 0);
			}
			setDate(newDate);
		} else {
			setDate(undefined);
		}
	};

	const handleTimeChange = (
		type: "hour" | "minute" | "ampm",
		value: string
	) => {
		if (!date) return;

		const now = new Date();
		const newDate = new Date(date);

		switch (type) {
			case "hour":
				let hour = parseInt(value);
				const currentAmPm = newDate.getHours() >= 12 ? "PM" : "AM";
				if (currentAmPm === "PM" && hour !== 12) {
					hour += 12;
				} else if (currentAmPm === "AM" && hour === 12) {
					hour = 0;
				}
				newDate.setHours(hour);
				break;
			case "minute":
				newDate.setMinutes(parseInt(value));
				break;
			case "ampm":
				const currentHour = newDate.getHours();
				if (value === "AM" && currentHour >= 12) {
					newDate.setHours(currentHour - 12);
				} else if (value === "PM" && currentHour < 12) {
					newDate.setHours(currentHour + 12);
				}
				break;
		}

		if (newDate >= now) {
			setDate(newDate);
		}
	};

	const isHourDisabled = (hour: string) => {
		if (!date) return false;
		const now = new Date();
		if (!isSameDay(date, now)) return false;
		const hourNum = parseInt(hour);
		const currentAmPm = now.getHours() >= 12 ? "PM" : "AM";
		if (currentAmPm === "PM" && hourNum !== 12) {
			return hourNum + 12 <= now.getHours();
		}
		return hourNum < now.getHours() || (hourNum === 12 && now.getHours() === 0);
	};

	const isMinuteDisabled = (minute: string) => {
		if (!date) return false;
		const now = new Date();
		if (!isSameDay(date, now)) return false;
		if (date.getHours() > now.getHours()) return false;
		if (date.getHours() === now.getHours()) {
			return parseInt(minute) <= now.getMinutes();
		}
		return true;
	};

	const isAmPmDisabled = (ampm: string) => {
		if (!date) return false;
		const now = new Date();
		if (!isSameDay(date, now)) return false;
		const currentAmPm = now.getHours() >= 12 ? "PM" : "AM";
		return ampm === "AM" && currentAmPm === "PM";
	};

	// Convert 24-hour time to 12-hour time
	const getCurrentHour = () => {
		if (!date) return undefined;
		const hour = date.getHours();
		return (hour % 12 || 12).toString().padStart(2, "0");
	};

	// Determine current AM/PM
	const getCurrentAmPm = () => {
		if (!date) return undefined;
		return date.getHours() >= 12 ? "PM" : "AM";
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					type='button'
					className={cn(
						"w-full py-[0.9rem] inline-flex items-center justify-between rounded-md border border-input px-3  text-sm ring-offset-background transition-colors hover:text-accent-foreground focus-visible:outline-none  ring-ring bg-transparent hover:ring-1 focus:ring-1 focus-within:ring-1 text-left font-normal",
						!date && "text-muted-foreground",
						className
					)}
					onClick={() => date ?? setDate(roundDatetoStepsof(10))}
					aria-label='Pick date and time'>
					{date ? format(date, "PPP p") : <span>Pick date and time</span>}
					<CalendarIcon className='mr-2 h-4 w-4' />
				</button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					mode='single'
					selected={date}
					onSelect={handleDateChange}
					initialFocus
					disabled={(date) => date < startOfToday()}
				/>
				<div className='border-t p-3 flex gap-2'>
					<Select
						value={getCurrentHour()}
						onValueChange={(value) => handleTimeChange("hour", value)}>
						<SelectTrigger className='w-[80px]'>
							<SelectValue placeholder='Hour' />
						</SelectTrigger>
						<SelectContent>
							{hours.map((hour) => (
								<SelectItem
									key={hour}
									value={hour}
									disabled={isHourDisabled(hour)}>
									{hour}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select
						value={
							date ? date.getMinutes().toString().padStart(2, "0") : undefined
						}
						onValueChange={(value) => handleTimeChange("minute", value)}>
						<SelectTrigger className='w-[80px]'>
							<SelectValue placeholder='Min' />
						</SelectTrigger>
						<SelectContent>
							{minutes.map((minute) => (
								<SelectItem
									key={minute}
									value={minute}
									disabled={isMinuteDisabled(minute)}>
									{minute}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select
						value={getCurrentAmPm()}
						onValueChange={(value) => handleTimeChange("ampm", value)}>
						<SelectTrigger className='w-[80px]'>
							<SelectValue placeholder='AM/PM' />
						</SelectTrigger>
						<SelectContent>
							{amPmOptions.map((ampm) => (
								<SelectItem
									key={ampm}
									value={ampm}
									disabled={isAmPmDisabled(ampm)}>
									{ampm}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</PopoverContent>
		</Popover>
	);
}
