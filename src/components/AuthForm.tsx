import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import style from 'styles/authForm';

interface IAuthForm {
  valueA?: string;
  valueB?: string;
}

const AuthForm: React.FC<IAuthForm> = (
  { valueA = null, valueB = null }
) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [newUser, setNewUser] = useState<boolean>(false);

  const submitForm = () => {
    if (newUser) {
      Alert.alert('Sucesso', 'Criar conta');
    } else {
      Alert.alert('Sucesso', 'Login');
    }
  }

  return (
      <View style={style.container}>
        <Text style={style.title}>
          {newUser ? 'Crie sua conta' : 'Login'}
        </Text>
        {newUser &&
          <TextInput
            style={style.input}
            placeholder='Nome'
            value={name}
            onChangeText={setName}
          />
        }
        <TextInput
          style={style.input}
          placeholder='E-mail'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={style.input}
          placeholder='Senha'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {newUser &&
          <TextInput
            style={style.input}
            placeholder='Confirmar Senha'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        }
        <TouchableOpacity onPress={submitForm}>
          <View style={style.button}>
            <Text style={style.buttonText}>
              {newUser ? 'Cadastrar' : 'Entrar'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, style.switchButton]}
          onPress={() => setNewUser(!newUser)}
        >
          <Text style={[style.buttonText, style.switchButtonText]}>
            {newUser ? 'Já possui conta?' : 'Criar nova conta'}
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default AuthForm;
