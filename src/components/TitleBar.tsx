import React from 'react';
import { Text, View } from 'react-native';
import style from 'styles/titleBar';

interface ITitleBar {
  subtitle: string;
  title: string;
}

const TitleBar: React.FC<ITitleBar> = (
  { subtitle, title }
) => {
  return (
    <View style={style.container}>
      <Text style={[style.text, style.title]}>{title}</Text>
      <Text style={[style.text, style.subtitle]}>{subtitle}</Text>
    </View>
  )
}

export default TitleBar;
