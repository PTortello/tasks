import axios from 'axios';
import { server } from 'utils/constants';
import { showError } from 'utils/alertMessages';

interface IAuth {
  email: string;
  password: string;
}

export const signin = async (data: IAuth) => {
  try {
    const res = await axios.post(`${server}/signin`, data);
    const bearerString = `bearer ${res.data.token}`;
    axios.defaults.headers.common['Authorization'] = bearerString;
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}
