import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { labelStyle } from 'styles/menu';

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
      <DrawerItem
        label={'Sair'}
        labelStyle={labelStyle}
        onPress={() => setIsSignedIn(false)}
      />
    </DrawerContentScrollView>
  )
}

export default Menu;
