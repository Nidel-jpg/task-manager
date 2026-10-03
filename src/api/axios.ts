import axios from 'axios';

//We can create an instance of axios with a base URL to avoid repeating the base URL in every request. This is especially useful if you have multiple API calls in your application.
const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export default api;