import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import LoaderContext from 'contexts/LoaderContext';
import style from 'styles/loader';

const Loader: React.FC<any> = () => {
  const { showLoader } = useContext(LoaderContext);

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
