import axios from "axios";
import { USERDATA } from 'utils/constants';
import { getLocalData } from 'utils/localData';

axios.interceptors.request.use(
  async (config) => {
    const userData = await getLocalData(USERDATA);
    const token = userData && userData.token || false;
    if (token && config.headers) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
