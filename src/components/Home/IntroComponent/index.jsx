import "./intro.scss";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { IonIcon } from '@ionic/react';
import {
    logoLinkedin, logoGithub
} from 'ionicons/icons';

import ImageMe from '../../../../src/assets/images/deco/me-2.png'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}


const Intro = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants}
                    initial="initial" animate="animate">
                        <motion.h2 variants={textVariants}>PABLO ROCHA </motion.h2>
                         <div className='flex'>
                        <a href="https://www.linkedin.com/in/luis-pablo-rocha-1bb935214/" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoLinkedin} className="logo1 logoIN1" />
                        </a>
                        <a href="https://github.com/LuisPabloRocha" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoGithub} className="logo1 logoGit1" />
                        </a>
                    </div>
                    <motion.h1 variants={textVariants}>Computer Engineer</motion.h1>
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                WEB & APP DEVELOPER
            </div>
            <div className="imageContainer">
                <img src={ImageMe}></img>
            </div>

        </div>
    )
}

export default Intro;