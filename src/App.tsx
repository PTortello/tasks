import React from 'react';
import { SafeAreaView } from 'react-native';
import style from 'styles/app';
import Navigator from 'screens/Navigator';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
