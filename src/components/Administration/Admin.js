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
// import NotificationScreen from '../NotificationScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const Products = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}>
//     <Stack.Group>
//       <Stack.Screen name="CommandsScreen" component={CommandsContainer} />
//       <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
//     </Stack.Group>
//     {/* <Stack.Group screenOptions={{presentation: 'modal'}}>
//       <Stack.Screen name="CommandDetail" component={CommandDetail} />
//     </Stack.Group> */}
//   </Stack.Navigator>
// );
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
    <Drawer.Screen name="Users">
      {props => <UsersContainer {...props} />}
    </Drawer.Screen>
    <Drawer.Screen name="Commands">
      {props => <CommandsContainer {...props} />}
    </Drawer.Screen>
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
    const socket = io(`${API_HOSTA}/orderCommands`);
    socket.on('connect', () => {
      socket.on('send_command_order', (notifications, notificationCount) => {
        notificationDispatch({
          type: 'ADD',
          payload: {notifications, notificationCount},
        });
      });
    });
    return () => socket.disconnect();
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
