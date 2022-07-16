import React from 'react';
import { ImageBackground } from 'react-native';
import backgroundImage from '../../assets/imgs/login.jpg';
import style from 'styles/auth';
import AuthForm from 'components/AuthForm';

interface IAuth {
  valueA?: string;
  valueB?: string;
}

const Auth: React.FC<IAuth> = (
  { valueA = null, valueB = null }
) => {
  return (
    <ImageBackground source={backgroundImage} style={style.background}>
      <AuthForm />
    </ImageBackground>
  )
}

export default Auth;
