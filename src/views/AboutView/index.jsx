import React from 'react';
import styles from './About.module.css';
import './about.scss';
import Header from '../../components/HeaderComponent';
import { IonIcon } from '@ionic/react';
import {
    logoLinkedin, logoGithub
} from 'ionicons/icons';




const About = () => {
    return (
        <>
            <Header></Header>
            <div className={`ml-8 mr-8`}>
                <div className="flex items-center justify-center mb-2">
                    <div className={`text-4xl font-bold ${styles.titlePage}`}>ABOUT ME
                        <div className={` ${styles.separation} `}></div>
                    </div>
                </div>
                <div className={`pr-5 flex flex-col sm:flex-row gap-4`}>
                    {/* Primera columna */}
                    <div className={`flex-1 mb-2 sm:mr-2`}>
                        <div className={"containerAbout"}>
                            <div className="font-bold mt-3 hello">
                                Hello, I'm Luis Pablo Rocha
                            </div>
                            <div className="font-bold mt-3 computer-text">
                                Computer Engineer
                            </div>
                            <div className='flex'>
                                <a href="https://www.linkedin.com/tu-perfil-de-LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={logoLinkedin} className="logo logoIN" />
                                </a>
                                <a href="https://github.com/LuisPabloRocha" target="_blank" rel="noopener noreferrer">
                                    <IonIcon icon={logoGithub} className="logo logoGit" />
                                </a>
                            </div>
                            <div className="text-aboutme">
                                A background in programming, web, software engineering,
                                operating systems, and other areas of technology;
                                with a bachelor's degree focused on projects,
                                I worked in many teams using agile work and development
                                methodologies; building skills such as responsibility,
                                effective communication, problem solving and organization.
                            </div>

                        </div>
                    </div>

                    {/* Segunda columna */}
                    <div className="flex-1 sm:ml-2">
                        <div className="container-design">
                            <div className="font-bold mt-3 question">
                                ¿Designer?
                            </div>
                            <div className="text-design">
                                "While I may not consider myself a designer,
                                my creative approach and eye for detail drive my work in
                                shaping memorable visual experiences. From brainstorming concepts to refining layouts,
                                I enjoy exploring the intersection of design and functionality. By leveraging my knowledge
                                and passion for <strong>creativity</strong>,
                                I strive to deliver visually compelling solutions that resonate with audiences."
                            </div>
                            <div className='flex justify-center container-images'>
                                <div className='mx-auto'>
                                    <img className="image" src='../../src/assets/images/about/tlatoani-logo.png' alt="Logo I created for an app. Made with Illustrator"></img>
                                    <p>*Logo I created for an app. Made with Illustrator*</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={`pr-5 pb-10 flex flex-col sm:flex-row gap-4 ${styles.mainContainer}`}>
                    <div className={`flex-1 mb-2 sm:mr-2`}>
                        <div className="flex items-center justify-center mb-8">




                        </div>
                    </div>


                </div>



            </div >
        </>
    );
}

export default About;
