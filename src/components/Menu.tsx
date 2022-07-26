import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import UserProfile from './UserProfile';

interface IAuth {
  props: any;
}

const Menu: React.FC<IAuth> = ({ props }) => {
  return (
    <DrawerContentScrollView>
      <UserProfile />
      <DrawerItemList  {...props} />
    </DrawerContentScrollView>
  )
}

export default Menu;
