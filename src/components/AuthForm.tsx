import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IUser, signup } from 'services/user';
import { signin } from 'services/auth';
import style from 'styles/authForm';
import AuthInput from './AuthInput';

const initialState: IUser = {
  name: '',
  email: '',
  password: '',
  confirmPass: ''
}

interface IAuthForm {
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const AuthForm: React.FC<IAuthForm> = (
  { setIsSignedIn }
) => {
  const [user, setUser] = useState<IUser>({...initialState});
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const submitForm = async () => {
    if (isNewUser) {
      await signup(user) && setIsNewUser(false);
      setUser({...initialState});
    } else {
      await signin(user) && setIsSignedIn(true);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>
        {isNewUser ? 'Crie sua conta' : 'Login'}
      </Text>
      {isNewUser &&
        <AuthInput
          icon='user'
          placeholder='Nome'
          value={user.name}
          onChangeText={(name) => setUser({...user, name})}
        />
      }
      <AuthInput
        icon='at'
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
      <TouchableOpacity onPress={submitForm}>
        <View style={style.button}>
          <Text style={style.buttonText}>
            {isNewUser ? 'Cadastrar' : 'Entrar'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.button, style.switchButton]}
        onPress={() => setIsNewUser(!isNewUser)}
      >
        <Text style={[style.buttonText, style.switchButtonText]}>
          {isNewUser ? 'Já possui conta?' : 'Criar nova conta'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthForm;
