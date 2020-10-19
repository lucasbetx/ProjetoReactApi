import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'https://desafionodegx2.herokuapp.com',
});

export default Api;
