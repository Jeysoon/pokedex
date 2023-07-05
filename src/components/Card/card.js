import React from 'react';
import styles from './card.module.css'; // Corrected CSS file extension

function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <h3 className={styles['card-title']}>{title}</h3>
      <p className={styles['card-content']}>{content}</p>
    </div>
  );
}

export default Card;


