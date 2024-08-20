import heroImage from '../../assets/desktop/image-hero.jpg';

const IntroSection = () => {
	return (
		<div className="flex relative h-[800px]">
			<div className="h-full w-[450px] bg-almost-black"></div>
			<img src={heroImage} />
			<div className="w-[514px] absolute left-[165px] top-[189px]">
				<h1 className="font-heading font-black text-size-heading-xl text-white mix-blend-difference">
					MODERN <br />
					ART GALLERY
				</h1>
			</div>
		</div>
	);
};

export default IntroSection;
