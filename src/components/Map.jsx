import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const Map = () => {
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
			<Marker position={[41.4815044584745, -71.3103669241421]}></Marker>
		</MapContainer>
	);
};

export default Map;
