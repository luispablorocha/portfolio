import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './expertise.scss';
import styles from './Expertise.module.css';
import WebFont from 'webfontloader';
import { IonIcon } from '@ionic/react';
import {motion} from 'framer-motion';
import {
    phonePortraitOutline, desktopOutline,
    serverOutline, colorFilterOutline,
    book, ticket, musicalNote, headset, chatbubbles,
    airplane, codeSlash, gitBranch, construct, watch, cloudDownloadOutline
} from 'ionicons/icons';
import Header from '../../components/HeaderComponent';
import SkillItem from '../../components/SkillItemComponent';
import JobComponent from '../../components/JobComponent';
import CourseComponent from '../../components/CourseComponent';

import certificateR from '../../assets/images/certificates/cerf-r.jpeg';
import certificateRN from '../../assets/images/certificates/cerf-rn.jpeg';
import certificateNet from '../../assets/images/certificates/networks-cerf.jpg';

import pdfDocDV from '../../assets/documents/luispablorocha-CV.pdf';

import imgUK from '../../assets/images/united-kingdom.png';
import imgFR from '../../assets/images/france.png';
import imgGE from '../../assets/images/germany.png';
import imgSP from '../../assets/images/mexico.png';

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

const textVariantsR = {
    initial: {
        x: 500,
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

import imgHMTL from '../../assets/images/html.png';
import imgJS from '../../assets/images/js.png';
import imgReact from '../../assets/images/react.png';
import imgANgular from '../../assets/images/angular.png';
import imgFlutter from '../../assets/images/flutter.png';
import imgAI from '../../assets/images/adobe-illustrator.png';
import imgPS from '../../assets/images/adobe-photoshop.png';
import imgFigma from '../../assets/images/figma.png';
import imgMS from '../../assets/images/mysql.png';
import imgPost from '../../assets/images/postgresql.png';
import imgSQL from '../../assets/images/sql-server.png';
import imgFB from '../../assets/images/firebase.png';
import imgGIT from '../../assets/images/github.png';




const Expertise = () => {
    const images = [
        { src: imgHMTL, alt: "HTML & CSS" },
        { src: imgJS, alt: "JavaScript" },
        { src: imgReact, alt: "React JS" },
        { src: imgANgular, alt: "Angular" }
    ];

    const imagesApp = [
        { src: imgReact, alt: "React Native" },
        { src: imgFlutter, alt: "Flutter" },
    ];

    const imagesDesign = [
        { src: imgAI, alt: "Illustrator" },
        { src: imgPS, alt: "Photoshop" },
        { src: imgFigma, alt: "Figma" },
    ];

    const imagesDB = [
        { src: imgMS, alt: "MySQL" },
        { src: imgPost, alt: "PostgreSQL" },
        { src: imgSQL, alt: "SQL Server" },
        { src: imgFB, alt: "Firebase" },
    ];

    const imagesVersion = [
        { src: imgGIT, alt: "Github" },

    ];

    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['Motomami'],
                urls: [
                    '/fonts/motomami.ttf',
                ],
            },
            google: {
                families: ['Poppins:700, 500, 100']
            }
        });
    }, []);

    return (
        <>
            <Header></Header>
            <div className={`${styles.Col1Color} `}>
                <div className="flex items-center justify-center mb-2">
                    <div className={`text-4xl font-bold ${styles.titlePage}`}>RESUME
                        <div className={` ${styles.separation} `}></div>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-8">
                <IonIcon icon={cloudDownloadOutline} className={styles.iconSkill}></IonIcon>
                    <a className={styles.linkPDF}
                        href={pdfDocDV}
                        download="luispablorocha-cv.pdf">
                        DOWNLOAD PDF
                    </a>
                </div>
                <motion.div className="mr-5 ml-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4" variants={textVariants}>
                    {/* PRIMERA COLUMNA */}
                    <motion.div className={`pl-4`} variants={textVariants}
                    initial="initial" animate="animate">
                        <div className={styles.subtitleContent}>
                            SKILLS SET

                        </div>
                        <div className={`mb-3`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={desktopOutline} className={styles.iconSkill}></IonIcon>
                                WEB DEVELOPMENT
                            </div>
                            <SkillItem images={images} />
                        </div>
                        <div className={`mb-3`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={phonePortraitOutline} className={styles.iconSkill}></IonIcon>
                                APP DEVELOPMENT
                            </div>
                            <SkillItem images={imagesApp} />
                        </div>
                        <div className={`mb-3`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={serverOutline} className={styles.iconSkill}></IonIcon>
                                DATABASES
                            </div>
                            <SkillItem images={imagesDB} />
                        </div>
                        <div className={`mb-3`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={colorFilterOutline} className={styles.iconSkill}></IonIcon>
                                DESIGN
                            </div>
                            <SkillItem images={imagesDesign} />
                        </div>
                        <div className={`mb-3`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={gitBranch} className={styles.iconSkill}></IonIcon>
                                VERSION CONTROL
                            </div>
                            <SkillItem images={imagesVersion} />
                        </div>
                    </motion.div>
                    {/* SEGUNDA COLUMNA */}
                    <div className="pl-4 ">
                        <div className={`mb-8`}>
                            <div className={styles.subtitleContent}>
                                EXPERIENCE
                            </div>
                            <JobComponent
                                title="ADMIN & COSTUMER SERV."
                                position="Ferreteria Sta. Rita"
                                duties="CFDI 4.0 | Office 365 | Inventory "
                                icon={construct}
                            />
                            <JobComponent
                                title="INVESTIGATION PROJECT"
                                position="Social Service / IoT Bluetooth"
                                duties="Investigation | Pentestig"
                                icon={watch}
                            />
                            <JobComponent
                                title="FRONT-END DEVELOPER"
                                position="Freelancer / Indoor MX"
                                duties="Desing | Coding  "
                                icon={codeSlash}
                            />
                            <div className={styles.textCheck} >
                                * For more, check my portfolio <Link to="/portfolio" >HERE</Link>
                            </div>
                        </div>

                        <div className={`mb-8`}>
                            <div className={styles.subtitleContent}>
                                COURSES AND CERF
                            </div>
                            <CourseComponent
                                title="React Professional Course"
                                hours="10-Hours"
                                date="December 2023 | Online"
                                certificate={certificateR}
                            />
                            <CourseComponent
                                title="React Native Course"
                                hours="4-Hours"
                                date="October 2023 | Online"
                                certificate={certificateRN}
                            />
                            <CourseComponent
                                title="CCNA Routing and Switching: Introduction to Networks CISCO Networking Academy"
                                hours="60-Hours"
                                date="2020 | Facultad de Ingeniería"
                                certificate={certificateNet}
                            />
                            <CourseComponent
                                title="Master in JS Frameworks: Learn Angular and React"
                                hours="10-Hours"
                                date="2020 | Online Udemy"
                                certificate=""
                            />
                        </div>
                    </div>
                    {/* TERCERA COLUMNA */}
                    <motion.div className="pl-4 " variants={textVariantsR}
                    initial="initial" animate="animate">
                        <div className={`${styles.subtitleContent}`}>
                            EDUCATION
                        </div>
                        <div className={styles.subdescription}>
                            Computer Engineer
                        </div>
                        <div className={styles.subdescription}>
                            Universidad Autonoma de San Luis Potosí
                        </div>
                        <div className={styles.subdescription}>
                            Facultad de Ingeniería Aug 2016-Feb 2023
                        </div>
                        {/* ------------- IDIOMAS --------------*/}
                        <div className={`mb-8 mt-4`}>
                            <div className={styles.subtitleContent}>
                                LANGUAGES
                            </div>
                            <div className={styles.containerLanguage}>
                                <div>
                                    <img src={imgUK} className={styles.imageFlag}></img>
                                </div>
                                <div className={styles.textLanguage}>
                                    English
                                </div>
                                <div className={styles.textlevelLanguage}>
                                    B2
                                </div>
                                <div className={styles.textcertificate}>
                                    TOEFL iBT
                                </div>
                            </div>
                            <div className={styles.containerLanguage}>
                                <div>
                                    <img src={imgFR} className={styles.imageFlag}></img>
                                </div>
                                <div className={styles.textLanguage}>
                                    France
                                </div>
                                <div className={styles.textlevelLanguage}>
                                    A2
                                </div>
                                <div className={styles.textcertificate}>

                                </div>
                            </div>
                            <div className={styles.containerLanguage}>
                                <div>
                                    <img src={imgGE} className={styles.imageFlag}></img>
                                </div>
                                <div className={styles.textLanguage}>
                                    German
                                </div>
                                <div className={styles.textlevelLanguage}>
                                    A1
                                </div>
                                <div className={styles.textcertificate}>

                                </div>
                            </div>
                            <div className={styles.containerLanguage}>
                                <div>
                                    <img src={imgSP} className={styles.imageFlag}></img>
                                </div>
                                <div className={styles.textLanguage}>
                                    Spanish
                                </div>
                                <div className={styles.textlevelLanguage}>
                                    Native
                                </div>

                            </div>

                        </div>
                        <div className={`mt-8 ${styles.subtitleContent}`}>
                            <div className={styles.subtitleContent}>
                                HOBBIES AND INTERESTS
                            </div>
                            <div className={`grid grid-cols-4 mt-3`}>
                                <div className={`flex flex-col mb-4`}>
                                    <div className={`${styles.containerImage}`}>
                                        <IonIcon icon={book} className={styles.icon}></IonIcon>
                                    </div>
                                    <div className={`mt-2 ${styles.textHobbies}`}>
                                        Read
                                    </div>
                                </div>
                                <div className={`flex flex-col  mb-4`}>
                                    <div className={`${styles.containerImage}`}>
                                        <IonIcon icon={musicalNote} className={styles.icon}></IonIcon>
                                    </div>
                                    <div className={`mt-2 ${styles.textHobbies}`}>
                                        Concerts
                                    </div>
                                </div>
                                <div className={`flex flex-col mb-4 `}>
                                    <div className={`${styles.containerImage}`}>
                                        <IonIcon icon={ticket} className={styles.icon}></IonIcon>
                                    </div>
                                    <div className={`mt-2 ${styles.textHobbies}`}>
                                        Movies
                                    </div>
                                </div>
                                <div className={`flex flex-col mb-4`}>
                                    <div className={`${styles.containerImage}`}>
                                        <IonIcon icon={headset} className={styles.icon}></IonIcon>
                                    </div>
                                    <div className={`mt-2 ${styles.textHobbies}`}>
                                        Music
                                    </div>
                                </div>
                                <div className={`flex flex-col mb-4`}>
                                    <div className={`${styles.containerImage}`}>
                                        <IonIcon icon={chatbubbles} className={styles.icon}></IonIcon>
                                    </div>
                                    <div className={`mt-2 ${styles.textHobbies}`}>
                                        Languages
                                    </div>
                                </div>
                                <div className={`flex flex-col mb-4`}>
                                    <div className={`${styles.containerImage}`}>
                                        <IonIcon icon={airplane} className={styles.icon}></IonIcon>
                                    </div>
                                    <div className={`mt-2 ${styles.textHobbies}`}>
                                        Traveling
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className='parallax2'>
                <div className="mountains2">
                   
                </div>
                <div className="planets2"></div> 
                <div className="stars2"></div>
            </div>

        </>

    )
}

export default Expertise;