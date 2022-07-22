import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import global from 'styles/global';
import style from 'styles/iconBar';

interface IIconBar {
  showDone: boolean;
  setShowDone: () => void;
  openDrawer: () => void;
}

const IconBar: React.FC<IIconBar> = (
  { showDone, setShowDone, openDrawer }
) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={openDrawer} style={style.touchable}>
        <Icon
          name={'bars'}
          size={20}
          color={global.colors.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={setShowDone} style={style.touchable}>
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
