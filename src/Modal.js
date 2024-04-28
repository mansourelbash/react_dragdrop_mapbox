import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import NewWidgetModal from './NewWidgetModal';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget } from './actions/widgetActions'; 
import Widget from './Widget';

const Modal = ({id, name, description, city, image, famousRestaurants, cafes, otherInfo, onClose }) => {
  const modalRef = useRef(null);
  const [modalClass, setModalClass] = useState('modal-content');
  const [newWidgetModalOpen, setNewWidgetModalOpen] = useState(false);
  const [sectionName, setSectionName] = useState('');
  const [chartType, setChartType] = useState('');
  const dispatch = useDispatch(); 

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const closeModal = () => {
    setModalClass('modal-content fadeOut');
    setTimeout(() => onClose(), 500);
  };

  const openNewWidgetModal = () => {
    setNewWidgetModalOpen(true);
  };

  const closeNewWidgetModal = () => {
    setNewWidgetModalOpen(false);
  };

  const handleConfirmWidget = () => {
    dispatch(addWidget({ sectionName, chartType }));
    closeNewWidgetModal();
  };

  return (
    <div className={`modal-overlay fadeIn`} onClick={closeModal}>
      <div ref={modalRef} className={modalClass} onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
          <FaTimes className="h-6 w-6" />
        </button>
        <div className="p-4 flex">
          <div className="w-1/3">
            <div className="w-24 h-24 bg-gray-300 rounded-lg mr-4"></div>
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-700 mb-2"><strong>City:</strong> {city}</p>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {description}</p>
            {famousRestaurants && (
              <>
                <p className="text-gray-700 mb-2"><strong>Famous Restaurants:</strong></p>
                <ul className="list-disc ml-6">
                  {famousRestaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant}</li>
                  ))}
                </ul>
              </>
            )}
            {cafes && (
              <>
                <p className="text-gray-700 mb-2 mt-2"><strong>Cafes:</strong></p>
                <ul className="list-disc ml-6">
                  {cafes.map((cafe, index) => (
                    <li key={index}>{cafe}</li>
                  ))}
                </ul>
              </>
            )}
            <p className="text-gray-700 mb-2 mt-2"><strong>Other Information:</strong> {otherInfo}</p>
          </div>
        </div>
        <div className="p-4 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={openNewWidgetModal}>Insert New Widget</button>
        </div>

          <Widget locationId={id} locationName={name} />

      </div>

      {newWidgetModalOpen && (
        <NewWidgetModal
          onClose={closeNewWidgetModal}
          onConfirm={handleConfirmWidget}
          setSectionName={setSectionName}
          setChartType={setChartType}
          locationId={id}
          locationName={name}
        />
      )}
    </div>
  );
};

export default Modal;
