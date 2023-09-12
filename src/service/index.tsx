import axios from 'axios';

export const axiosInstance = axios.create({
    timeout: 30 * 1000
});

axiosInstance.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
