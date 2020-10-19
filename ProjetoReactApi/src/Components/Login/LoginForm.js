import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';
import user from '../../Assets/user.svg';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UseContext);

  function handleSubmit(event) {
    event.preventDefault();

    userLogin(email.value, password.value);
  }

  function handleLogout() {
    localStorage.removeItem('@welcome-app/email');
    window.location.reload();
  }

  const username = localStorage.getItem('@welcome-app/email');
  if (username !== null) {
    return (
      <div style={styles.container}>
        <div className={styles.LoginImg}>
          <img src={user} className={styles.imgLogin} />
        </div>
        <h1>Bem vindo {username}</h1>
        <div className={styles.logFeito}>
          <Link to="/user" className={stylesBtn.button}>
            Produtos
          </Link>
          <button onClick={handleLogout} className={stylesBtn.button}>
            Logout
          </button>
        </div>
      </div>
    );
  }
  return (
    <section className="animeLeft">
      {' '}
      <div className={styles.LoginImg}>
        <img src={user} className={styles.imgLogin} />
        <h1 className="title">Login</h1>{' '}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Email" {...email} />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          {...password}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <div className={styles.cadastro}>
        <p>
          Ainda não possui conta?{' '}
          <Link className={stylesBtn.button} to="/login/criar">
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
