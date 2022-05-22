import defaultAxios from 'axios';
import {API_URL} from '@env';

const axios = defaultAxios.create({
  baseURL: `${API_URL}`,
  headers: {'Content-Type': 'application/json'},
});

export default axios;
