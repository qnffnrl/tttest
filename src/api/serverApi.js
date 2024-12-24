import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_HOST + import.meta.env.VITE_APP_API_DEFAULT_PREFIX;
const serverApi = axios.create({
    baseURL: baseURL,
});

export default serverApi;
