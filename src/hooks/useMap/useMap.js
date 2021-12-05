import { useState, useEffect } from 'react';
import leaflet from 'leaflet';

const URL_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const MAP_TEXT_COPYWRITING = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const DefaultPosition = {
  Lat: 59.968294,
  Lng: 30.317811,
  Zoom: 16,
}
function useMap(mapRef) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: DefaultPosition.Lat,
          lng: DefaultPosition.Lng,
        },
        zoom: DefaultPosition.Zoom,
      });

      leaflet
        .tileLayer(
          URL_TILE_LAYER,
          {
            attribution: MAP_TEXT_COPYWRITING,
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [map, mapRef]);

  return map;
}

export default useMap
