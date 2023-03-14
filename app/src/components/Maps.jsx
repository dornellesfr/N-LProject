import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Loader from './Loader';
import '../assets/css/styleMaps.css';

function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCvlUFkWHm3OZo3mCwSjR-8zUJvgMHAhIw',
  });

  const center = { lat: 40.6892, lng: -74.0445 };

  if (!isLoaded) return <Loader />;
  return (
    <div className="map-session">
      <div className="map-session-title">
        <HiOutlineLocationMarker className="mx-auto mb-4 h-14 w-14 text-red-700 map-session-marker-icon" alt="icon-location" />
        <h3 className="mb-4 text-base font-extrabold leading-none tracking-tight text-red-700 md:text-2xl xl:text-3xl"> Nossa localização </h3>
      </div>
      <GoogleMap zoom={10} center={center} mapContainerClassName="localization-map">
        <Marker position={center} />
      </GoogleMap>

    </div>
  );
}

export default Maps;
