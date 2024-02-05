import React, { useEffect } from 'react';
import styles from './Portfolio.module.css';
import WebFont from 'webfontloader';
import { IonIcon } from '@ionic/react';
import {
    phonePortraitOutline, desktopOutline,
    serverOutline, colorFilterOutline
} from 'ionicons/icons';
import Header from '../../components/HeaderComponent';
import ProjectComponent from '../../components/ProjectComponent';


const Portfolio = () => {
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
            <div className="flex items-center justify-center w-screen ">
                <div className={`text-4xl font-bold ${styles.titlePage}`}>PORTFOLIO
                    <div className="border-t border-gray-500 border-solid border-4 my-3"></div>
                </div>
            </div>
           
            <div className="grid grid-cols-3 grid-rows-4 gap-4">
                <ProjectComponent></ProjectComponent>
            
                
                
            </div>
        </>

    )
}

export default Portfolio;