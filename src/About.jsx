import React from 'react';
import styles from './css/about.module.css';

const About = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.diagram}>
            <div className={styles.block1}>
              <span className={styles.block__title}>30</span>
              <span>Далеко-далеко, за словесными.</span>
            </div>
            <div className={styles.block2}>
              <span className={styles.block__title2}>30</span>
              <span>Далеко-далеко, за словесными.</span>
            </div>
            <div className={styles.block3}>
              <span className={styles.block__title}>30</span>
              <span>Далеко-далеко, за словесными.</span>
            </div>
        </div>
        <div className={styles.text}>
        <div className={styles.text_title}>
          <i class="fa-solid fa-rocket"></i><h1>Наша работа</h1><i class="fa-solid fa-rocket"></i>
        </div>

            <p>Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Использовало журчит вопроса всеми напоивший знаках рыбного?
            Выйти алфавит коварных над, залетают мир себя заглавных точках за заманивший великий что имени щеке текстами, предложения, большой правилами вершину первую реторически</p>

            <button>Начать сотрудничество</button>
        </div>
    </div>
    </>
  );
};

export default About;
