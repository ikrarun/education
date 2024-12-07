"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function DateTimePicker({
	defaultDate,
	className,
	onChange,
	disabled,
	id,
}: {
	id: string;
	defaultDate?: Date;
	className?: string;
	disabled?: boolean;
	onChange?: (date: Date) => void;
}) {
	const [date, setDate] = React.useState<Date | undefined>(defaultDate);
	const [isOpen, setIsOpen] = React.useState(false);

	const hours = Array.from({ length: 12 }, (_, i) => i + 1);
	const handleDateSelect = (selectedDate: Date | undefined) => {
		if (selectedDate) {
			setDate(selectedDate);
		}
	};

	const handleTimeChange = (
		type: "hour" | "minute" | "ampm",
		value: string
	) => {
		if (date) {
			const newDate = new Date(date);
			if (type === "hour") {
				newDate.setHours(
					(parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
				);
			} else if (type === "minute") {
				newDate.setMinutes(parseInt(value));
			} else if (type === "ampm") {
				const currentHours = newDate.getHours();
				newDate.setHours(
					value === "PM" ? currentHours + 12 : currentHours - 12
				);
			}
			setDate(newDate);
		}
	};

	React.useEffect(() => {
		if (date && onChange) {
			onChange(date);
		}
	}, [date, onChange]);

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					id={id}
					variant='outline'
					className={cn(
						"w-full justify-start hover:text-black hover:bg-white text-left font-normal",
						!date && "text-muted-foreground",
						className
					)}
					disabled={disabled}>
					{date ? (
						format(date, "MM/dd/yyyy hh:mm aa")
					) : (
						<span>MM/DD/YYYY hh:mm aa</span>
					)}
					<CalendarIcon className='mr-2 h-4 w-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-full text-center p-0'>
				<div className='sm:flex'>
					<Calendar
						mode='single'
						selected={date}
						onSelect={handleDateSelect}
						initialFocus
					/>
					<div className='flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x'>
						<ScrollArea className='w-64 sm:w-auto'>
							<div className='flex sm:flex-col p-2'>
								{hours.reverse().map((hour) => (
									<Button
										key={hour}
										size='icon'
										variant={
											date && date.getHours() % 12 === hour % 12
												? "default"
												: "ghost"
										}
										className={`sm:w-full shrink-0 aspect-square ${
											date && date.getHours() % 12 === hour % 12
												? "bg-amber-500 hover:bg-amber-500/90"
												: "bg-transparent"
										}`}
										onClick={() => handleTimeChange("hour", hour.toString())}>
										{hour}
									</Button>
								))}
							</div>
							<ScrollBar orientation='horizontal' className='sm:hidden' />
						</ScrollArea>
						<ScrollArea className='w-64 sm:w-auto'>
							<div className='flex sm:flex-col p-2'>
								{Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
									<Button
										key={minute}
										size='icon'
										variant={
											date && date.getMinutes() === minute ? "default" : "ghost"
										}
										className={`sm:w-full shrink-0 aspect-square ${
											date && date.getMinutes() === minute
												? "bg-amber-500 hover:bg-amber-500/90"
												: "bg-transparent"
										}`}
										onClick={() =>
											handleTimeChange("minute", minute.toString())
										}>
										{minute}
									</Button>
								))}
							</div>
							<ScrollBar orientation='horizontal' className='sm:hidden' />
						</ScrollArea>
						<ScrollArea className=''>
							<div className='flex sm:flex-col p-2'>
								{["AM", "PM"].map((ampm) => (
									<Button
										key={ampm}
										size='icon'
										variant={
											date &&
											((ampm === "AM" && date.getHours() < 12) ||
												(ampm === "PM" && date.getHours() >= 12))
												? "default"
												: "ghost"
										}
										className={`sm:w-full shrink-0 aspect-square ${
											date &&
											((ampm === "AM" && date.getHours() < 12) ||
												(ampm === "PM" && date.getHours() >= 12))
												? "bg-amber-500 hover:bg-amber-500/90"
												: "bg-transparent"
										}`}
										onClick={() => handleTimeChange("ampm", ampm)}>
										{ampm}
									</Button>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
