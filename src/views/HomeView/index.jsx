import React, { useEffect } from 'react';
import styles from './Home.module.css';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderComponent';


const Home = () => {
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
            <Header></Header>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${styles.container} `} >
                <div className="p-5">
                    <div className={styles.textHello}>
                        Hello I'm
                    </div>
                    <div className={styles.nombre}>
                        PABLO
                    </div>
                    <div className={styles.textHello}>
                        a Software Developer
                    </div>
                </div>
                <div className="p-3">
                    <div className={`mb-8`}>
                        <div className={styles.subtitle}>
                            ABOUT ME

                        </div>
                        <div className={styles.subdescription}>
                            Computer Engineer
                        </div>
                    </div>
                    <div>
                        <div className={styles.subtitle}>
                            EXPERTISE
                        </div>
                    </div>
                    <div>
                        <div className={styles.subtitle}>
                            MY SOCIAL MEDIA
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Home;