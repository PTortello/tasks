import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { MMKVLoader } from "react-native-mmkv-storage";
import todayImage from '../../assets/imgs/today.jpg';
import dateFormatter from 'utils/dateFormatter';
import getLocalData from 'utils/getLocalData';
import { read } from 'services/task';
import style from 'styles/taskList';
import Header from 'components/Header';
import Task, { ITask } from 'components/Task';
import AddTaskButton from 'components/AddTaskButton';
import AddTask, { INewTask } from 'components/AddTask';

const MMKV = new MMKVLoader().initialize();

interface ITaskList {
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const TaskList: React.FC<ITaskList> = (
  { setIsSignedIn }
) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showDone, setShowDone] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const title = 'Hoje';
  const today = dateFormatter();  //remover a variavel se for só subtitle

  const addTask = (task: INewTask) => {
    if (!task.description || !task.description.trim()) {
      Alert.alert('Dados Inválidos', 'Descrição não informada!');
      return null;
    }
    const newTasks = [...tasks];
    newTasks.push({
      id: Math.random(),
      description: task.description,
      estimateAt: task.estimateAt,
      doneAt: null
    });
    setTasks(newTasks);
    setShowModal(false);
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const toggleTask = (id: number) => {
    const newTasks = [...tasks];
    newTasks.forEach(task => {
      if (task.id === id) {
        task.doneAt = task.doneAt ? null : new Date()
      }
    })
    setTasks(newTasks);
  }

  useEffect(() => {
    const setData = async () => {
      const state = {
        showDone: showDone
      }
      await MMKV.setStringAsync('state', JSON.stringify(state));
    }
    loaded && setData();
  }, [showDone]);

  useEffect(() => {
    const getData = async () => {
      const localData = await getLocalData();
      const tasks = await read();
      setShowDone(localData.showDone);
      setTasks(tasks);
      setLoaded(true);
    }
    !loaded && getData();
  }, []);

  return (
    <>
    {loaded &&
      <View style={style.container}>
        <View style={style.header}>
          <Header
            image={todayImage}
            title={title}
            subtitle={today}
            showDone={showDone}
            setShowDone={() => setShowDone(!showDone)}
          />
        </View>
        <View style={style.taskList}>
          <FlatList
            data={tasks}
            renderItem={({item}) => (
              <>
                {item.doneAt && !showDone ? null :
                  <Task {...item}
                    deleteTask={() => deleteTask(item.id)}
                    toggleTask={() => toggleTask(item.id)}
                  />
                }
              </>
            )}
            keyExtractor={task => task.id.toString()}
          />
        </View>
        <AddTaskButton openModal={() => setShowModal(true)} />
        <AddTask
          showModal={showModal}
          addTask={addTask}
          closeModal={() => setShowModal(false)}
        />
      </View>
    }
    </>
  )
}

export default React.memo(TaskList);
