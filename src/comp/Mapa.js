import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { EspeciesContext } from './EspeciesProvider';
import coords from '../data/coords';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Mapa.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const tildesBegone = (texto) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

const agruparPorCoordenadas = (especies) => {
  const mapa = new Map();

  especies.forEach((esp) => {
    if (!esp.habitat) return;

    const habitats = esp.habitat.split(',').map(h => tildesBegone(h));
    const coord = habitats
      .map(hab => coords[hab])
      .find(c => c !== undefined);

    if (!coord) return;

    const key = `${coord.lat},${coord.lng}`;
    if (!mapa.has(key)) {
      mapa.set(key, []);
    }
    mapa.get(key).push({ ...esp, lat: coord.lat, lng: coord.lng });
  });

  return Array.from(mapa.entries()).map(([key, lista]) => {
    const [lat, lng] = key.split(',').map(Number);
    return { lat, lng, especies: lista };
  });
};

const Mapa = () => {
  const { especiesItems } = useContext(EspeciesContext);

  const ubicacionesAgrupadas = agruparPorCoordenadas(especiesItems);

  return (
    <div style={{ height: '600px', width: '100%' }} className='mapa-container'>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {ubicacionesAgrupadas.map(({ lat, lng, especies }, idx) => (
          <Marker key={idx} position={[lat, lng]}>
            <Popup>
              {especies.map((esp, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <strong>{esp.nombre}</strong><br />
                  <em>{esp.periodo}</em><br />
                  {esp.imagen && (
                    <img src={esp.imagen} alt={esp.nombre} style={{ maxWidth: '100px' }} />
                  )}
                  {i < especies.length - 1 && <hr />}
                </div>
              ))}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
