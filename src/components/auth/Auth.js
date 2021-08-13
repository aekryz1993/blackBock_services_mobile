import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AdminCountainer from '@components/Administration/AdminContainer';
import Login from '@components/Login';
import Client from '@components/Client/ClientContainer';
import Loading from '@components/Loading';
import TitleHeader from '@components/Client/Header/TitleHeader';

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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
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
          <Stack.Screen name="Client" component={Client} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
