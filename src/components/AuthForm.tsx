import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import isSignedContext from 'contexts/isSignedContext';
import loaderContext from 'contexts/loaderContext';
import { IUser, signup } from 'services/user';
import { signin } from 'services/auth';
import { USERDATA } from 'data/constants';
import { getLocalData } from 'utils/localData';
import validateForm from 'utils/validateForm';
import style from 'styles/authForm';
import AuthInput from './AuthInput';

const initialState: IUser = {
  name: '',
  email: '',
  password: '',
  confirmPass: ''
}

const AuthForm: React.FC<any> = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({...initialState});
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const { setIsSigned } = useContext(isSignedContext);
  const { setShowLoader } = useContext(loaderContext);

  const switchForm = () => {
    setUser({...initialState});
    setIsNewUser(!isNewUser);
  }

  const submitForm = async () => {
    setShowLoader(true);
    if (isNewUser) {
      await signup(user) && setIsNewUser(false);
      setUser({...initialState});
      setShowLoader(false);
    } else {
      const signedIn = await signin(user);
      setIsSigned(signedIn);
      setShowLoader(signedIn);
    }
  }

  useEffect(() => {
    setIsValidForm(validateForm(user, isNewUser));
  }, [user, isNewUser])

  useEffect(() => {
    const getData = async () => {
      const userData = await getLocalData(USERDATA);
      const hasToken = userData && userData.token || false;
      setIsSigned(hasToken);
      setShowLoader(hasToken);
      setLoaded(!hasToken);
    }
    !loaded && getData();
  }, []);

  return (
    <>
      {loaded &&
        <View style={style.container}>
          <Text style={style.title}>
            {isNewUser ? 'Crie sua conta' : 'Login'}
          </Text>
          {isNewUser &&
            <AuthInput
              icon='user'
              autoFocus={isNewUser}
              placeholder='Nome'
              value={user.name}
              onChangeText={(name) => setUser({...user, name})}
            />
          }
          <AuthInput
            icon='at'
            autoFocus={!isNewUser}
            placeholder='E-mail'
            value={user.email}
            onChangeText={(email) => setUser({...user, email})}
          />
          <AuthInput
            icon='lock'
            placeholder='Senha'
            value={user.password}
            onChangeText={(password) => setUser({...user, password})}
            secureTextEntry
          />
          {isNewUser &&
            <AuthInput
              icon='asterisk'
              placeholder='Confirmar Senha'
              value={user.confirmPass}
              onChangeText={(confirmPass) => setUser({...user, confirmPass})}
              secureTextEntry
            />
          }
          <TouchableOpacity
            onPress={submitForm}
            disabled={!isValidForm}
          >
            <View style={[style.button, !isValidForm && style.disabled]}>
              <Text style={style.buttonText}>
                {isNewUser ? 'Cadastrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.button, style.switchButton]}
            onPress={switchForm}
          >
            <Text style={[style.buttonText, style.switchButtonText]}>
              {isNewUser ? 'Já possui conta?' : 'Criar nova conta'}
            </Text>
          </TouchableOpacity>
        </View>
      }
    </>
  )
}

export default AuthForm;
