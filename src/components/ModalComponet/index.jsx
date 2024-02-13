// ModalImagen.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        maxWidth: '900px',
        height: '600px',
        margin: 'auto',
    },
};

const ModalImagen = ({ isOpen, onClose, imageUrl }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="CERTIFICATE"
            style={customStyles}
        >
            <img src={imageUrl} alt="Imagen" />
            <button onClick={onClose}>Cerrar</button>
        </Modal>
    );
};

export default ModalImagen;
