import React from 'react';
import { Text, View } from 'react-native';
import dateFormatter from 'utils/dateFormatter';
import style from 'styles/taskDescription';

interface ITaskDescription {
  description: string;
  estimateAt: Date;
  doneAt: Date | null;
}

const TaskDescription: React.FC<ITaskDescription> = (
  { description, doneAt, estimateAt }
) => {
  const statusStyle = doneAt && style.done;
  const date = doneAt ? doneAt : estimateAt;

  return (
    <View>
      <Text style={[style.text, style.mainText, statusStyle]}>
        {description}
      </Text>
      <Text style={[style.text, style.subText]}>
        {dateFormatter(date)}
      </Text>
    </View>
  )
}

export default TaskDescription;
