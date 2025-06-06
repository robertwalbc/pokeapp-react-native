import axios from 'axios';
import { POKE_API } from '../../environment';

const instance = axios.create({
  baseURL: POKE_API,
  timeout: 1000,
});

export default instance;