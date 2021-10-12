/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';

const Login = ({loginRequest, message, isAuth, isActive}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = ($username, $password, $loginRequest) => {
    $loginRequest($username, $password);
    setUsername(null);
    setPassword(null);
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="أدخل اسم المستخدم أو عنوان البريد الإلكتروني"
        onChangeText={setUsername}
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
        onChangeText={setPassword}
        value={password}
      />
      <Button
        title="LOGIN"
        onPress={() => login(username, password, loginRequest)}
      />
      {(!isAuth || !isActive) && <Text>{message}</Text>}
    </SafeAreaView>
  );
};

export default Login;
