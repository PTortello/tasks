import React from 'react';
import { SafeAreaView } from 'react-native';
import style from 'styles/app';
import TaskList from 'screens/TaskList';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <TaskList />
    </SafeAreaView>
  );
};

export default App;
