import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from 'styles/swipeableContentLeft';

const LeftContent: React.FC<any> = () => {
  return (
    <View style={style.container}>
      <Icon style={style.icon} name='trash' size={30} color='#FFFFFF' />
      <Text style={style.label}>Excluir</Text>
    </View>
  )
}

export default LeftContent;
