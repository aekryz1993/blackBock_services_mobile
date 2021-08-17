/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, View, Text, TextInput} from 'react-native';

const Login = ({loginRequest, message, isAuth, isActive, isAdmin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = ($username, $password, $loginRequest) => {
    $loginRequest($username, $password);
    setUsername('');
    setPassword('');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="أدخل اسم المستخدم أو عنوان البريد الإلكتروني"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="أدخل كلمة المرور"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button
        title="LOGIN"
        onPress={() => login(username, password, loginRequest)}
      />
      {(!isAuth || !isActive) && <Text>{message}</Text>}
    </View>
  );
};

export default Login;
