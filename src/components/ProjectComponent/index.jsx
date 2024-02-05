// CourseComponent.js
import React from 'react';
import { IonIcon } from '@ionic/react';
import { time, calendar } from 'ionicons/icons';
import styles from './Project.module.css'; // Asegúrate de importar los estilos correspondientes
import PropTypes from 'prop-types';
const ProjectComponent = ({ title }) => {
    return (
        <>
            <div className="overflow-x-hidden">
                <div className="">
                    <div className={`${styles.tec}`}>
                        <div className={styles.containerImage}>
                            <img
                                src="../../src/assets/images/react.png"
                  
                                className={`${styles.imageTec}`}
                            />
                        </div>
                        <div className={`${styles.textTec}`}>
                            {/* Contenido de la segunda columna */}
                            React Native
                        </div>
                    </div>

                    <div className={` ${styles.tec}`}>
                        <div className={styles.containerImage}>
                            <img
                                src="../../src/assets/images/react.png"
                
                                className={`${styles.imageTec} `}
                            />
                        </div>
                        <div className={` ${styles.textTec}`}>
                            {/* Contenido de la segunda columna */}
                            React Native
                        </div>
                    </div>
                </div>

                <div className={` ${styles.titleProject}`}>
                    HOLA
                </div>
                <div className={`${styles.descriptionProject}`}>
                    Building a soccer betting app to keep track of your sports bets with your friends using React Native Framework.
                </div>
                <button className="">
                    <span>See More</span>
                </button>
            </div>

        </>



    );
};

ProjectComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ProjectComponent;
