import React from 'react';
import { SafeAreaView } from 'react-native';
import 'services/requestInterceptor';
import style from 'styles/app';
import LoaderContext, { useLoader } from 'contexts/LoaderContext';
import Loader from 'components/Loader';
import AuthNavigator from 'screens/AuthNavigator';

const App = () => {
  return (
    <LoaderContext.Provider value={useLoader()}>
      <SafeAreaView style={style.container}>
        <Loader />
        <AuthNavigator />
      </SafeAreaView>
    </LoaderContext.Provider>
  );
};

export default App;
