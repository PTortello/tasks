import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './Auth';
import TaskList from './TaskList';

const Stack = createNativeStackNavigator();

const Navigator: React.FC<any> = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn
        ? <Stack.Screen name='TaskList'>
          {() => <TaskList setIsSignedIn={setIsSignedIn} />}
        </Stack.Screen>
        : <Stack.Screen name='Auth'>
          {() => <Auth setIsSignedIn={setIsSignedIn} />}
        </Stack.Screen>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigator;
