import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from 'styles/checkBox';

interface ICheckBox {
  doneAt: Date | null;
  toggleTask: () => void;
}

const CheckBox: React.FC<ICheckBox> = (
  { doneAt, toggleTask }
) => {
  const statusStyle = doneAt ? style.done : style.pending;

  return (
    <TouchableWithoutFeedback onPress={toggleTask}>
      <View style={style.container}>
        <View style={[style.check, statusStyle]}>
          {doneAt && <Icon name='check' size={20} color='#FFFFFF' />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CheckBox;
