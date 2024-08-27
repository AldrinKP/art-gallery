import gridImage1Desktop from '../../assets/desktop/image-grid-1@2x.jpg';
import gridImage1Tablet from '../../assets/tablet/image-grid-1@2x.jpg';
import gridImage1Mobile from '../../assets/mobile/image-grid-1@2x.jpg';
import gridImage2Desktop from '../../assets/desktop/image-grid-2@2x.jpg';
import gridImage2Tablet from '../../assets/tablet/image-grid-2@2x.jpg';
import gridImage2Mobile from '../../assets/mobile/image-grid-2@2x.jpg';
import gridImage3Desktop from '../../assets/desktop/image-grid-3@2x.jpg';
import gridImage3Tablet from '../../assets/tablet/image-grid-3@2x.jpg';
import gridImage3mobile from '../../assets/mobile/image-grid-3@2x.jpg';

const BentoSection = () => {
	return (
		<section className="flex h-full max-w-[1110px] mx-auto my-[180px] items-center justify-center lg:p-0 px-8">
			<div className="md:grid flex flex-col h-full w-full lg:gap-8 gap-[11px] bg-transparent grid-cols-5 grid-rows-3">
				<div className="col-span-3 row-span-3 md:order-2 md:min-h-[400px] md:mb-0 mb-6">
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet={gridImage1Desktop}
						/>
						<source
							media="(min-width: 640px)"
							srcSet={gridImage1Tablet}
						/>
						<img
							src={gridImage1Mobile}
							alt="art exhibit 1"
							className="w-full h-full object-cover object-center"
						/>
					</picture>
				</div>
				<div className="col-span-2 row-span-3 md:order-1 flex flex-col justify-center lg:mr-32 mr-16 lg:w-[350px] md:min-w-[225px] md:mb-0 mb-8">
					<h1 className="font-heading font-black lg:text-size-heading-m text-[50px] lg:leading-line-heading-m leading-[45px] text-almost-black lg:mb-8 mb-6">
						YOUR DAY AT THE GALLERY
					</h1>
					<p className="font-body lg:text-size-body-m text-size-body-s lg:leading-line-body-m leading-line-body-s text-dark-grey">
						Wander through our distinct collections and find new
						insights about our artists. Dive into the details of
						their creative process.
					</p>
				</div>
				<div className="col-span-3 row-span-5 md:order-3 flex justify-center md:min-h-[720px] md:mb-0 mb-4">
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet={gridImage2Desktop}
						/>
						<source
							media="(min-width: 640px)"
							srcSet={gridImage2Tablet}
						/>
						<img
							src={gridImage2Mobile}
							alt="art exhibit 1"
							className="w-full h-full object-cover object-center"
						/>
					</picture>
				</div>
				<div className="col-span-2 row-span-5 md:order-4 flex flex-col justify-center md:min-h-[313px]">
					<div className="basis-[40%] md:mb-0 mb-4">
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet={gridImage3Desktop}
							/>
							<source
								media="(min-width: 640px)"
								srcSet={gridImage3Tablet}
							/>
							<img
								src={gridImage3mobile}
								alt="art exhibit 1"
								className="w-full h-full object-cover object-center"
							/>
						</picture>
					</div>
					<div className="flex items-center justify-center flex-auto bg-almost-black lg:mt-8 mt-[11px]">
						<div className="flex flex-col lg:w-[350px] lg:px-0 px-6 md:py-0 py-10">
							<h1 className="font-heading font-black lg:text-size-heading-m text-[50px] lg:leading-line-heading-m leading-[50px] text-white lg:mb-8 mb-6">
								COME & BE INSPIRED
							</h1>
							<p className="font-body lg:text-size-body-m text-size-body-s lg:leading-line-body-m leading-line-body-s text-white">
								We&apos;re excited to welcome you to our gallery
								and see how our collections influence you.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BentoSection;
