import React from 'react';
import "./footer.scss"
import { IonIcon } from '@ionic/react';
import {
    logoLinkedin, logoGithub
} from 'ionicons/icons';


const Footer = () => {
    return (
        <footer className="footer ext-white p-4 text-center">
            <p>© 2024 LUIS PABLO ROCHA</p>
            <nav className="mt-2 container-nav">
                <a href="#" className=" mx-2 link">
                    <IonIcon icon={logoLinkedin} className="logo logoIN" />LinkedIn
                </a>
                <a href="#" className="mx-2 link">
                    <IonIcon icon={logoGithub} className="logo logoIN" />GitHub
                </a>
            </nav>
        </footer>
    );
};

export default Footer;