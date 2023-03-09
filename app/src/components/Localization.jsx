import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Loader from './Loader';
import '../assets/css/styleLocalization.css';

function Localization() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = { lat: 40.6892, lng: -74.0445 };

  if (!isLoaded) return <Loader />;
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="localization-map">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Localization;
