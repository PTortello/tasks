import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoaderContext from 'contexts/LoaderContext';
import menuOptions from 'utils/menuOptions';
import global from 'styles/global';
import { labelStyle } from 'styles/menu';
import { IUserProfile } from 'components/UserProfile';
import Menu from 'components/Menu';
import TaskList from './TaskList';

const Drawer = createDrawerNavigator();

interface ITaskNavigator {
  userProfile: IUserProfile;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const TaskNavigator: React.FC<ITaskNavigator> = (
  { userProfile, setIsSignedIn }
) => {
  const { showLoader } = useContext(LoaderContext);

  const screenOptions = {
    headerShown: false,
    drawerLabelStyle: labelStyle,
    drawerActiveTintColor: global.colors.menuLabel
  }

  return (
    <>
      {!showLoader &&
        <NavigationContainer independent={true}>
          <Drawer.Navigator
            screenOptions={screenOptions}
            drawerContent={
              (props) =>
                <Menu
                  props={props}
                  setIsSignedIn={setIsSignedIn}
                  userProfile={userProfile}
                />
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
      }
    </>
  )
};

export default TaskNavigator;
