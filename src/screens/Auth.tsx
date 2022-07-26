import React from 'react';
import { ImageBackground } from 'react-native';
import backgroundImage from '../../assets/imgs/login.jpg';
import style from 'styles/auth';
import AuthForm, { IAuthForm } from 'components/AuthForm';

const Auth: React.FC<IAuthForm> = (
  { setIsSignedIn }
) => {
  return (
    <ImageBackground source={backgroundImage} style={style.background}>
      <AuthForm setIsSignedIn={setIsSignedIn} />
    </ImageBackground>
  )
}

export default React.memo(Auth);
