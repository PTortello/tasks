import React from 'react';
import { SafeAreaView } from 'react-native';
import style from 'styles/app';
// import TaskList from 'screens/TaskList';
import Auth from 'screens/Auth';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      {/* <TaskList /> */}
      <Auth />
    </SafeAreaView>
  );
};

export default App;
