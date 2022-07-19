import React, { useState } from 'react';
import { Modal } from 'react-native';
import TaskForm from 'components/TaskForm';
import GrayArea from 'components/GrayArea';

export interface INewTask {
  description: string;
  estimateAt: Date;
}

interface IAddTask {
  showModal: boolean;
  addTask: (newTask: INewTask) => void;
  closeModal: () => void;
}

const newTask: INewTask = {
  description: '',
  estimateAt: new Date(),
};

const AddTask: React.FC<IAddTask> = (
  { showModal, addTask, closeModal }
) => {
  const [task, setTask] = useState<INewTask>({...newTask});

  const saveTask = (task: INewTask) => {
    addTask(task);
    setTask({...newTask});
  }

  return (
    <Modal
      transparent={true}
      visible={showModal}
      onRequestClose={closeModal}
      animationType='slide'
    >
      <GrayArea closeModal={closeModal} />
      <TaskForm
        task={task}
        closeModal={closeModal}
        saveTask={() => saveTask(task)}
        setTask={setTask}
      />
      <GrayArea closeModal={closeModal} />
    </Modal>
  )
}

export default AddTask;
