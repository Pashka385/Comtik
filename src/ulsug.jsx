import React from 'react';
import styles from './css/uslug.module.css';
const Uslug = () => {
  return (
    <div className={styles.uslug}>
        <h1 className={styles.uslug__title}>Our services</h1>
        <div className={styles.title__under}></div>
        <p className={styles.uslug__text}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        <div className={styles.uslug__items}>
            <div className={styles.uslug__item}>
                <div className={styles.item__container}>
                    <img src="./assets/Frame.png" alt="#"/>
                    <p className={styles.item__name}>Search doctor</p>
                    <p className={styles.item__text}>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
            </div>
            <div className={styles.uslug__item}>
                <div className={styles.item__container}>
                    <img src="./assets/Frame(1).png" alt="#"/>
                    <p className={styles.item__name}>Search doctor</p>
                    <p className={styles.item__text}>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
            </div>
            <div className={styles.uslug__item}>
                <div className={styles.item__container}>
                    <img src="./assets/Frame(2).png" alt="#"/>
                    <p className={styles.item__name}>Search doctor</p>
                    <p className={styles.item__text}>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Uslug;