import React from 'react';
import { ImageBackground } from 'react-native';
import backgroundImage from '../../assets/imgs/login.jpg';
import style from 'styles/auth';
import AuthForm from 'components/AuthForm';

interface IAuth {
  logout?: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const Auth: React.FC<IAuth> = (
  { logout, setIsSignedIn }
) => {
  logout && setIsSignedIn(false);

  return (
    <ImageBackground source={backgroundImage} style={style.background}>
      <AuthForm setIsSignedIn={setIsSignedIn} />
    </ImageBackground>
  )
}

export default React.memo(Auth);
