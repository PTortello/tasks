import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import menuOptions from 'utils/menuOptions';
import global from 'styles/global';
import { labelStyle } from 'styles/menu';
import Menu from 'components/Menu';
import TaskList from './TaskList';

const Drawer = createDrawerNavigator();

interface ITaskNavigator {
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const TaskNavigator: React.FC<ITaskNavigator> = (
  { setIsSignedIn }
) => {
  const screenOptions = {
    headerShown: false,
    drawerLabelStyle: labelStyle,
    drawerActiveTintColor: global.colors.menuLabel
  }

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={screenOptions}
        drawerContent={
          (props) =>
            <Menu props={props} setIsSignedIn={setIsSignedIn} />
        }
      >
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
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default TaskNavigator;
