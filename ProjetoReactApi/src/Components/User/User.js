import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './User.module.css';
import Cadastro from './Cadastro';
import user from '../../Assets/face.png';
import Editar from './Editar';
import Listar from './Listar';

const User = () => {
  const username = localStorage.getItem('@welcome-app/email');

  if (username !== null) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="editar" element={<Editar />} />
          <Route path="listar" element={<Listar />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="animeLeft">
        <div className={styles.user}>
          <img src={user} className={styles.imgUser} />
          <h1>Não há nenhum usuario logado, por favor, faça o login!</h1>
        </div>
      </div>
    );
  }
};

export default User;
