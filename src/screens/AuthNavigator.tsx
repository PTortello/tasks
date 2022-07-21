import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './Auth';
import TaskNavigator from './TaskNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC<any> = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn
        ? <Stack.Screen name='TaskNavigator'>
          {() => <TaskNavigator setIsSignedIn={setIsSignedIn} />}
        </Stack.Screen>
        : <Stack.Screen name='Auth'>
          {() => <Auth setIsSignedIn={setIsSignedIn} />}
        </Stack.Screen>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AuthNavigator;
