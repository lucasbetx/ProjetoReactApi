import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Editar.module.css';
import list from '../../Assets/list.png';
import edit from '../../Assets/edit.png';
import cadastro from '../../Assets/produtos.png';
import InputNotValidate from '../Forms/InputNotValidate';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import swal from 'sweetalert';

const Editar = () => {
  const { updateProduct, listarProduct, idUpdate } = React.useContext(
    UseContext,
  );

  const id = useForm();
  const name = useForm();
  const descricao = useForm();
  const logo = useForm(false);
  const manual = useForm(false);

  const navigate = useNavigate();

  function handleAtualiza(event) {
    if (!name.value) {
      event.preventDefault();
      swal({ title: 'Preencha os campos', timer: 3000 });
      return;
    }

    event.preventDefault();
    updateProduct(
      idUpdate,
      name.value,
      descricao.value,
      logo.value,
      manual.value,
    );
    listarProduct();
  }

  return (
    <section className={styles.edit}>
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
            <img src={edit} className={styles.imgLogin} />
          </div>
          <h1>Editar Produto</h1>
        </div>

        <div>
          <form className="animeLeft" onSubmit={handleAtualiza}>
            <Input
              label="ID"
              type="number"
              name="id"
              {...id}
              value={`${idUpdate}`}
            />
            <InputNotValidate
              label="Nome"
              type="text"
              name="name"
              autoComplete="off"
              {...name}
            />
            <InputNotValidate
              label="Descrição"
              type="text"
              name="descricao"
              autoComplete="off"
              {...descricao}
            />
            <InputNotValidate label="Logo" type="file" name="logo" {...logo} />
            <InputNotValidate
              label="Manual"
              type="file"
              name="manual"
              {...manual}
            />
            <Button type="submit">Atualizar Cadastro</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Editar;
