import { Star } from 'lucide-react';
import React from 'react';

export default function StarRating({ rating }: { rating: number }) {
	// Ensure rating is between 0 and 5
	const validRating = Math.min(5, Math.max(0, rating));

	return (
		<div className='flex'>
			{Array.from({ length: 5 }, (_, index) => {
				const fillType =
					index < Math.floor(validRating)
						? 'full' // Full star
						: index < validRating
							? 'half' // Half star
							: 'none'; // Empty star

				return (
					<div key={index} className='relative mr-1 h-5 w-5'>
						<Star
							fill={fillType === 'full' ? 'rgb(234 179 8)' : 'none'}
							className={`absolute left-0 top-0 h-5 w-5 ${
								fillType === 'full' ? 'text-yellow-500' : 'text-gray-400'
							}`}
						/>
						{fillType === 'half' && (
							<Star
								fill='rgb(234 179 8)'
								className='clip-half absolute left-0 top-0 h-5 w-5 text-yellow-500'
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}
