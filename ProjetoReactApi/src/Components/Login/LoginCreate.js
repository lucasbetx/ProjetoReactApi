import React from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './LoginCreate.module.css';
import stylesBtn from '../Forms/Button.module.css';
import register from '../../Assets/register.png';

const LoginCreate = () => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userCreate } = React.useContext(UseContext);

  async function handleSubmit(event) {
    event.preventDefault();
    userCreate(name.value, email.value, password.value);
  }

  return (
    <section className="animeLeft">
      <div className={styles.LoginImg}>
        <img src={register} className={styles.imgLogin} />
        <h1 className="title">Cadastre-se</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Usuário" {...name} />
        <Input type="email" name="email" placeholder="Email" {...email} />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          {...password}
        />
        <div className={styles.btn}>
          <Link className={stylesBtn.button} to="/login">
            Voltar
          </Link>{' '}
          <Button className={styles.btn} type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default LoginCreate;
