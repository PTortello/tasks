import axios from 'axios';
import moment from 'moment';
import { SERVER } from 'data/constants';
import { showError } from 'utils/alertMessages';
import { INewTask } from 'components/AddTask';

const tasksUrl = `${SERVER}/tasks`;

export const createTask = async (task: INewTask) => {
  try {
    await axios.post(tasksUrl, task);
  } catch (err: any) {
    showError(err.message);
    return false;
  }
  return true;
}

export const readTasks = async (days: number) => {
  try {
    const maxDate = moment().add({days: days}).format('YYYY-MM-DD 23:59:59');
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
