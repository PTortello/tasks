import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { USERDATA } from 'utils/constants';
import { removeLocalData } from 'utils/localData';
import style from 'styles/logout';
import { IAuthForm } from 'components/AuthForm';

const Logout: React.FC<IAuthForm> = (
  { setIsSignedIn }
) => {
  const logout = () => {
    removeLocalData(USERDATA);
    setIsSignedIn(false);
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
