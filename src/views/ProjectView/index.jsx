import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Project.module.css';
import Header from '../../components/HeaderComponent';
import dataProjects from '../../data/projects'; // Ajusta la ruta según tu estructura de archivos
import StackGrid from "react-stack-grid";



const Project = () => {
    const { id } = useParams();
    const project = dataProjects.find((project) => project.id === parseInt(id));
    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }
    const { title, description, tecnologies, date, image, icons, logos } = project;
    return (
        <>
            <Header></Header>
            <div className={`ml-8 mr-8`}>
                <div className="flex items-center justify-center mb-8">
                    <div className={`text-4xl font-bold ${styles.titlePage}`}>{title}

                    </div>

                </div>
                <div className="flex items-center justify-center ">
                    <div className={`text-4xl font-bold ${styles.titleDeco}`}>PROJECT

                    </div>

                </div>
                <div className={`pr-5 flex flex-col sm:flex-row gap-4 ${styles.mainContainer}`}>
                    {/* Primera columna */}
                    <div className={`flex-1 mb-2 sm:mr-2`}>
                        <div className={`${styles.blurImage}`}>
                            <img src='../../src/assets/images/code/tlani-code.jpg' alt='About Image' />
                        </div>
                        <div className={styles.containerAbout}>
                            <div className={`text-3xl font-bold mt-3 ${styles.textAbout}`}>
                                ABOUT
                            </div>
                            <div className={`mt-4 ${styles.description}`}>
                                {description}
                            </div>
                        </div>
                    </div>

                    {/* Segunda columna */}
                    <div className="flex-1 sm:ml-2">
                        <div className={styles.containerTec}>
                            <div className={`text-3xl font-bold mt-9 ${styles.textAbout}`}>
                                TECHNOLOGIES
                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-5">
                                {logos.map((logo, index) => (
                                    <div key={index} className="col-span-1 flex flex-col items-center justify-center">

                                        <img
                                            className={`${styles.imageLogo}`}
                                            src={logo}
                                            alt={`Technology Logo ${index + 1}`}
                                        />
                                        <div className={styles.texTec}>
                                            {tecnologies[index]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`pr-5 pb-10 flex flex-col sm:flex-row gap-4 ${styles.mainContainer}`}>
                    <div className={`flex-1 mb-2 sm:mr-2`}>
                        <div className="flex items-center justify-center mb-8">
                            <div className={`text-4xl font-bold ${styles.textAbout}`}>IMAGES

                            </div>
                           
                            

                        </div>
                    </div>


                </div>
                <StackGrid
                                columnWidth={150}
                            >
                                <div className={styles.divStack} key="key1">Item 1</div>
                                <div key="key2">Item 2</div>
                                <div key="key3">Item 3</div>
                            </StackGrid>


            </div >
        </>
    );
}

export default Project;
