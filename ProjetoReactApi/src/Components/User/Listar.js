import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Deletar.module.css';
import lixo from '../../Assets/lixo.png';
import list from '../../Assets/list.png';
import edit from '../../Assets/edit.png';
import produtos from '../../Assets/produtos.png';

const Deletar = () => {
  const id = useForm();
  const { deleteProduct } = React.useContext(UseContext);
  const navigate = useNavigate();

  async function handleDelete(event) {
    event.preventDefault();
    deleteProduct(id.value);
  }

  return (
    <section className={styles.cadast}>
      <div className={styles.menu}>
        <img src={list} class={styles.icoIcoProd} />
        <img src={edit} class={styles.icoIcoProd} />
        <img
          src={produtos}
          onClick={() => navigate('/user/')}
          class={styles.icoIcoProd}
        />
      </div>
      <div className={styles.titleCadastro}>
        <div className={styles.alignProds}>
          <img src={lixo} className={styles.imgLogin} />
        </div>
        <h1>Excluir Produto</h1>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleDelete} className="animeLeft">
          <input
            placeholder="Coloque o ID que deseja deletar"
            type="number"
            name="id"
            {...id}
            className={styles.input}
          />
          <Button type="submit">Excluir</Button>
        </form>
      </div>
    </section>
  );
};

export default Deletar;
