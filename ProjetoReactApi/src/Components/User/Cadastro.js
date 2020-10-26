import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Cadastro.module.css';
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext';
import cadastro from '../../Assets/produtos.png';
import list from '../../Assets/list.png';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import swal from 'sweetalert';
import InputNotValidate from '../Forms/InputNotValidate';

const Cadastro = () => {
  const { createProduct } = React.useContext(UseContext);

  const name = useForm();
  const descricao = useForm();
  const logo = useForm();
  const manual = useForm();
  const navigate = useNavigate();

  function handleSubmitCadastro(event) {
    if (!name.value) {
      event.preventDefault();
      swal({ title: 'Preencha os campos', timer: 3000 });
      return;
    }

    event.preventDefault();
    createProduct(name.value, descricao.value, logo.value, manual.value);
  }

  return (
    <section className={styles.cadast}>
      <div className="animeLeft">
        <div className={styles.menu}>
          <Tippy content="Listar Produto">
            <img
              src={list}
              class={styles.icoIcoProd}
              onClick={() => navigate('/user/listar')}
            />
          </Tippy>
          <Tippy content="Cadastro Produto">
            <img
              src={cadastro}
              class={styles.icoIcoProd}
              onClick={() => navigate('/user')}
            />
          </Tippy>
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
            <InputNotValidate
              placeholder="Descrição"
              type="text"
              name="descricao"
              className={styles.input}
              {...descricao}
            />
            <InputNotValidate label="Logo" type="file" name="logo" {...logo} />
            <InputNotValidate
              label="Manual"
              type="file"
              name="manual"
              {...manual}
            />

            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
