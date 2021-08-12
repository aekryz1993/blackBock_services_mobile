import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Loading from '@components/Loading';
import DrawerWithLogoutButton from '@components/DrawerWithLogoutButton';
import UsersContainer from './users/UsersContainer';

const Drawer = createDrawerNavigator();

const Admin = ({loading, logoutrequest}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerWithLogoutButton {...props} logoutrequest={logoutrequest} />
        );
      }}>
      <Drawer.Screen name="Users" component={UsersContainer} />
    </Drawer.Navigator>
  );
};

export default Admin;
