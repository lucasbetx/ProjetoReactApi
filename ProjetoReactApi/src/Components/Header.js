import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.jpg';
import prod from '../Assets/produtos.png';
import logout from '../Assets/logout.png';

const Header = () => {
  function handleLogout() {
    localStorage.removeItem('@welcome-app/email');
    window.location.reload();
  }

  const username = localStorage.getItem('@welcome-app/email');
  if (username !== null) {
    return (
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <Link to="/" className={styles.home}>
            &nbsp; Home
          </Link>
          <img src={Logo} className={styles.LogoPosLogin} alt="Gx2" />
          <p className={styles.login}>
            {' '}
            &nbsp; &nbsp;&nbsp;
            <Link to="/user" className={styles.icoProd}>
              <img src={prod} />
            </Link>{' '}
            <button onClick={handleLogout} className={styles.icoLogout}>
              <img src={logout} className={styles.icoLogout} />
            </button>
            &nbsp;&nbsp;&nbsp;{' '}
            <Link to="/login" className={styles.itensLeft}>
              &nbsp;{username}
            </Link>
          </p>
        </nav>
      </header>
    );
  } else {
    return (
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <Link to="/" className={styles.home}>
            &nbsp; Home
          </Link>
          <img src={Logo} className={styles.Logo} alt="Gx2" />
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        </nav>
      </header>
    );
  }
};

export default Header;
