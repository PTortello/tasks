import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from 'styles/addTaskButton';
import global from 'styles/global';

interface IAddTaskButton {
  backgroundColor: string;
  openModal: () => void;
}

const AddTaskButton: React.FC<IAddTaskButton> = (
  { backgroundColor, openModal }
) => {
  return (
    <TouchableOpacity
      style={[style.button, {backgroundColor: backgroundColor}]}
      onPress={openModal}
      activeOpacity={0.7}
    >
      <Icon name='plus' size={20} color={global.colors.secondary} />
    </TouchableOpacity>
  )
}

export default AddTaskButton;
