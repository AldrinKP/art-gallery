import Button from '../components/Button';
import Footer from '../components/Footer';
import Map from '../components/Map';

const Location = () => {
	return (
		<div className="relative z-1">
			<Map />
			<Button type="home" className="absolute top-0 left-32" />
			<div className="flex place-content-center w-full md:py-24 py-14 bg-almost-black">
				<div className="flex md:flex-row flex-col flex-grow justify-between lg:max-w-[1110px] lg:px-0 px-10">
					<h1 className="font-heading font-black lg:text-size-heading-l text-[55px] lg:leading-line-heading-l leading-[50px] text-white md:mb-0 mb-12">
						OUR
						<br />
						LOCATION
					</h1>
					<div className="flex flex-col">
						<h2 className="font-heading lg:text-size-heading-s text-[32px] lg:leading-line-heading-s leading-[32px] text-gold mb-6">
							99 KING STREET
						</h2>
						<p className="font-body lg:text-size-body-m text-[18px] lg:leading-line-body-m leading-[28px] text-white mb-8">
							Newport
							<br />
							RI 02840
							<br />
							United States of America
						</p>
						<p className="font-body lg:text-size-body-m text-[18px] lg:leading-line-body-m leading-[28px] text-white lg:max-w-[540px] max-w-[398px]">
							Our newly opened gallery is located near the Edward
							King House on 99 King Street, the Modern Art Gallery
							is free to all visitors and open seven days a week
							from 8am to 9pm.
						</p>
					</div>
				</div>
			</div>
			<Footer bgColor="bg-gold" />
		</div>
	);
};

export default Location;
