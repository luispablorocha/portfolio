// SkillItem.js
import React from 'react';
import styles from './SkillItem.module.css';
import PropTypes from 'prop-types';


const SkillItem = ({ title, images }) => {
    return (
        <div className='grid grid-cols-5'>
            {images.map((image, index) => (
                <div>
                    <div key={index} className={styles.containerImage}>
                        <img src={image.src} alt={image.alt} className={styles.imageicon} />
                    </div>
                    <div className={styles.textNameTec}>{image.alt}</div>
               </div>
            ))}

        </div>
    );
};

SkillItem.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    })).isRequired,
};

export default SkillItem;
