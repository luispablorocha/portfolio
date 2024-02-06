import React, { useEffect } from 'react';
import styles from './Expertise.module.css';
import WebFont from 'webfontloader';
import { IonIcon } from '@ionic/react';
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


const Expertise = () => {
    const images = [
        { src: "../../src/assets/images/html.png", alt: "HTML & CSS" },
        { src: "../../src/assets/images/js.png", alt: "JavaScript" },
        { src: "../../src/assets/images/react.png", alt: "React JS" },
        { src: "../../src/assets/images/angular.png", alt: "Angular" }
    ];

    const imagesApp = [
        { src: "../../src/assets/images/react.png", alt: "React Native" },
        { src: "../../src/assets/images/flutter.png", alt: "Flutter" },
    ];

    const imagesDesign = [
        { src: "../../src/assets/images/adobe-illustrator.png", alt: "Illustrator" },
        { src: "../../src/assets/images/adobe-photoshop.png", alt: "Photoshop" },
        { src: "../../src/assets/images/figma.png", alt: "Figma" },
    ];

    const imagesDB = [
        { src: "../../src/assets/images/mysql.png", alt: "MySQL" },
        { src: "../../src/assets/images/postgresql.png", alt: "PostgreSQL" },
        { src: "../../src/assets/images/sql-server.png", alt: "SQL Server" },
        { src: "../../src/assets/images/firebase.png", alt: "Firebase" },
    ];

    const imagesVersion = [
        { src: "../../src/assets/images/github.png", alt: "Github" },

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
            <div className='ml-5 mr-5'>
                <div className="flex items-center justify-center mb-2">
                    <div className={`text-4xl font-bold ${styles.titlePage}`}>RESUME
                        <div className={` ${styles.separation} `}></div>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-8">
                <IonIcon icon={cloudDownloadOutline} className={styles.iconSkill}></IonIcon>
                    <a className={styles.linkPDF}
                        href="../../src/assets/documents/luis-pablo-rocha-cv.pdf"
                        download="luispablorocha-cv.pdf">
                        DOWNLOAD PDF
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">

                    {/* PRIMERA COLUMNA */}
                    <div className="pl-4">
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
                    </div>
                    {/* SEGUNDA COLUMNA */}
                    <div className="pl-4 ">
                        <div className={`mb-8`}>
                            <div className={styles.subtitleContent}>
                                EXPERIENCE
                            </div>
                            <JobComponent
                                title="ADMINISTRATION AND COSTUMER SERVICE"
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
                                * For more info, check my portfolio HERE
                            </div>
                        </div>

                        <div className={`mb-8`}>
                            <div className={styles.subtitleContent}>
                                COURSES AND CERF
                            </div>
                            <CourseComponent
                                title="React Professional Course"
                                hours="10-Hours"
                                date="October 2023 | Online"
                            />
                            <CourseComponent
                                title="React Native Course"
                                hours="4-Hours"
                                date="October 2023 | Online"
                            />
                            <CourseComponent
                                title="React Native Course"
                                hours="4-Hours"
                                date="October 2023 | Online"
                            />
                            <CourseComponent
                                title="CCNA Routing and Switching: Introduction to Networks CISCO Networking Academy"
                                hours="60-Hours"
                                date="2023 | Facultad de Ingeniería"
                            />
                        </div>
                    </div>
                    {/* TERCERA COLUMNA */}
                    <div className="pl-4 ">
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
                                    <img src="../../src/assets/images/united-kingdom.png" className={styles.imageFlag}></img>
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
                                    <img src="../../src/assets/images/france.png" className={styles.imageFlag}></img>
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
                                    <img src="../../src/assets/images/germany.png" className={styles.imageFlag}></img>
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
                                    <img src="../../src/assets/images/mexico.png" className={styles.imageFlag}></img>
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
                    </div>
                </div>
            </div>

        </>

    )
}

export default Expertise;