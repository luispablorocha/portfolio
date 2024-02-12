// CourseComponent.js
import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { time, calendar } from 'ionicons/icons';
import styles from './Course.module.css'; // Asegúrate de importar los estilos correspondientes
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import ModalImagen from '../ModalComponet';
import { motion } from 'framer-motion'


const CourseComponent = ({ title, hours, date, certificate }) => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenUrl, setImagenUrl] = useState('');
  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Motomami'],
        urls: [
          '/fonts/motomami.ttf',
        ],
      },
      google: {
        families: ['Poppins:800, 100, 500']
      }
    });
  }, []);

  const abrirModal = (url) => {
    setImagenUrl(url);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <motion.div className={`mb-4`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <div className={styles.subdescription}>
        {title}
      </div>
      <div className={styles.textSee}>
        <IonIcon icon={time} className={styles.iconCourse}></IonIcon>
        {hours}
        <IonIcon icon={calendar} className={`ml-3 ${styles.iconCourse}`}></IonIcon>
        {date}
      </div>
      {certificate && ( 
        <div className={styles.textSee}>
          <a
            className={styles.linkModal}
            onClick={() => abrirModal(certificate)}>
            See Certificate
          </a>
          <ModalImagen isOpen={modalAbierto} onClose={cerrarModal} imageUrl={imagenUrl} />
        </div>
      )}
    </motion.div>
  );
}

CourseComponent.propTypes = {
  title: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CourseComponent;
