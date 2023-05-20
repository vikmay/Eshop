import axios from 'axios';

// Create an instance of axios
const instance = axios.create({
  // Set the base URL
  baseURL: 'https://fakestoreapi.com'
});

export default instance;