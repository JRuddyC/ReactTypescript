import axios from "axios";
import { resetToken, setAuthToken } from "../store/slices/tokenSlice";
import { resetUser } from "../store/slices/userSlice";
import { store } from "../store";
import { refreshAuthToken } from "../store/thunks/tokenThunk";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'r-token': null
    },
})

api.interceptors.request.use(
    config => {
        const token = store.getState().appReducer.tokenState.accessToken
        config.headers['Authorization'] = token;
        return config
    },
    error => {
        Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => response,
    async error => {
        const { status, config } = error.response
        console.log(error);
        
        if (status === 401 && config.url !== 'refresh') {
            const response = await store.dispatch(refreshAuthToken())
            store.dispatch(setAuthToken(response.payload))
            return Promise.reject(error.response);
        }
        if (status === 401 && config.url === 'refresh') {
            store.dispatch(resetToken())
            store.dispatch(resetUser())
            alert("Session expired")
        }
        return Promise.reject(error.response);
    }
)

export default api