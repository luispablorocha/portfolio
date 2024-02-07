import React, { useEffect } from 'react';
import "./home.scss"
import styles from './Home.module.css';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderComponent';
import Intro from '../../components/Home/IntroComponent';
import Services from '../../components/Home/ServiceComponent';
import Parallax from '../../components/Home/ParallaxComponent';


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
                <section>
                    <Header></Header>
                    <Intro></Intro>
                </section>

                <section>
                    <Services/>
                </section>

                <section>
                    <Parallax/>
                </section>
            </div>
        </>

    )
}

export default Home;