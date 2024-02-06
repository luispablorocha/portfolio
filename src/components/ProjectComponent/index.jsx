// CourseComponent.js
import React ,{useEffect}from 'react';
import { IonIcon } from '@ionic/react';
import { time, calendar } from 'ionicons/icons';
import styles from './Project.module.css'; // Asegúrate de importar los estilos correspondientes
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';

const ProjectComponent = ({ title }) => {
    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['Motomami'],
                urls: [
                    '/fonts/motomami.ttf',
                ],
            },
            google: {
                families: ['Poppins:500, 100']
            }
        });
    }, []);
    
    return (
        <>
            <div className={`pl-4 pt-3 ${styles.containerProject}`}>
                <div className="flex">

                    <div className={`flex-3 md:flex-col-2 m-4 ${styles.tec}`}>
                        <div className={`flex1 ${styles.containerImage}`}>
                            <img src="../../src/assets/images/react.png" alt='HTML' className={`${styles.imageTec} w-full h-auto md:w-auto md:h-auto`} />
                        </div>
                    </div>

                    <div className={`flex-3 md:flex-col-2 m-4 ${styles.tec}`}>
                        <div className={styles.containerImage}>
                            <img src="../../src/assets/images/react.png" alt='HTML' className={`${styles.imageTec} w-full h-auto md:w-auto md:h-auto`} />
                        </div>
                    </div>
                </div>

                <div className={`ml-4 mr-5 text-3xl mt-0 md:mt-2 ${styles.titleProject}`}>
                    Tlatoani
                </div>
                <div className={`ml-4 mr-5 mt-4 pb-4 ${styles.descriptionProject}`}>
                    Building a soccer betting app to keep track of your sports bets with your friends using React Native Framework.
                </div>
                <button className="mb-7 ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>See More</span>
                </button>
            </div>

        </>
    );
}

ProjectComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ProjectComponent;
