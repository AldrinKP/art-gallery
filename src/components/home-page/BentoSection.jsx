import gridImage1 from '../../assets/desktop/image-grid-1@2x.jpg';
import gridImage2 from '../../assets/desktop/image-grid-2@2x.jpg';
import gridImage3 from '../../assets/desktop/image-grid-3@2x.jpg';

const BentoSection = () => {
	return (
		<section className="flex h-full max-w-[1110px] mx-auto my-[180px] items-center justify-center lg:p-0 px-8">
			<div className="grid h-full w-full lg:gap-8 gap-[11px] bg-transparent grid-cols-5 grid-rows-3">
				<div className="col-span-2 row-span-3 flex flex-col justify-center lg:mr-32 mr-16 lg:w-[350px] min-w-[225px]">
					<h1 className="font-heading font-black lg:text-size-heading-m text-[50px] lg:leading-line-heading-m leading-[45px] text-almost-black lg:mb-8 mb-6">
						YOUR DAY AT THE GALLERY
					</h1>
					<p className="font-body lg:text-size-body-m text-size-body-s lg:leading-line-body-m leading-line-body-s text-dark-grey">
						Wander through our distinct collections and find new
						insights about our artists. Dive into the details of
						their creative process.
					</p>
				</div>
				<div className="col-span-3 row-span-3">
					<img
						src={gridImage1}
						alt="art exhibit 1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="col-span-3 row-span-5 flex justify-center">
					<img
						src={gridImage2}
						alt="bench in front of an art piece"
					/>
				</div>
				<div className="col-span-2 row-span-5 flex flex-col justify-center">
					<img
						src={gridImage3}
						alt="People looking at art"
						className="object-cover"
					/>
					<div className="flex items-center justify-center flex-auto bg-almost-black lg:mt-8 mt-[11px]">
						<div className="flex flex-col w-[350px]">
							<h1 className="font-heading font-black text-size-heading-m leading-line-heading-m text-white mb-8">
								COME & BE INSPIRED
							</h1>
							<p className="font-body text-size-body-m leading-line-body-m text-white">
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
