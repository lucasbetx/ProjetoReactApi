import React from 'react';
import styles from '../src/Home.module.css';
import react from '../src/Assets/react.svg';

const Home = () => {
  return (
    <section className={styles.home}>
      <img src={react} className={styles.Applogo} alt="Gx2" />
      <h1>Projeto API React - Gx2</h1>
    </section>
  );
};

export default Home;
