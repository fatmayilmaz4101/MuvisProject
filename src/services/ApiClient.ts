import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:4000';
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
export default apiClient;
