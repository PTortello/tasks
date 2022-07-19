import axios from 'axios';
import moment from 'moment';
import constants from 'utils/constants';
import { showError } from 'utils/alertMessages';

const tasksUrl = `${constants.server}/tasks`;

interface ICreateTask {
 description: string;
 estimateAt: string;
}

export const create = async (data: ICreateTask) => {
  try {
    await axios.post(tasksUrl, data);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}

export const read = async () => {
  try {
    const maxDate = moment().format('YYYY-MM-DD 23:59:59');
    const res = await axios.get(`${tasksUrl}?date=${maxDate}`);
    return res.data;
  } catch (err: any) {
    showError(err.message);
    return false;
  }
}

export const toggle = async () => {
  try {
    await axios.put(tasksUrl);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}

export const del = async () => {
  try {
    await axios.delete(tasksUrl);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}
