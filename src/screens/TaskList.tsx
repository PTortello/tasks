import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ImageSourcePropType, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import dateFormatter from 'utils/dateFormatter';
import { getLocalData, setLocalData } from 'utils/localData';
import { createTask, delTask, readTasks, updateTask } from 'services/task';
import style from 'styles/taskList';
import Header from 'components/Header';
import Task, { ITask } from 'components/Task';
import AddTaskButton from 'components/AddTaskButton';
import AddTask, { INewTask } from 'components/AddTask';

interface ITaskList {
  backgroundColor: string;
  daysAhead: number;
  image: ImageSourcePropType;
  navigation: DrawerNavigationProp<any>;
  title: string;
}

const TaskList: React.FC<ITaskList> = (
  { backgroundColor, daysAhead, image, navigation, title }
) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showDone, setShowDone] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const syncTaskList = async (check: boolean) => {
    const tasks = check && await readTasks(daysAhead);
    tasks && setTasks(tasks);
    return tasks;
  }

  const addTask = async (task: INewTask) => {
    if (!task.description || !task.description.trim()) {
      Alert.alert('Dados Inválidos', 'Descrição não informada!');
      return null;
    }
    const created = await createTask(task);
    const sync = await syncTaskList(created);
    sync && setShowModal(false);
  }

  const toggleTask = async (id: number) => {
    const updated = await updateTask(id);
    await syncTaskList(updated);
  }

  const deleteTask = async (id: number) => {
    const deleted = await delTask(id);
    await syncTaskList(deleted);
  }

  useEffect(() => {
    const setData = async () => {
      await setLocalData({ showDone: showDone });
    }
    loaded && setData();
  }, [showDone]);

  useEffect(() => {
    const getData = async () => {
      const localData = await getLocalData();
      setShowDone(localData.showDone);
      await syncTaskList(!loaded);
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
            image={image}
            title={title}
            subtitle={dateFormatter()}
            showDone={showDone}
            setShowDone={() => setShowDone(!showDone)}
            openDrawer={() => navigation.openDrawer()}
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
        <AddTaskButton
          backgroundColor={backgroundColor}
          openModal={() => setShowModal(true)}
        />
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
