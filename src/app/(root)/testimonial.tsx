import { Card } from '@/components/ui/card';
import StarRating from '@/components/ui/starRating';
import React from 'react';

const baseGradient = [
	'bg-gradient-to-br from-red-400/20 to-orange-300/20',
	'bg-gradient-to-br from-green-400/20 to-lime-300/20',
	'bg-gradient-to-br from-yellow-300/20 to-amber-400/20',
	'bg-gradient-to-br from-pink-300/20 to-rose-400/20',
	'bg-gradient-to-br from-purple-400/20 to-violet-300/20',
	'bg-gradient-to-br from-blue-300/20 to-sky-400/20',
];

export default function Testimonial({
	children,
	author,
	rating,
}: {
	children: React.ReactNode;
	author: string;
	rating: number;
}) {
	return (
		<Card
			className={`box flex size-full cursor-pointer flex-col justify-between p-6 hover:shadow-lg ${
				baseGradient[Math.floor(Math.random() * baseGradient.length)]
			}`}
		>
			<div className='flex flex-col items-start gap-2'>
				<StarRating rating={rating} />
				<p className='mb-4 text-lg'>{children}</p>
			</div>
			<p className='font-semibold'>— {author}</p>
		</Card>
	);
}