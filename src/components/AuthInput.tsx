import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from 'styles/authInput';

interface IAuthInput {
  icon: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const AuthInput: React.FC<IAuthInput> = (
  { icon, placeholder, secureTextEntry, value, onChangeText }
) => {
  return (
    <View style={style.container}>
      <Icon name={icon} size={20} style={style.icon} />
      <TextInput
        style={style.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default AuthInput;
