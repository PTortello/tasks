import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import isSignedContext from 'contexts/isSignedContext';
import Auth from './Auth';
import TaskNavigator from './TaskNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC<any> = () => {
  const { isSigned } = useContext(isSignedContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSigned
        ? <Stack.Screen name='TaskNavigator'>
            {() =>
              <TaskNavigator />
            }
        </Stack.Screen>
        : <Stack.Screen name='Auth'>
            {() =>
              <Auth />
            }
        </Stack.Screen>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AuthNavigator;
