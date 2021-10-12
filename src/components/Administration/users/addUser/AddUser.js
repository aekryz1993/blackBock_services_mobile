import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Permissions from './Permissions';
import UserInfo from './UserInfo';

const Stack = createStackNavigator();

const AddUser = ({
  message,
  success,
  addUserRequest,
  addUserFinished,
  navigation,
}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <Stack.Screen name="UserInfoScreen">
      {props => (
        <UserInfo
          {...props}
          message={message}
          addUserFinished={addUserFinished}
          navigation={navigation}
          success={success}
        />
      )}
    </Stack.Screen>
    <Stack.Screen name="PermissionsScreen">
      {props => (
        <Permissions
          {...props}
          addUserRequest={addUserRequest}
          success={success}
        />
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default AddUser;
