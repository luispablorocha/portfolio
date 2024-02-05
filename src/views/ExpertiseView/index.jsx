import React, { useEffect } from 'react';
import styles from './Expertise.module.css';
import WebFont from 'webfontloader';
import { IonIcon } from '@ionic/react';
import {
    phonePortraitOutline, desktopOutline,
    serverOutline, colorFilterOutline,
    book, ticket, musicalNote, headset, time, calendar
} from 'ionicons/icons';
import Header from '../../components/HeaderComponent';
import SkillItem from '../../components/SkillItemComponent';
import CourseComponent from '../../components/CourseComponent';


const Expertise = () => {
    const images = [
        { src: "../../src/assets/images/html.png", alt: "HTML and CSS" },
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
        { src: "../../src/assets/images/mysql.png", alt: "Illustrator" },
        { src: "../../src/assets/images/postgresql.png", alt: "Photoshop" },
        { src: "../../src/assets/images/sql-server.png", alt: "Figma" },
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
                families: ['Poppins:500, 100']
            }
        });
    }, []);

    return (
        <>
            <Header></Header>
            <div className="flex items-center justify-center w-screen ">
                <div className={`text-4xl font-bold ${styles.titlePage}`}>RESUME
                    <div className="border-t border-gray-500 border-solid border-4 "></div>
                </div>
            </div>
            <div className='ml-5 mr-5'>
                <div className={`grid gap-4 sm:grid-cols-3`} >
                    {/* PRIMERA COLUMNA */}
                    <div className="pl-5 pt-2 pt-8">
                        <div className={styles.subtitleContent}>
                            SKILLS SET
                        </div>
                        <div className={`mb-5`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={desktopOutline} className={styles.icon}></IonIcon>
                                WEB DEVELOPMENT
                            </div>
                            <SkillItem images={images} />
                        </div>
                        <div className={`mb-5`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={phonePortraitOutline} className={styles.icon}></IonIcon>
                                APP DEVELOPMENT
                            </div>
                            <SkillItem images={imagesApp} />
                        </div>
                        <div className={`mb-5`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={serverOutline} className={styles.icon}></IonIcon>
                                DATABASES
                            </div>
                            <SkillItem images={imagesDB} />
                        </div>
                        <div className={`mb-5`}>
                            <div className={styles.textSkill}>
                                <IonIcon icon={colorFilterOutline} className={styles.icon}></IonIcon>
                                DESIGN
                            </div>
                            <SkillItem images={imagesDesign} />
                        </div>
                    </div>
                    {/* SEGUNDA COLUMNA */}
                    <div className="pl-5 pt-2 pt-8">
                        <div className={`mb-8`}>
                            <div className={styles.subtitleContent}>
                                EXPERIENCE

                            </div>
                            <div className={styles.subdescription}>
                                Computer Engineer
                            </div>
                        </div>
                        <div className={`mb-8`}>
                            <div className={styles.subtitleContent}>
                                LANGUAGES
                            </div>
                            <div className={styles.subdescription}>
                                English
                            </div>
                            <div className={styles.subdescription}>
                                French
                            </div>
                            <div className={styles.subdescription}>
                                German
                            </div>
                            <div className={styles.subdescription}>
                                Spanish (Native)
                            </div>
                        </div>
                        <div className={`mb-8`}>
                            <div className={styles.subtitleContent}>
                                COURSES
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
                            
                        </div>
                    </div>
                    {/* TERCERA COLUMNA */}
                    <div className="p-3 pt-8">
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

                        <div className={`mt-8 ${styles.subtitleContent}`}>
                            <div className={styles.subtitleContent}>
                                HOBBIES AND INTERESTS
                            </div>
                            <div className={`grid grid-cols-4`}>
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
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Expertise;