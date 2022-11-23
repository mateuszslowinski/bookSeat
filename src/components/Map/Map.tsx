import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import '../../utils/map-icon'
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[50.049683, 19.944544]} zoom={14}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.0723, 19.9923]}>
                    <Popup>
                        <p>Name of restaurant</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}