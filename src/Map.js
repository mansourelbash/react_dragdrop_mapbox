import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Modal from './Modal';
import {locations} from './locations'
const JordanMap = () => {
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFuc291cmFsYmFzaCIsImEiOiJjbHZpNGNzamQwNjJ4Mmpta3ExbGx2dm9vIn0.I81q190NbR8sAEaOQdO3Fg';

    const initializeMap = () => {
      const newMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [35.9, 31.9],
        zoom: 6
      });

      newMap.on('load', () => {
        setMap(newMap);
        addMarkers(newMap);
      });
    };

    if (!map) {
      initializeMap();
    }

    return () => map && map.remove();
  }, [map]);


  
  const addMarkers = (map) => {
    locations.forEach(location => {
      const marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .addTo(map);
      
      marker.getElement().addEventListener('click', () => {
        console.log('Marker clicked:', location);
        setSelectedLocation(location);
        setModalOpen(true);
      });
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
      {modalOpen && selectedLocation && (
        <Modal
          name={selectedLocation.name}
          description={selectedLocation.description}
          city={selectedLocation.city}
          image={selectedLocation.image}
          famousRestaurants={selectedLocation.famousRestaurants}
          cafes={selectedLocation.cafes}
          otherInfo={selectedLocation.otherInfo}
          onClose={closeModal}
          id={selectedLocation.id}
        />
      )}
    </div>
  );
};

export default JordanMap;




