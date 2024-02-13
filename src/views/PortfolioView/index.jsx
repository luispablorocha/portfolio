import React, { useEffect } from 'react';
import styles from './Portfolio.module.css';
import WebFont from 'webfontloader';
import { } from 'ionicons/icons';
import Header from '../../components/HeaderComponent';
import Card from '../../components/CardComponent';
import dataProjects from '../../data/projects'
import { motion} from 'framer-motion'

const variants = {
    initial: {
        x: 0,
        y: 500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }

    }
}

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
            <div className='ml-8 mr-8'>
                <div className="flex items-center justify-center mb-8">
                    <div className={`text-4xl font-bold ${styles.titlePage}`}>PORTFOLIO
                        <div className={` ${styles.separation} `}></div>
                    </div>
                </div>
                <motion.div className="pr-5 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4"
                 variants={variants}
                 initial="initial" animate="animate">
                {dataProjects.map((project, index) => (
                <Card
                    key={index}
                    id={project.id}
                    type={project.type}
                    title={project.title}
                    description={project.description}
                    technologies={project.tecnologies}
                    date={project.date}
                    image={project.image}
                    icons={project.icons}
                />
            ))}   
                </motion.div>
            </div>



        </>

    )
}

export default Portfolio;