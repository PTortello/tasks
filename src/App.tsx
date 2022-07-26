import React from 'react';
import { SafeAreaView } from 'react-native';
import 'services/requestInterceptor';
import style from 'styles/app';
import isSignedContext, { useIsSigned } from 'contexts/isSignedContext';
import loaderContext, { useLoader } from 'contexts/loaderContext';
import Loader from 'components/Loader';
import AuthNavigator from 'screens/AuthNavigator';

const App = () => {
  return (
    <loaderContext.Provider value={useLoader()}>
      <isSignedContext.Provider value={useIsSigned()}>
        <SafeAreaView style={style.container}>
          <Loader />
          <AuthNavigator />
        </SafeAreaView>
      </isSignedContext.Provider>
    </loaderContext.Provider>
  );
};

export default App;
