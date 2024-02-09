import React, { useEffect } from 'react';
import "./home.scss"
import styles from './Home.module.css';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderComponent';
import Intro from '../../components/Home/IntroComponent';
import Services from '../../components/Home/ServiceComponent';
import Parallax from '../../components/Home/ParallaxComponent';
import Technologies from '../../components/Home/TechnologiesComponent';
import Contact from '../../components/Home/ContactComponent';


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
            <div>
            <Header></Header>
            
                <section>
                    <Intro></Intro>
                </section>

                <section>
                    <Services/>
                </section>

                <section>
                    <Parallax/>
                </section>

                <section>
                    <Technologies></Technologies>
                </section>

                <section>
                    <Contact></Contact>
                </section>
            </div>
        </>

    )
}

export default Home;