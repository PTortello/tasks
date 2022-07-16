import React from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import dateFormatter from 'utils/dateFormatter';
import style from 'styles/datePicker';
import Button from './Button';

interface IDatePicker {
  value: Date;
  onChangeDate: (date: Date) => void;
}

const DatePicker: React.FC<IDatePicker> = (
  { value, onChangeDate }
) => {
  const label = dateFormatter(value);

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: value,
      onChange: (_: any, date: any) => onChangeDate(date),
    })
  };

  return (
    <Button
      label={label}
      onPress={showDatePicker}
      style={style.button}
      activeOpacity={0.7}
    />
  )
}

export default DatePicker;
