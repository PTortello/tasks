import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import dateFormatter from 'utils/dateFormatter';
import style from 'styles/datePicker';

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
    <TouchableOpacity onPress={showDatePicker} activeOpacity={0.7}>
      <View style={style.container}>
        <Icon style={style.icon} name='calendar' size={24} color='#FFFFFF' />
        <Text style={style.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DatePicker;
