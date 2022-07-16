import React from 'react';
import { View } from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable
} from 'react-native-gesture-handler';
import style from 'styles/task';
import CheckBox from './CheckBox';
import LeftContent from './SwipeableContentLeft';
import RightContent from './SwipeableContentRight';
import TaskDescription from './TaskDescription';

export interface ITask {
  id: number;
  description: string;
  estimateAt: Date;
  doneAt: Date | null;
  deleteTask?: () => void;
  toggleTask?: () => void;
}

const Task: React.FC<ITask> = (
  { description, doneAt, estimateAt, deleteTask, toggleTask }
) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableOpen={(side) => (side === 'left') && deleteTask!()}
        renderLeftActions={() => <LeftContent />}
        renderRightActions={() => <RightContent deleteTask={deleteTask!} />}
      >
        <View style={style.container}>
          <View style={style.checkContainer}>
            <CheckBox doneAt={doneAt} toggleTask={toggleTask!} />
          </View>
          <TaskDescription
            description={description}
            estimateAt={estimateAt}
            doneAt={doneAt}
          />
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

export default Task;
