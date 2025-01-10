import React from "react";

const About = () => {
	return (
		<div className='max-w-[1000px] space-y-4 mx-auto mt-12 w-full p-4'>
			<div className="flex flex-col space-y-2">
				<h1 className='font-bold text-4xl'>About</h1>
				<p className='text-lg'>This is the about page</p>
			</div>

			<div className='grid  gap-4'>
				<div>
					<h2 className='font-bold text-2xl'>Our Mission</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quidem, doloremque, atque, officiis voluptates quod quae
						accusantium, quas nemo voluptatum doloribus. Quas, quod. Quo
						quibusdam, quidem voluptates, natus, quae repellendus voluptas
						accusantium quos doloremque labore quia. Quisquam, quas accusantium.
						Quisquam, quas accusantium.
					</p>
				</div>
				<div>
					<h2 className='font-bold text-2xl'>Our Vision</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quidem, doloremque, atque, officiis voluptates quod quae
						accusantium, quas nemo voluptatum doloribus. Quas, quod. Quo
						quibusdam, quidem voluptates, natus, quae repellendus voluptas
						accusantium quos doloremque labore quia. Quisquam, quas accusantium.
						Quisquam, quas accusantium.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
