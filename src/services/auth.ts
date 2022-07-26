import axios from 'axios';
import { showError } from 'utils/alertMessages';
import { SERVER, USERDATA } from 'utils/constants';
import { setLocalData } from 'utils/localData';

interface IAuth {
  email: string;
  password: string;
}

export const signin = async (data: IAuth) => {
  try {
    const res = await axios.post(`${SERVER}/signin`, data);
    await setLocalData(USERDATA, res.data);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}
