import * as React from 'react';
import styles from '../styles/Popup.module.scss';

export const Popup = ({type}) => <div className={styles.overlay}>
  <div className={`${styles.popup} ${styles[type]}`} role="alert">{type === 'success' ? 'Успешно отправлено': 'Просьба повторить запрос позже'}</div>
</div>