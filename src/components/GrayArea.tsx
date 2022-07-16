import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import style from 'styles/grayArea';

interface IGrayArea {
  closeModal: () => void;
}

const GrayArea: React.FC<IGrayArea> = (
  { closeModal }
) => {
  return (
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={style.overlay} />
    </TouchableWithoutFeedback>
  )
}

export default GrayArea;
