import { Star } from "lucide-react";
import React from "react";

export default function StarRating({ rating }: { rating: number }) {
	// Ensure rating is between 0 and 5
	const validRating = Math.min(5, Math.max(0, rating));

	return (
		<div className='flex'>
			{Array.from({ length: 5 }, (_, index) => {
				const fillType =
					index < Math.floor(validRating)
						? "full" // Full star
						: index < validRating
						? "half" // Half star
						: "none"; // Empty star

				return (
					<div key={index} className='relative h-5 w-5 mr-1'>
						<Star
							fill={fillType === "full" ? "rgb(234 179 8)" : "none"}
							className={`h-5 w-5 absolute top-0 left-0 ${
								fillType === "full" ? "text-yellow-500" : "text-gray-400"
							}`}
						/>
						{fillType === "half" && (
							<Star
								fill='rgb(234 179 8)'
								className='h-5 w-5 absolute top-0 left-0 text-yellow-500 clip-half'
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}
