import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AdminCountainer from '@components/Administration/AdminContainer';
import Login from '@components/Login';
import Client from '@components/Client/ClientContainer';
import Loading from '@components/Loading';
import {NotificationProvider} from '@components/contexts/NotificationProvider';
import EncryptedStorage from 'react-native-encrypted-storage';

const Stack = createStackNavigator();

const Auth = ({
  loading,
  isAuth,
  message,
  isActive,
  isAdmin,
  loginRequest,
  currentUser,
  profilePic,
  checkSessionRequest,
}) => {
  useEffect(() => {
    (async () => {
      try {
        checkSessionRequest();
      } catch (error) {
        console.console(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Stack.Screen name="Login">
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
          <Stack.Screen name="AdminCountainer">
            {props => (
              <NotificationProvider>
                <AdminCountainer
                  {...props}
                  profilePic={profilePic}
                  currentUser={currentUser}
                />
              </NotificationProvider>
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Client">
            {props => (
              <NotificationProvider>
                <Client
                  {...props}
                  profilePic={profilePic}
                  currentUser={currentUser}
                />
              </NotificationProvider>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
