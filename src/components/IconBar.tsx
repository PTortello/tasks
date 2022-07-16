import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import global from 'styles/global';
import style from 'styles/iconBar';

interface IIconBar {
  showDone: boolean;
  setShowDone: () => void;
}

const IconBar: React.FC<IIconBar> = (
  { showDone, setShowDone }
) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={setShowDone}>
        <Icon
          name={showDone ? 'eye' : 'eye-slash'}
          size={20}
          color={global.colors.secondary}
        />
      </TouchableOpacity>
    </View>
  )
}

export default IconBar;
