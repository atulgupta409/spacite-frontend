import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LeafletMap({ latitude, longitude, name }) {
  if (latitude === undefined || longitude === undefined) {
    return null; 
  }
  const position = [latitude , longitude ];

  return (
    <div>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}@2x.png"
        />
        <Marker position={position}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;