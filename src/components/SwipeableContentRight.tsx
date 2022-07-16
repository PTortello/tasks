import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from 'styles/swipeableContentRight';

interface IRightContent {
  deleteTask: () => void;
}

const RightContent: React.FC<IRightContent> = (
  { deleteTask }
) => {
  return (
    <TouchableOpacity style={style.button} onPress={deleteTask}>
      <Icon name='trash' size={30} color='#FFFFFF' />
    </TouchableOpacity>
  )
}

export default RightContent;
