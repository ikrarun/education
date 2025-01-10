import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes } from "react";

export default function InputHelper({
	label,
	placeholder,
	type,
	helperText,
	...props
}: {
	label: string;
	placeholder: string;
	type: string;
	helperText: string;
} & InputHTMLAttributes<HTMLInputElement>) {
	return (
		<div className='space-y-2'>
			<Label htmlFor='input-03'>{label}</Label>
			<Input id='input-03' placeholder={placeholder} type={type} {...props} />
			<p
				className='mt-2 text-xs text-muted-foreground'
				role='region'
				aria-live='polite'>
				{helperText}
			</p>
		</div>
	);
}
