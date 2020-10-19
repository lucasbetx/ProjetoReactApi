import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>
        <strong>Gx2</strong> - Lucas B. Teixeira
      </span>
      <span>
        <strong>© Todos os direitos reservados</strong>
      </span>
    </div>
  );
};

export default Footer;
