import axios from "axios";

const API_BASE_URL = 'http://192.168.1.61:4000'
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
})
export default apiClient