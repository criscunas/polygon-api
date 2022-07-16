import axios from 'axios';
require('dotenv').config()

const instance = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
});

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;

export default instance


