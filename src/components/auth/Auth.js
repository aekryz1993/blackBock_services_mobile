import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AdminCountainer from '@components/Administration/AdminContainer';
import Login from '@components/Login';
import User from '@components/User';
import Loading from '@components/Loading';

const Stack = createStackNavigator();

const Auth = ({
  loading,
  isAuth,
  message,
  isActive,
  isAdmin,
  loginRequest,
  loginRequestEnded,
}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuth || !isActive ? (
          <Stack.Screen
            name="Login"
            // options={{
            //   animationTypeForReplace: isSignout ? 'pop' : 'push',
            // }}
          >
            {props => (
              <Login
                loginRequest={loginRequest}
                isAdmin={isAdmin}
                isActive={isActive}
                isAuth={isAuth}
                message={message}
              />
            )}
          </Stack.Screen>
        ) : isAdmin ? (
          <Stack.Screen
            name="AdminCountainer"
            component={AdminCountainer}
            // options={{
            //   animationTypeForReplace: isSignout ? 'pop' : 'push',
            // }}
          />
        ) : (
          <Stack.Screen
            name="User"
            component={User}
            // options={{
            //   animationTypeForReplace: isSignout ? 'pop' : 'push',
            // }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
