import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Cadastro.module.css';
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext';
import cadastro from '../../Assets/produtos.png';
import lixo from '../../Assets/lixo.png';
import list from '../../Assets/list.png';
import edit from '../../Assets/edit.png';

const Cadastro = () => {
  const { createProduct } = React.useContext(UseContext);

  const name = useForm();
  const descricao = useForm();
  const logo = useForm();
  const manual = useForm();

  const navigate = useNavigate();

  function handleSubmitCadastro(event) {
    event.preventDefault();
    createProduct(name.value, descricao.value, logo.value, manual.value);
  }

  return (
    <section className={styles.cadast}>
      <div className={styles.menu}>
        <img
          src={list}
          class={styles.icoIcoProd}
          onClick={() => navigate('/user/listar')}
        />
        <img
          src={edit}
          class={styles.icoIcoProd}
          onClick={() => navigate('/user/editar')}
        />
        <img
          src={lixo}
          class={styles.icoIcoProd}
          onClick={() => navigate('/user/deletar')}
        />
      </div>
      <div className={styles.titleCadastro}>
        <div className={styles.alignProds}>
          <img src={cadastro} className={styles.imgLogin} />
        </div>
        <h1>Cadastrar Produto</h1>
      </div>
      <div className={styles.form}>
        <form className="animeLeft" onSubmit={handleSubmitCadastro}>
          <Input placeholder="Nome" type="text" name="name" {...name} />
          <Input
            placeholder="Descrição"
            type="text"
            name="descricao"
            className={styles.input}
            {...descricao}
          />
          <Input label="Logo" type="file" name="logo" {...logo} />
          <Input label="Manual" type="file" name="manual" {...manual} />

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
