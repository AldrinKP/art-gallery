import gridImage1 from '../../assets/desktop/image-grid-1@2x.jpg';
import gridImage2 from '../../assets/desktop/image-grid-2@2x.jpg';

const BentoSection = () => {
	return (
		<div className="flex h-full w-[1110px] mx-auto my-[180px] items-center justify-center">
			<div className="grid h-full w-full gap-8 bg-transparent grid-cols-5 grid-rows-3">
				<div className="col-span-2 row-span-1 flex flex-col justify-center mr-32 w-[350px]">
					<h1 className="font-heading font-black text-size-heading-m leading-line-heading-m text-almost-black mb-8">
						YOUR DAY AT THE GALLERY
					</h1>
					<p className="font-body text-size-body-m leading-line-body-m text-dark-grey">
						Wander through our distinct collections and find new
						insights about our artists. Dive into the details of
						their creative process.
					</p>
				</div>

				<div className="col-span-3 row-span-1">
					<img src={gridImage1} alt="art exhibit 1" />
				</div>

				<div className="col-span-3 row-span-2">
					<img
						src={gridImage2}
						alt="bench in front of an art piece"
					/>
				</div>

				<div className="col-span-2 row-span-1 bg-tan-200 flex items-center justify-center">
					<p>Pork</p>
				</div>

				<div className="col-span-2 row-span-1 bg-green-200 flex items-center justify-center">
					<p>Edamame</p>
				</div>
			</div>
		</div>
	);
};

export default BentoSection;
