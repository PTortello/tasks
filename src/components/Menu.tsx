import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { USERDATA } from 'utils/constants';
import { removeLocalData } from 'utils/localData';
import { labelStyle } from 'styles/menu';
import UserProfile from './UserProfile';

interface IAuth {
  props: any;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const Menu: React.FC<IAuth> = (
  { props, setIsSignedIn }
) => {
  const logout = () => {
    removeLocalData(USERDATA);
    setIsSignedIn(false);
  }

  return (
    <DrawerContentScrollView>
      <UserProfile />
      <DrawerItemList  {...props} />
      <DrawerItem
        label={'Sair'}
        labelStyle={labelStyle}
        onPress={logout}
      />
    </DrawerContentScrollView>
  )
}

export default Menu;
