import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import UserProfile from './UserProfile';

interface IAuth {
  props: any;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const Menu: React.FC<IAuth> = (
  { props, setIsSignedIn }
) => {
  return (
    <DrawerContentScrollView>
      <UserProfile setIsSignedIn={setIsSignedIn} />
      <DrawerItemList  {...props} />
    </DrawerContentScrollView>
  )
}

export default Menu;
