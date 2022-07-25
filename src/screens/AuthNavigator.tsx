import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IUserProfile } from 'components/UserProfile';
import Auth from './Auth';
import TaskNavigator from './TaskNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC<any> = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<IUserProfile>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn && userProfile
        ? <Stack.Screen name='TaskNavigator'>
            {() =>
              <TaskNavigator
                setIsSignedIn={setIsSignedIn}
                userProfile={userProfile}
              />
            }
        </Stack.Screen>
        : <Stack.Screen name='Auth'>
            {() =>
              <Auth
                setIsSignedIn={setIsSignedIn}
                setUserProfile={setUserProfile}
              />
            }
        </Stack.Screen>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AuthNavigator;
