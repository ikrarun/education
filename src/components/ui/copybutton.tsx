'use client';
import { CopyIcon } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

export default function Copybutton({ text }: { text: string }) {
	return (
		<CopyIcon
			size={16}
			onClick={() =>
				navigator.clipboard
					.writeText(text)
					.then(() => {
						toast.success('Copied to clipboard');
					})
					.catch(() => {
						toast.error('Failed to copy to clipboard');
					})
			}
			className='cursor-pointer'
		/>
	);
}
