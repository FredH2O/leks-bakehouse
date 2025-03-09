import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Location = () => {
  const location = { lat: 53.35720202668406, lng: -6.44984675038385 };

  const customIcon = new L.Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        className="w-full h-[300px] md:h-[500px] rounded"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>Welcome to this location!</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Location;
