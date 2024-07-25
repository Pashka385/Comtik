import React from 'react';
import styles from './css/MapComponent.module.css';
import Title from './Title'

const MapComponent = () => {
  return (
<div className={styles.box}>
<Title><i className="fa-solid fa-map"></i>Как нас найти<i className="fa-solid fa-map"></i></Title>
<div className={styles.mapcontainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5529.529009038126!2d136.99458525546962!3d50.54719431563205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ee850e7cb5ffde7%3A0x3dc0f612fc4a53a!2sDNS!5e0!3m2!1sru!2sru!4v1721824174803!5m2!1sru!2sru"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
</div>
  );
};

export default MapComponent;
