import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import loaderContext from 'contexts/loaderContext';
import style from 'styles/loader';

const Loader: React.FC<any> = () => {
  const { showLoader } = useContext(loaderContext);

  return (
    <>
      {showLoader &&
        <View style={style.container}>
          <ActivityIndicator size={'large'} />
        </View>
      }
    </>
  )
}

export default Loader;
