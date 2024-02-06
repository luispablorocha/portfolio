import React, { useEffect, useState, } from 'react';
import { Link } from "react-router-dom";
import styles from './Card.module.css';
import WebFont from 'webfontloader';
import { IonIcon } from '@ionic/react';
import {
    calendar
} from 'ionicons/icons';

const Card = ({ id, title, description, tecnologies, date, image, icons }) => {

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

    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        // Ajusta otros estilos según sea necesario
    };

    return (
        <div className={` ${styles.card} ${styles.cardWithBackground}`} style={cardStyle}>
            <div className="flex">
                <div className={styles.card}>
                    <div className={styles.containerimagesTec}>
                        {icons.map((icon, index) => (
                            <img key={index} src={icon} className={styles.imageicon} alt={`Icon ${index + 1}`} />
                        ))}
                    </div>

                    <div className={`flex ${styles.textDate}`}>
                        <IonIcon icon={calendar} className={styles.icon}></IonIcon>
                        <p className={styles.text}>{date}</p>
                    </div>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{title}</h2>
                        <p className={styles.cardBody}>
                            {description}
                        </p>
                        <Link to={`/portfolio/${id}`} className={styles.button}>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;
