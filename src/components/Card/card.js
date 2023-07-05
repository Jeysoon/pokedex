// import React from 'react';
// import styles from './card.module.css'; // Corrected CSS file extension

// function Card({ title, content }) {
//   return (
//     <div className={styles.card}>
//       <h3 className={styles['card-title']}>{title}</h3>
//       <p className={styles['card-content']}>{content}</p>
//     </div>
//   );
// }

// export default Card;
import React from 'react';
import styles from './card.module.css';

function Card({ title, content, imageUrl }) {
  return (
    <div className={styles.card}>
      <h3 className={styles['card-title']}>{title}</h3>
      <img src={imageUrl} alt={title} className={styles['card-image']} />
      <p className={styles['card-content']}>{content}</p>
    </div>
  );
}

export default Card;


