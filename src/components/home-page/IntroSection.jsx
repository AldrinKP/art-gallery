import heroImage from '../../assets/desktop/image-hero.jpg';
import Button from '../Button';

//ToDo: Fix mix-blend text - 2nd half color should be pure black

const IntroSection = () => {
	return (
		<section className="flex relative h-[800px]">
			<div className="z-0 h-full w-[450px] bg-almost-black"></div>
			<img src={heroImage} className="z-0 w-[540px] h-full" />
			<div className="flex gap-80 absolute left-[165px] w-full top-[189px]">
				<h1 className="font-heading font-black text-size-heading-xl leading-line-heading-xl text-white mix-blend-difference">
					MODERN <br />
					ART GALLERY
				</h1>
				<div className="flex flex-col gap-[64px]">
					<p className="w-[350px] font-body text-size-body-m leading-line-body-m text-dark-grey">
						The arts in the collection of the Modern Art Gallery all
						started from a spark of inspiration. Will these pieces
						inspire you? Visit us and find out.
					</p>
					<Button type="location" />
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
