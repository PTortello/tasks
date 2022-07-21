import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import menuOptions from 'utils/menuOptions';
import Auth from './Auth';
import TaskList from './TaskList';

const Drawer = createDrawerNavigator();

interface ITaskNavigator {
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const TaskNavigator: React.FC<ITaskNavigator> = (
  { setIsSignedIn }
) => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        {menuOptions.map(
          ({backgroundColor, daysAhead, image, title}, key) => {return (
            <Drawer.Screen name={title} key={key}>
              {({ navigation }) =>
                <TaskList
                  backgroundColor={backgroundColor}
                  daysAhead={daysAhead}
                  image={image}
                  navigation={navigation}
                  title={title}
                />
              }
            </Drawer.Screen>
          )}
        )}
        <Drawer.Screen name='Sair'>
          {() => <Auth logout setIsSignedIn={setIsSignedIn} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default TaskNavigator;
