'use client';

// IMPORTANT: the order matters!
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLng, LatLngTuple } from 'leaflet';

export default function Map() {
  const position: LatLngTuple = [-6.237208835063266, 107.16348030741528];

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: '400px', width: '350px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        3000/
        <Popup>
          <a
            target='_blank'
            href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
          >
            Klik untuk mendapatkan rute
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
