import React from 'react';
import { SafeAreaView } from 'react-native';
import style from 'styles/app';
import AuthNavigator from 'screens/AuthNavigator';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <AuthNavigator />
    </SafeAreaView>
  );
};

export default App;
