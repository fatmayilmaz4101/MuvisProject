import axios from "axios";

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
})
export default apiClient