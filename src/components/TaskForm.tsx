import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import style from 'styles/form';
import { INewTask } from './AddTask';
import DatePicker from './DatePicker';
import FormButtons from './FormButtons';

interface ITaskForm {
  task: INewTask;
  closeModal: () => void;
  saveTask: () => void;
  setTask: (task: INewTask) => void;
}

const TaskForm: React.FC<ITaskForm> = (
  { task, closeModal, saveTask, setTask }
) => {
  const [text, setText] = useState<string>(task.description);
  const [date, setDate] = useState<Date>(task.estimateAt);

  useEffect(() => {
    const newTask = task;
    newTask.description = text;
    setTask(newTask);
  }, [text])
  
  useEffect(() => {
    const newTask = task;
    newTask.estimateAt = date;
    setTask(newTask);
  }, [date])

  return (
    <View style={style.container}>
      <Text style={style.header}>Nova Tarefa</Text>
      <TextInput
        style={style.input}
        placeholder='Descrição da Tarefa...'
        value={text}
        onChangeText={setText}
      />
      <DatePicker value={date} onChangeDate={setDate} />
      <FormButtons closeModal={closeModal} saveTask={saveTask} />
    </View>
  )
}

export default TaskForm;
