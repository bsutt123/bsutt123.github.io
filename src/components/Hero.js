import React, {Component} from 'react';
import styles from 'Styles/modules/hero.module.css'


import engineer from '../img/engineer.jpg';
import webDev from '../img/dev-typing.jpg';

class Hero extends Component {
    render() {
        return (
            <div className={styles.hero}>
                <img className={styles.heroImgTop} src={engineer} alt="engineering" />
                <img className={`${styles.heroImg}`} src={webDev} alt="computer" />
                <div className={styles.heroTitle}>
                    <h1 className={styles.headingPrimary} >Brady Sutton</h1>
                    <h3 className={styles.headingSecondary} >
                        <span className={styles.fadeIn}> Former Mechanical engineer</span> ... 
                        <span className={styles.fadeOut}> turned software developer </span>
                    </h3>
                </div>
            </div>
        )
    }
}

export default Hero;
