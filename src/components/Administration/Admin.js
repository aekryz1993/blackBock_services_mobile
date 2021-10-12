/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {io} from 'socket.io-client';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from '@components/Loading';
import CustomDrawerItems from '@components/CustomDrawerItems';
import UsersContainer from './users/UsersContainer';
import CommandsContainer from './Commands/CommandsContainer';
import {API_HOSTA} from '@env';
import {NotificationContext} from '@components/contexts/NotificationProvider';
import {fetchNotificationCount} from '@apis/users';
import NotificationScreen from '@components/NotificationScreen';
import AddUserContainer from './users/addUser/AddUserContainer';
import UserContainer from './users/user/UserContainer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Users = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="UsersScreen" component={UsersContainer} />
    <Stack.Screen name="AddUserScreen" component={AddUserContainer} />
    <Stack.Screen name="UserScreen" component={UserContainer} />
  </Stack.Navigator>
);

const DrawerScreens = ({logout, currentUser, profilePic}) => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: '#222',
    }}
    drawerPosition="right"
    drawerType={'back'}
    drawerContent={props => {
      return (
        <CustomDrawerItems
          {...props}
          logout={logout}
          currentUser={currentUser}
          profilePic={profilePic}
        />
      );
    }}>
    <Drawer.Screen name="Users" component={Users} />
    <Drawer.Screen name="Commands" component={CommandsContainer} />
  </Drawer.Navigator>
);

const Admin = ({
  loading,
  logoutrequest,
  currentUser,
  profilePic,
  fetchUsersFinished,
}) => {
  const [notificationStat, notificationDispatch] =
    useContext(NotificationContext);

  useEffect(() => {
    try {
      const socket = io(`${API_HOSTA}/orderCommands`);
      socket.on('connect', () => {
        console.log(notificationStat);
        socket.on('send_command_order', (notifications, notificationCount) => {
          notificationDispatch({
            type: 'ADD',
            payload: {notifications, notificationCount},
          });
        });
      });
      return () => socket.disconnect();
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    (async () => {
      try {
        await fetchNotificationCount(notificationDispatch);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    fetchUsersFinished();
    logoutrequest();
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerScreens">
        {props => (
          <DrawerScreens
            {...props}
            logout={logout}
            currentUser={currentUser}
            profilePic={profilePic}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{headerShown: true, title: 'Notifications'}}
      />
    </Stack.Navigator>
  );
};

export default Admin;
