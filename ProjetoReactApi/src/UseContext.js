import React from 'react';
import { useNavigate } from 'react-router-dom';
import Api from './Services/Api';

export const UseContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState('');
  const [listas, setList] = React.useState([]);

  const navigate = useNavigate();

  function userCreate(name, email, password) {
    Api.post('/users', { name, email, password }).then(
      (response) => {
        if (response.data.id) {
          navigate('/login');
        } else {
          alert('Não foi possível cadastrar.');
        }
      },
      () => {
        alert('E-mail já existe');
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
        alert('E-mail ou senha inválido');
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
          console.log(response);
        } else {
          alert('Não foi possível cadastrar.');
        }
      },
      (err) => {
        console.log(err);
        alert(err);
      },
    );
  }

  return (
    <UseContext.Provider
      value={{
        userLogin,
        userCreate,
        createProduct,
        data,
        listas,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};

export default UseStorage;
