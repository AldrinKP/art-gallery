const BentoSection = () => {
	return (
		<div className="flex h-full w-[1110px] mx-auto my-[180px] items-center justify-center">
			<div className="grid h-full w-full gap-4 bg-transparent p-2 grid-cols-5 grid-rows-3">
				<div className="col-span-2 row-span-1 bg-pink-200 rounded-lg shadow-md flex items-center justify-center">
					<p>Salmon</p>
				</div>

				<div className="col-span-3 row-span-1 bg-lime-200 rounded-lg shadow-md flex items-center justify-center">
					<p>Broccoli</p>
				</div>

				<div className="col-span-3 row-span-2 bg-yellow-200 rounded-lg shadow-md flex items-center justify-center">
					<p>Tamago</p>
				</div>

				<div className="col-span-2 row-span-1 bg-tan-200 rounded-lg shadow-md flex items-center justify-center">
					<p>Pork</p>
				</div>

				<div className="col-span-2 row-span-1 bg-green-200 rounded-lg shadow-md flex items-center justify-center">
					<p>Edamame</p>
				</div>
			</div>
		</div>
	);
};

export default BentoSection;
