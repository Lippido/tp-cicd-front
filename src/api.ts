import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cicdback-master-k5ti.onrender.com', // will call relative endpoints like /authors, /books, etc.
});

export default api;
