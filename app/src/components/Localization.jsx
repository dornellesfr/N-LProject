import React from 'react';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/css/styleLocalization.css';
import { Icon } from 'leaflet';

function Localization() {
  const mark = new Icon({
    iconUrl: 'https://img.icons8.com/color/96/null/marker--v1.png',
    iconSize: [45, 45],
  });

  return (
    <MapContainer className="map" center={[40.689253, -74.044548]} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.6909, -74.044548]} icon={mark} />
    </MapContainer>
  );
}

export default Localization;
