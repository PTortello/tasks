import axios from 'axios';
import moment from 'moment';
import constants from 'utils/constants';
import { showError } from 'utils/alertMessages';
import { INewTask } from 'components/AddTask';

const tasksUrl = `${constants.server}/tasks`;

export const createTask = async (data: INewTask) => {
  try {
    await axios.post(tasksUrl, data);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}

export const readTasks = async () => {
  try {
    const maxDate = moment().format('YYYY-MM-DD 23:59:59');
    const res = await axios.get(`${tasksUrl}?date=${maxDate}`);
    return res.data;
  } catch (err: any) {
    showError(err.message);
    return false;
  }
}

export const updateTask = async (id: number) => {
  try {
    await axios.put(`${tasksUrl}/${id}/toggle`);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}

export const delTask = async (id: number) => {
  try {
    await axios.delete(`${tasksUrl}/${id}`);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}
