import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';

interface IAuth {
  props: any;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const Menu: React.FC<IAuth> = (
  { props, setIsSignedIn }
) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList  {...props} />
      <DrawerItem label={'Sair'} onPress={() => setIsSignedIn(false)} />
    </DrawerContentScrollView>
  )
}

export default Menu;
