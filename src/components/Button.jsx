import { Link } from 'react-router-dom';

const Button = ({ type, className }) => {
	if (type === 'location') {
		return (
			<Link
				className={`group flex w-[260px] h-[72px]" to="/location ${
					className ? className : ''
				}`}
			>
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
			</Link>
		);
	}
	return (
		<Link
			className={`group flex w-[260px] h-[72px] ${
				className ? className : ''
			}`}
			to="/"
		>
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
		</Link>
	);
};

export default Button;
