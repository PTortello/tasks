import React from 'react';
import { View } from 'react-native';
import style from 'styles/formButtons';
import Button from './Button';

interface IFormButtons {
  closeModal: () => void;
  saveTask: () => void;
}

const FormButtons: React.FC<IFormButtons> = (
  { closeModal, saveTask }
) => {
  return (
    <View style={style.buttons}>
      <Button label='Cancelar' onPress={closeModal} />
      <Button label='Salvar' onPress={saveTask} />
    </View>
  )
}

export default FormButtons;
