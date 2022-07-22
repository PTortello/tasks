import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { labelStyle } from 'styles/menu';
import UserProfile, { IUserProfile } from './UserProfile';

interface IAuth {
  props: any;
  userProfile: IUserProfile;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const Menu: React.FC<IAuth> = (
  { props, setIsSignedIn, userProfile }
) => {
  const {email, name} = userProfile;

  return (
    <DrawerContentScrollView>
      <UserProfile name={name} email={email} />
      <DrawerItemList  {...props} />
      <DrawerItem
        label={'Sair'}
        labelStyle={labelStyle}
        onPress={() => setIsSignedIn(false)}
      />
    </DrawerContentScrollView>
  )
}

export default Menu;
