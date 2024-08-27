import heroImageDesktop from '../../assets/desktop/image-hero.jpg';
import heroImageTablet from '../../assets/tablet/image-hero.jpg';
import heroImageMobile from '../../assets/mobile/image-hero.jpg';
import Button from '../Button';

//ToDo: Fix mix-blend text - 2nd half color should be pure black

const IntroSection = () => {
	return (
		<section className="flex md:flex-row flex-col place-items-center relative lg:h-[800px]">
			<div className="lg:block hidden z-0 h-full w-[450px] bg-almost-black"></div>
			<div className="z-0 lg:w-[540px] md:w-[437px] w-full lg:h-full md:h-[700px] h-[240px] md:mb-0 mb-8">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet={heroImageDesktop}
					/>
					<source
						media="(min-width: 640px)"
						srcSet={heroImageTablet}
					/>
					<img
						src={heroImageMobile}
						alt="art exhibit 1"
						className="w-full h-full object-cover object-center"
					/>
				</picture>
			</div>

			<div className="flex lg:flex-row flex-col lg:gap-80 md:gap-12 gap-8 md:absolute lg:left-[165px] left-[389px] lg:top-[189px] top-[145px]">
				<h1 className="font-heading font-black lg:text-size-heading-xl text-size-heading-l lg:leading-line-heading-xl leading-line-heading-l text-black lg:text-white lg:mix-blend-difference">
					MODERN <br />
					ART GALLERY
				</h1>
				<div className="flex flex-col lg:gap-16 gap-12">
					<p className="w-[350px] font-body lg:text-size-body-m text-size-body-s lg:leading-line-body-m leading-line-body-s text-dark-grey">
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
