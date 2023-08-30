import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7201', // Substitua pela URL do seu backend
});

export default api; 