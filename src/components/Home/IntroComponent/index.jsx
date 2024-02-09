import "./intro.scss";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { IonIcon } from '@ionic/react';
import {
    logoLinkedin, logoGithub
} from 'ionicons/icons';

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
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <div className='flex'>
                        <a href="https://www.linkedin.com/tu-perfil-de-LinkedIn" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoLinkedin} className="logo1 logoIN1" />
                        </a>
                        <a href="https://github.com/LuisPabloRocha" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoGithub} className="logo1 logoGit1" />
                        </a>
                    </div>
                    {/*<motion.div variants={textVariants} className="buttons">
                        <motion.button className="button-home" variants={textVariants}><Link to="/ruta-de-tu-proyecto">See Latest Work</Link></motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>*/}
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                WEB & APP DEVELOPER
            </div>
            <div className="imageContainer">
                <img src="../../src/assets/images/deco/me-2.png"></img>

            </div>

        </div>
    )
}

export default Intro;