import Button from '../components/Button';
import Footer from '../components/Footer';
import Map from '../components/Map';

const Location = () => {
	return (
		<div className="relative z-1">
			<Map />
			<Button type="home" className="absolute top-0 left-32" />
			<div className="flex place-content-center w-full py-24 bg-almost-black">
				<div className="flex justify-between gap-56">
					<h1 className="font-heading font-black text-size-heading-l leading-line-heading-l text-white">
						OUR
						<br />
						LOCATION
					</h1>
					<div className="flex flex-col">
						<h2 className="font-heading text-size-heading-s leading-line-heading-s text-gold mb-6">
							99 KING STREET
						</h2>
						<p className="font-body text-size-body-m leading-line-body-m text-white mb-8">
							Newport
							<br />
							RI 02840
							<br />
							United States of America
						</p>
						<p className="font-body text-size-body-m leading-line-body-m text-white max-w-[540px]">
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
