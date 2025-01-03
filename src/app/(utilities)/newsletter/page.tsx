const NewsletterSignUp = () => {
	return (
		<div style={{ margin: 0, height: "100vh", overflow: "hidden" }}>
			{/* Load the Tally widget script asynchronously */}
			<script async src='https://tally.so/widgets/embed.js'></script>
			<iframe
				src='https://tally.so/r/3NMpJj' // Use 'src' instead of 'data-tally-src' for iframe
				width='100%'
				height='100%'
				frameBorder='0'
				marginHeight={0}
				marginWidth={0}
				title='Newsletter sign-up'
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					border: 0,
				}}></iframe>
		</div>
	);
};

export default NewsletterSignUp;
