import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { USERDATA } from 'utils/constants';
import { getLocalData } from 'utils/localData';
import style from 'styles/userProfile';
import Logout from './Logout';

interface IUserData {
  name: string;
  email: string;
  token: string;
}

const UserProfile: React.FC<any> = () => {
  const [user, setUser] = useState<IUserData>();

  useEffect(() => {
    const getData = async () => {
      const userData = await getLocalData(USERDATA);
      setUser(userData);
    }
    getData();
  }, [])

  return (
    <>
      {user &&
        <View style={style.container}>
          <Text style={[style.title, style.text]}>Tasks</Text>
          <View style={style.profile}>
            <Gravatar
              style={style.avatar}
              options={{
                email: user.email,
                parameters: { "size": "60", "d": "mp" },
                secure: true
              }}
            />
            <View>
              <Text style={[style.name, style.text]}>{user.name}</Text>
              <Text style={[style.email, style.text]}>{user.email}</Text>
            </View>
          </View>
          <Logout />
        </View>
      }
    </>
  )
}

export default UserProfile;
