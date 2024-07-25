import React, { useState } from 'react';
import styles from './css/galary.module.css';
import { CATALOG } from './data';
import Title from './Title';

const Galary = () => {
  const [showMore, setShowMore] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setAnimate(true);
    setTimeout(() => {
      setShowMore(prevShowMore => !prevShowMore);
      setAnimate(false);
    }, 200);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowMore(false); // Reset showMore when filter changes
  };

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
    setSelectedItem(null);
  };


  const filteredCatalog = activeFilter === 'all'
    ? CATALOG
    : activeFilter 
      ? CATALOG.filter(item => item.filtr.split(',').includes(activeFilter))
      : CATALOG;

  const visibleCatalog = showMore ? filteredCatalog : filteredCatalog.slice(0, 4);

  return (
    <div className={styles.container}>
      <Title>
        <i className="fa-solid fa-heart"></i>Наш перечень услуг<i className="fa-solid fa-heart"></i>
      </Title>
      <div className={styles.bar}>
        <span id='first' onClick={() => handleFilterChange('first')}>Все</span>
        <span id='second' onClick={() => handleFilterChange('second')}>Уход</span>
        <span onClick={() => handleFilterChange('plast')}>Пластика</span>
        <span onClick={() => handleFilterChange('botex')}>Ботекс</span>
        <span onClick={() => handleFilterChange('smt')}>Что-то</span>
        <span onClick={() => handleFilterChange('all')}>Короче все</span>
      </div>
      <div className={styles.item__container}>
        {visibleCatalog.map(element => (
          <div key={element.id} className={styles.user_cart}>
            <img src="./assets/illustration.png" alt="#" />
            <h1>{element.name}</h1>
            <button onClick={() => handleClick(element)}>Read</button>
            <p>{element.text}</p>
          </div>
        ))}
      </div>
      <button
        className={`${styles.toggleButton} ${animate ? styles.slideDown : ''}`}
        onClick={handleToggle}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      {isActive && selectedItem && (
        <div className={`${styles.modal} ${isActive ? 'active' : ''}`}>
          <div className={styles.modalContent}>
            <div className={styles.modal__title}><h2>{selectedItem.name}</h2></div>
              <div className={styles.elem}>
                <img src={selectedItem.img} alt='img_cart'></img>  
                <p>{selectedItem.text2}</p>
              </div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galary;
