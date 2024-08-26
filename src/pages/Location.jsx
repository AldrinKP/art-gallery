import Button from '../components/Button';
import Map from '../components/Map';

const Location = () => {
	return (
		<div className="relative z-1">
			<Map />
			<Button type="home" className="absolute top-0 left-32" />
		</div>
	);
};

export default Location;
