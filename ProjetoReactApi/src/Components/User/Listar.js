import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Listar.module.css';
import list from '../../Assets/list.png';
import cadastro from '../../Assets/produtos.png';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import trash from '../../Assets/trash.png';
import edit from '../../Assets/edit.png';

const Listar = () => {
  const id = useForm(false);
  const {
    listarProduct,
    listas,
    deleteProduct,
    getListUpdate,
  } = React.useContext(UseContext);
  const navigate = useNavigate();

  async function handleList(event) {
    event.preventDefault();
    listarProduct(id.value);
    document
      .getElementById('tablePdt')
      .setAttribute('style', 'display: inherit');
  }

  function getIdDelete(id) {
    deleteProduct(id);
  }

  function getList(id) {
    getListUpdate(id);
    navigate('/user/editar');
  }

  return (
    <section className={styles.list}>
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
            <img src={list} className={styles.imgLogin} />
          </div>
          <h1>Listar</h1>
        </div>
        <div>
          <div>
            <div>
              <div className={styles.spaceInput}>
                <h4>Para listar todos clique em buscar</h4>
              </div>
              <form
                className={`animeLeft ${styles.form}`}
                onSubmit={handleList}
              >
                <Input
                  type="number"
                  name="id"
                  {...id}
                  placeholder="Informe o id do produto"
                />
                <Button type="submit">Buscar</Button>
              </form>
            </div>
          </div>

          <div className={styles.tableWrapper} id="tablePdt">
            <table className={styles.flTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Descricao</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              {listas.map((list) => (
                <tbody key={list.id}>
                  <tr>
                    <td>
                      <strong>{list.id}</strong>
                    </td>
                    <td>{list.name}</td>
                    <td>{list.descricao}</td>
                    <td>
                      <Tippy content="Editar Produto">
                        <button
                          className={styles.icoLogout}
                          onClick={() => getList(list.id)}
                        >
                          <img src={edit} className={styles.icoLogout} />
                        </button>
                      </Tippy>
                    </td>
                    <td>
                      <Tippy content="Excluir Produto">
                        <button
                          className={styles.icoLogout}
                          onClick={() => getIdDelete(list.id)}
                        >
                          <img src={trash} className={styles.icoLogout} />
                        </button>
                      </Tippy>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listar;
