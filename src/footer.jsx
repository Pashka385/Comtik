import React from 'react';
import styles from './css/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`} id="wave1"></div>
        <div className={`${styles.wave} ${styles.wave2}`} id="wave2"></div>
        <div className={`${styles.wave} ${styles.wave3}`} id="wave3"></div>
        <div className={`${styles.wave} ${styles.wave4}`} id="wave4"></div>
      </div>

    <ul className={styles.social_icon}>
      <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
    </ul>

    <ul className={styles.social_link}>
      <li><a href='#'>Lorem</a></li>
      <li><a href='#'>Lorem</a></li>
      <li><a href='#'>Lorem</a></li>
      <li><a href='#'>Lorem</a></li>
      <li><a href='#'>Lorem</a></li>
    </ul>

    <p>@2024 Loremipsun | All Rights Reserved</p>
    
    </footer>
  );
};

export default Footer;
