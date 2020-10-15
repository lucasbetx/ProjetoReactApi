import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul>
          <li>
            <Link className={styles.login} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName={styles.active}
              className={styles.login}
              to="userpost"
            >
              Cadastrar Usuario
            </Link>
          </li>
          <Link
            activeClassName={styles.active}
            className={styles.login}
            to="loginform"
          >
            Login
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
