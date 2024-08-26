import heroImage from '../../assets/desktop/image-hero.jpg';
import Button from '../Button';

//ToDo: Fix mix-blend text - 2nd half color should be pure black

const IntroSection = () => {
	return (
		<section className="flex relative lg:h-[800px]">
			<div className="lg:block hidden z-0 h-full w-[450px] bg-almost-black"></div>
			<div className="z-0 lg:w-[540px] w-[437px] lg:h-full h-[700px]">
				<img src={heroImage} className="w-full h-full object-cover" />
			</div>

			<div className="flex lg:flex-row flex-col lg:gap-80 absolute lg:left-[165px] left-[389px] lg:top-[189px] top-[145px] w-full">
				<h1 className="font-heading font-black text-size-heading-xl leading-line-heading-xl text-black lg:text-white lg:mix-blend-difference">
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
