import axios from 'axios';
import { SERVER } from 'data/constants';
import { showError, showSuccess } from 'utils/alertMessages';

export interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

export const signup = async (data: IUser) => {
  try {
    await axios.post(`${SERVER}/signup`, data);
    showSuccess('Usuário cadastrado!');
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}
