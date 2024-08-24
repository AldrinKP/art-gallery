import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { DivIcon } from 'leaflet';

const Map = () => {
	const customIcon = new DivIcon({
		html: '<svg width="66" height="88" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 56V0h66v56H45L33 88 21 56H0Z" fill="#151515"/><circle fill="#D5966C" cx="33" cy="28" r="12"/></g></svg>',
	});

	return (
		<MapContainer
			center={[41.48148034531764, -71.31036692421809]}
			zoom={15}
			scrollWheelZoom={false}
			className="h-[600px]"
		>
			<TileLayer
				attribution=""
				url="https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=MO8rZa0B1M14CmufZP1cjNqgNnO5yC1SatFp9PMrrBYc9cow1w3IYC10EL8TiWNh"
			/>
			<Marker
				position={[41.4815044584745, -71.3103669241421]}
				icon={customIcon}
			></Marker>
		</MapContainer>
	);
};

export default Map;
