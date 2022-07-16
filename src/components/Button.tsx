import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import defaultStyle from 'styles/button';

interface IButton {
  activeOpacity?: number;
  label: string;
  style?: any;
  onPress: () => void;
}

const Button: React.FC<IButton> = (
  { activeOpacity, label, style=defaultStyle.button, onPress }
) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <Text style={style}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button;
