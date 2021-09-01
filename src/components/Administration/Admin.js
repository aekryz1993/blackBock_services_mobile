/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Loading from '@components/Loading';
import CustomDrawerItems from '@components/CustomDrawerItems';
import UsersContainer from './users/UsersContainer';

const Drawer = createDrawerNavigator();

const Admin = ({
  loading,
  logoutrequest,
  currentUser,
  profilePic,
  fetchUsersFinished,
}) => {
  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    fetchUsersFinished();
    logoutrequest();
  };

  return (
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
    </Drawer.Navigator>
  );
};

export default Admin;
