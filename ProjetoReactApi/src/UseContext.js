import React from 'react';
import { useNavigate } from 'react-router-dom';
import Api from './Services/Api';
import swal from 'sweetalert';

export const UseContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState('');
  const [listas, setList] = React.useState([]);
  const [idUpdate, setIdUpdate] = React.useState(' ');

  const navigate = useNavigate();

  function userCreate(name, email, password) {
    Api.post('/users', { name, email, password }).then(
      (response) => {
        if (response.data.id) {
          swal({
            text: 'Cadastrado com sucesso',
            icon: 'success',
          });
          navigate('/login');
        } else {
          swal('É necessario preencher os campos', '', 'warning');
        }
      },
      () => {
        swal('Este e-mail ja existe', '', 'warning');
      },
    );
  }

  function getUser(token) {
    Api.get('/sessions', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  function userLogin(email, password) {
    swal({
      text: 'Realizando login',
      button: false,
      closeOnClickOutside: false,
      closeOnEsc: false,
    });
    Api.post('/sessions', { email, password }).then(
      (response) => {
        if (response.data.user.id) {
          sessionStorage.setItem('token', response.data.token);
          getUser(sessionStorage.getItem('token'));
          localStorage.setItem('@welcome-app/email', email);
          document.location.reload(true);
        }
        sessionStorage.getItem('token');
        setData(response.data);
      },
      (err) => {
        console.log(err);
        swal('E-mail ou senha inválido', 'Tente novamente', 'error');
      },
    );
  }

  function createProduct(name, descricao, logo, manual) {
    Api.post(
      '/products',
      { name, descricao, logo, manual },
      {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      },
    ).then(
      (response) => {
        if (response.data.id) {
          swal('Cadastrado com sucesso', '', 'success');
          navigate('user/');
        } else {
          swal(
            'Não foi possível cadastrar.',
            'Já existe um produto com esse nome',
            'error',
          );
        }
      },
      (err) => {
        console.log(err);
        swal(
          'Não foi possível cadastrar.',
          'Já existe um produto com esse nome',
          'error',
        );
      },
    );
  }

  function listarProduct(id) {
    if (id == null) {
      Api.get('/products', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      }).then(
        (response) => {
          if (response.statusText === 'OK') {
            setList(response.data);
          }
        },
        (err) => {
          console.log(err);
          swal('Não existem produtos cadastrados', '', 'error');
        },
      );
    } else {
      swal({
        text: 'Realizando busca',
        button: false,
        closeOnClickOutside: false,
        closeOnEsc: false,
      });
      Api.get(`/products/${id}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      }).then(
        (response) => {
          if (response.statusText === 'OK') {
            swal({
              title: 'Busca feita',
              icon: 'success',
              timer: '3000',
            });
            setList(response.data);
          } else {
            swal('Id não encontrado', 'Informe um id válido', 'error');
          }
        },
        (err) => {
          console.log(err);
          swal('Id não encontrado', 'Informe um id válido', 'error');
        },
      );
    }
  }

  function updateProduct(id, name, descricao, logo, manual) {
    Api.put(
      `/products/${id}`,
      { name, descricao, logo, manual },
      {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      },
    ).then(
      (response) => {
        console.log(response);
        if (response.data.id) {
          swal({
            title: 'Editado com sucesso',
            icon: 'success',
            timer: '3000',
          });
        } else {
          swal('Falha ao atualizar cadastro.', 'Id inválido', 'error');
        }
      },
      (err) => {
        console.log(err);
        swal('Falha ao atualizar cadastro.', 'Id inválido', 'error');
      },
    );
  }

  function getListUpdate(id) {
    setIdUpdate(id);
  }

  function deleteProduct(id) {
    swal({
      title: 'Tem certeza que deseja excluir?',
      text: 'Após excluir não é possível recuperar os dados ',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Api.delete(`/products/${id}`, {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        }).then(
          (response) => {
            if (response.statusText === 'OK') {
              window.location.reload();
            } else {
              swal('Id não encontrado', 'Informe um id válido', 'error');
            }
          },
          (err) => {
            console.log(err);
            swal('Id não encontrado', 'Informe um id válido', 'error');
          },
        );
        swal('Produto excluido com sucesso!!', {
          icon: 'success',
        });
      } else {
        swal('Operação cancelada!');
      }
    });
  }

  return (
    <UseContext.Provider
      value={{
        userLogin,
        userCreate,
        createProduct,
        listarProduct,
        updateProduct,
        deleteProduct,
        data,
        listas,
        getListUpdate,
        idUpdate,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};

export default UseStorage;
