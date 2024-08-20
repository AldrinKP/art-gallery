import heroImage from '../../assets/desktop/image-hero.jpg';
import Button from '../Button';

const IntroSection = () => {
	return (
		<div className="flex relative h-[800px]">
			<div className="h-full w-[450px] bg-almost-black"></div>
			<img src={heroImage} className="w-[540px] h-full" />
			<div className="absolute w-[514px] left-[165px] top-[189px]">
				<h1 className="font-heading font-black text-size-heading-xl leading-line-heading-xl text-white mix-blend-difference">
					MODERN <br />
					ART GALLERY
				</h1>
			</div>
			<div className="absolute top-[192px] left-[925px] flex flex-col gap-[64px]">
				<p className="w-[350px] font-body text-size-body-m leading-line-body-m text-dark-grey">
					The arts in the collection of the Modern Art Gallery all
					started from a spark of inspiration. Will these pieces
					inspire you? Visit us and find out.
				</p>
				<Button type="location" />
			</div>
		</div>
	);
};

export default IntroSection;
