// CourseComponent.js
import React from 'react';
import { IonIcon } from '@ionic/react';
import { time, calendar } from 'ionicons/icons';
import styles from './Course.module.css'; // Asegúrate de importar los estilos correspondientes
import PropTypes from 'prop-types';

const CourseComponent = ({ title, hours, date }) => {
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
        See Certificate
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
