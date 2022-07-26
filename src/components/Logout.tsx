import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import isSignedContext from 'contexts/isSignedContext';
import { USERDATA } from 'utils/constants';
import { removeLocalData } from 'utils/localData';
import style from 'styles/logout';

const Logout: React.FC<any> = () => {
  const { setIsSigned } = useContext(isSignedContext);

  const logout = () => {
    removeLocalData(USERDATA);
    setIsSigned(false);
  }

  return (
    <TouchableOpacity onPress={logout}>
      <View style={style.container}>
        <Icon style={style.icon} name='sign-out' size={30} color='#880000' />
        <Text style={style.label}>Sair</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Logout;
