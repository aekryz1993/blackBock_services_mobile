import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Loading from '@components/Loading';
import UsersContainer from './users/UsersContainer';
import DrawerWithLogoutButton from '../DrawerWithLogoutButton';

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
