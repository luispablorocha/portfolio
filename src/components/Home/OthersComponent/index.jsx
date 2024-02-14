import "./other.scss"
import { motion } from "framer-motion";
import dataLanguajes from '../../../data/technologies';
import ModalImagen from "../../ModalComponet";
import { useState } from "react";
import { IonIcon } from '@ionic/react';
import {
    logoFacebook
} from 'ionicons/icons';

import certificateNet from '../../../assets/images/certificates/networks-cerf.jpg';
import certificateSec from '../../../assets/images/certificates/security.jpeg';
import certificateSec2 from '../../../assets/images/certificates/security-2.jpeg';
import certificateDB from '../../../assets/images/certificates/Poster-DB.jpg';
import imgCN from '../../../assets/images/more/networks.jpg';
import imgDB from '../../../assets/images/more/data.jpg';
import imgSec from '../../../assets/images/more/security.jpg';

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-220%',
        transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 10,
        }
    }
}

const Other = () => {

    const [modalAbierto, setModalAbierto] = useState(false);
    const [imagenUrl, setImagenUrl] = useState('');

    const abrirModal = (url) => {
        setImagenUrl(url);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setImagenUrl(' ');
        setModalAbierto(false);
    };

    return (
        <>
            <div className="text-morethan container">
                <div className="text-color-more container">
                    More
                </div>
                than Programming...
            </div>
            <div className="container container-more">
                <div className="row">
                    <div className="col-lg-9 col-md-12 mb-4 pr-4">
                        <div className="title-more">
                            COMPUTER NETWORKS
                        </div>

                        <div className="subtitle-more">
                            Routing and Switching
                        </div>
                        <div className="description-more">
                            <p>
                                -  Designing and implementing LAN and WAN networks.
                            </p>
                            <p>
                                - Configuring and managing network devices, including routers, switches.
                            </p>
                            <p>
                                - Network protocols such as TCP/IP, DNS, DHCP and VLANs.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 container-image-net">
                        <img src={imgCN} className="image-more"></img>
                        * Image by
                        <a className="link-image" href="https://pixabay.com/es/users/jarmoluk-143740/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2784907">
                            Michal Jarmoluk</a> on
                        <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2784907">Pixabay</a>
                    </div>
                </div>
                <div className="mt-2">
                    <button onClick={() => abrirModal(certificateNet)} class="py-2 px-4  boton-seeRec">
                        See Certificate
                    </button>
                </div>
            </div>
            <div className="container container-more">
                <div className="row">
                    <div className="col-lg-9 col-md-12  ">
                        <div className="title-more">
                            DATABASES
                        </div>

                        <div className="subtitle-more">
                            Databases administration
                        </div>
                        <div className="description-more">
                            <p>- Installation and configuration of database management systems (DBMS) such as MySQL, PostgreSQL.</p>
                            <p>- Creating and maintaining database schemas.</p>
                            <p>- Implementing access controls and user permissions to protect sensitive data.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4 pr-4 container-image-net">
                        <img src={imgDB} className="image-more"></img>
                        * Image by
                        <a href="https://unsplash.com/es/@casparrubin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Caspar Rubin</a> on <a href="https://unsplash.com/es/fotos/macbook-pro-con-imagenes-de-codigos-de-idioma-de-la-computadora-fPkvU7RDmCo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                            Unsplash
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <button onClick={() => abrirModal(certificateDB)} class="py-2 px-4  boton-seeRec">
                        See a Project
                    </button>
                </div>

            </div>
            <div className="container container-more">
                <div className="row">
                    <div className="col-lg-9 col-md-12 mb-4 pr-4">
                        <div className="title-more">
                            CYBERSECURITY
                        </div>

                        <div className="subtitle-more">
                            Cybersecurity Club - Page:
                            <a href="https://www.facebook.com/ClubCiberseguridadUASLP?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                <IonIcon icon={logoFacebook} className="logoFace" />
                            </a>
                        </div>
                        <div className="description-more">
                            <p>
                                - During my time at university,
                                I established a cybersecurity club with fellow students
                                and remained involved for almost two years.
                            </p>
                            <p>
                                - Developing educational materials such as infographics and guides on cybersecurity best practices.
                            </p>
                            <p>
                                - Collaborating with professors to provide insights and practical knowledge.
                            </p>
                            <p>
                                - Promoting a culture of security awareness and responsible digital behavior within the university community.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 container-image-net">
                        <img src={imgSec} className="image-more"></img>
                        * Image by
                        <a href="https://pixabay.com/es/users/thedigitalway-3008341/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1591018">
                            Kris
                        </a> on
                        <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1591018">Pixabay</a></div>
                </div>
                <div className="mt-2">
                    <button onClick={() => abrirModal(certificateSec)} class="py-2 px-4  boton-seeRec">
                        See Recognition
                    </button>
                    <button onClick={() => abrirModal(certificateSec2)} class="py-2 px-4 ml-4  boton-seeRec">
                        See Certificate
                    </button>
                </div>
            </div>
            <ModalImagen isOpen={modalAbierto} onClose={cerrarModal} imageUrl={imagenUrl} />
        </>
    )
}

export default Other;