// CourseComponent.js
import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { time, calendar } from 'ionicons/icons';
import styles from './Course.module.css'; // Asegúrate de importar los estilos correspondientes
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import ModalImagen from '../ModalComponet';

const CourseComponent = ({ title, hours, date }) => {
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
        families: ['Poppins:800, 100']
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
    <div className={`mb-4`}>
      <div className={styles.subdescription}>
        {title}
      </div>
      <div className={styles.subdescription}>
        <IonIcon icon={time} className={styles.iconCourse}></IonIcon>
        {hours}
        <IonIcon icon={calendar} className={`ml-3 ${styles.iconCourse}`}></IonIcon>
        {date}
      </div>
      <div className={styles.subdescription}>
        <a
          className={styles.linkModal}
          onClick={() => abrirModal('../../src/assets/images/certificates/certificado.jpg')}>
          See Certificate
        </a>
        <ModalImagen isOpen={modalAbierto} onClose={cerrarModal} imageUrl={imagenUrl} />
      </div>
    </div>
  );
}

CourseComponent.propTypes = {
  title: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CourseComponent;
