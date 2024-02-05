
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import WebFont from 'webfontloader';

const Header = () => {

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
    <header className="text-white pl-10 pr-10 pt-4 pb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LR</h1>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <Link to="/" className={styles.link}>HOME</Link>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;