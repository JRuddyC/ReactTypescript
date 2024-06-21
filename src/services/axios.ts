import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error.response);
    }
)

export default api