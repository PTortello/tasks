import React from 'react';
import { ImageBackground } from 'react-native';
import backgroundImage from '../../assets/imgs/login.jpg';
import style from 'styles/auth';
import AuthForm from 'components/AuthForm';

const Auth: React.FC<any> = () => {
  return (
    <ImageBackground source={backgroundImage} style={style.background}>
      <AuthForm />
    </ImageBackground>
  )
}

export default React.memo(Auth);
