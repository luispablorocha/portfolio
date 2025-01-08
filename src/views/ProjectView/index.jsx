import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Project.module.css';
import Header from '../../components/HeaderComponent';
import dataProjects from '../../data/projects';
import { motion } from 'framer-motion';
import { IonIcon } from '@ionic/react';
import {
    calendar, linkOutline
} from 'ionicons/icons';

import imgCode from '../../assets/images/code/tlani-code.jpg'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Project = () => {
    const { id } = useParams();
    const project = dataProjects.find((project) => project.id === parseInt(id));
    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }
    const { type, title, description, tecnologies, date, image, icons, logos, mockups, link } = project;
    return (
        <>
            <Header></Header>
            <div className={`ml-8 mr-8`}>
                <div className="flex items-center justify-center mb-8">
                    <div className={`text-4xl font-bold ${styles.titlePage}`}>{title}

                    </div>

                </div>
                <div className="flex items-center justify-center ">
                    <div className={`text-4xl font-bold ${styles.titleDeco}`}>PROJECT

                    </div>

                </div>
                <div className={`pr-5 flex flex-col sm:flex-row gap-4 ${styles.mainContainer}`}>
                    {/* Primera columna */}
                    <div className={`flex-1 sm:mr-2`}>
                        <div className={`${styles.blurImage}`}>
                            <img src={imgCode} alt='About Image' />
                        </div>
                        <div className={styles.containerAbout}>
                            <div className={`text-3xl font-bold mt-3 ${styles.textAbout}`}>
                                About
                            </div>
                            <div className={`mt-4 ${styles.description}`}>
                                {description}
                            </div>
                            <div className={`mt-4 ${styles.textdate}`}>
                                <IonIcon icon={calendar} className={styles.iconDate}></IonIcon>Work date: {date}
                            </div>

                            {link.linkto !== '' && (
                                <div className={`mt-2 ${styles.textdate}`}>
                                    <IonIcon icon={linkOutline} className={styles.iconDate}></IonIcon>
                                    <a href={link.linkto} target="_blank" rel="noopener noreferrer">
                                        Link to repository/web page
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Segunda columna */}
                    <motion.div className="flex-1 sm:ml-2 mb-5">
                        <div className={styles.containerTec}>
                            <div className={`text-3xl ${styles.textAbout}`}>
                                Technologies <span className="font-bold">Used</span>
                            </div>
                            <motion.div className="grid grid-cols-4 gap-4 mt-5"
                                variants={container}               
                                initial="hidden"
                                whileInView="visible">
                                {logos.map((logo, index) => (
                                    <motion.div
                                        variants={item} key={index} className="col-span-1 flex flex-col items-center justify-center">
                                        <img
                                            className={`${styles.imageLogo}`}
                                            src={logo}
                                            alt={`Technology Logo ${index + 1}`}
                                        />
                                        <div className={styles.texTec}>
                                            {tecnologies[index]}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <div className={`flex flex-col sm:flex-row gap-4 ${styles.mainContainer}`}>
                    <div className={`flex-1 sm:mr-2`}>
                        <div className="flex items-center justify-center ">
                            <div className={`text-4xl font-bold ${styles.textAbout}`}>Images</div>
                        </div>
                    </div>



                </div>
                <div className="flex flex-wrap justify-center mb-5">
                    {mockups.map((img, index) => (
                        <motion.div key={index} className={` ${styles.imageContainer}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                            <img
                                className={`${project.type === 'web' ? styles.imageWeb : styles.imageApp}`}
                                src={img}
                                alt={`Image ${index + 1}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div >
        </>
    );
}

export default Project;
