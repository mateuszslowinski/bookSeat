import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[50.049683, 19.944544]} zoom={18}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}