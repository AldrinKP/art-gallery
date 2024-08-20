const Button = ({ type, onClick }) => {
	if (type === 'location') {
		return (
			<button className="group flex w-[260px] h-[72px]" onClick={onClick}>
				<div className="h-full w-[204px] bg-almost-black group-hover:bg-gold flex justify-center items-center">
					<span className="font-heading font-extrabold text-white tracking-button">
						OUR LOCATION
					</span>
				</div>
				<div className="w-[56px] h-full bg-gold group-hover:bg-almost-black flex justify-center items-center">
					<svg
						width="10"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
					</svg>
				</div>
			</button>
		);
	}
	return (
		<button className="group flex w-[260px] h-[72px]" onClick={onClick}>
			<div className="w-[56px] h-full bg-gold group-hover:bg-almost-black flex justify-center items-center">
				<svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
					<path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
				</svg>
			</div>
			<div className="h-full w-[204px] bg-almost-black group-hover:bg-gold flex justify-center items-center">
				<span className="font-heading font-extrabold text-white tracking-button">
					BACK TO HOME
				</span>
			</div>
		</button>
	);
};

export default Button;
