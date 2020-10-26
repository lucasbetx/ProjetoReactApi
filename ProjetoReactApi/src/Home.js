import React from 'react';
import styles from '../src/Home.module.css';
import react from '../src/Assets/react.svg';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="animeLeft">
        <img src={react} className={styles.Applogo} alt="Gx2" />
        <h1 className={styles.title}>Projeto API React - Gx2</h1>
      </div>
    </section>
  );
};

export default Home;
