import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import style from 'styles/button';

interface IButton {
  label: string;
  onPress: () => void;
}

const Button: React.FC<IButton> = (
  { label, onPress }
) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button;
