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
                <a href="https://www.linkedin.com/in/luis-pablo-rocha-1bb935214/" target="_blank" rel="noopener noreferrer" className=" mx-2 link">
                    <IonIcon icon={logoLinkedin} className="logo logoIN" />LinkedIn
                </a>
                <a href="https://github.com/LuisPabloRocha" target="_blank" rel="noopener noreferrer"className="mx-2 link">
                    <IonIcon icon={logoGithub} className="logo logoIN" />GitHub
                </a>
               
            </nav>
            <a className='icon-att'  target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/free-icons/graphic-design" title="graphic design icons">Graphic design icons created by Freepik - Flaticon</a>
        </footer>
    );
};

export default Footer;