import React from 'react';
import { Text, View } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import style from 'styles/userProfile';

export interface IUserProfile {
  email: string;
  name: string;
}

const UserProfile: React.FC<IUserProfile> = (
  { email, name }
) => {
  return (
    <View style={style.container}>
      <Text style={[style.title, style.text]}>Tasks</Text>
      <View style={style.profile}>
        <Gravatar
          style={style.avatar}
          options={{
            email: email,
            parameters: { "size": "60", "d": "mp" },
            secure: true
          }}
        />
        <View>
          <Text style={[style.name, style.text]}>{name}</Text>
          <Text style={[style.email, style.text]}>{email}</Text>
        </View>
      </View>
    </View>
  )
}

export default UserProfile;
