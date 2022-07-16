import React from 'react';
import { ImageBackground, ImageSourcePropType } from 'react-native';
import style from 'styles/header';
import IconBar from './IconBar';
import TitleBar from './TitleBar';

interface IHeader {
  image: ImageSourcePropType;
  showDone: boolean;
  subtitle: string;
  title: string;
  setShowDone: () => void;
}

const Header: React.FC<IHeader> = (
  { image, showDone, subtitle, title, setShowDone }
) => {
  return (
    <ImageBackground source={image} style={style.container}>
      <IconBar showDone={showDone} setShowDone={setShowDone} />
      <TitleBar title={title} subtitle={subtitle} />
    </ImageBackground>
  )
}

export default Header;
