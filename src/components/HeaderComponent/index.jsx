import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import WebFont from 'webfontloader';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white pl-10 pr-10 pt-4 pb-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LR</h1>
        <nav className="lg:flex lg:items-center relative">
          {/* Menú normal para pantallas grandes */}
          <ul className="hidden lg:flex">
            <li className="mr-4">
              <Link to="/" className={styles.link}>HOME</Link>
            </li>
            <li className="mr-4">
              <Link to="/about" className={styles.link}>ABOUT</Link>
            </li>
            <li className="mr-4">
              <Link to="/resume" className={styles.link}>RESUME</Link>
            </li>
            <li className="mr-4">
              <Link to="/portfolio" className={styles.link}>PORTFOLIO</Link>
            </li>
            <li className="mr-4">
              <a href="#" className={styles.link}>CONTACT</a>
            </li>
          </ul>

          {/* Menú desplegable para pantallas pequeñas */}
          <div className="lg:hidden absolute right-5 bg-white-800">
            <button
              onClick={toggleMenu}
              className={`${styles.link} block px-2 py-1 text-white`}
            >
              Menu
            </button>
            {isMenuOpen && (
              <div className="mt-2">
                <Link to="/" className={`${styles.link} block px-2 py-1 text-white`}>HOME</Link>
                <Link to="/about" className={`${styles.link} block px-2 py-1 text-white`}>ABOUT</Link>
                <Link to="/resume" className={`${styles.link} block px-2 py-1 text-white`}>RESUME</Link>
                <Link to="/portfolio" className={`${styles.link} block px-2 py-1 text-white`}>PORTFOLIO</Link>
                <a href="#" className={`${styles.link} block px-2 py-1 text-white`}>CONTACT</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
