// JobItem.js
import React from 'react';
import { IonIcon } from '@ionic/react'; 
import PropTypes from 'prop-types';

import styles from './Job.module.css';  

const JobComponent = ({ title, position, duties, icon }) => {
    return (
        <div className='flex mb-3'>
            <div className={`flex ${styles.containerJobIcon}`}>
                <IonIcon icon={icon} className={styles.iconJob}></IonIcon>
                <div className={styles.dividerline}></div>
            </div>
            <div className={styles.textJob}>
                <div className={styles.textTitle}>
                    {title}
                </div>
                <div className={styles.textPosition}>
                    {position}
                </div>
                <div className={styles.textPosition}>
                    {duties}
                </div>
            </div>
        </div>
    );
};

JobComponent.propTypes = {
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duties: PropTypes.string.isRequired,
    icon: PropTypes.object,  // Puedes ajustar este PropTypes según la estructura de tu icono
};

export default JobComponent;
