import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from '@components/Loading';
import DrawerWithLogoutButton from '@components/DrawerWithLogoutButton';
import ServiceContainer from './Services/ServiceContainer';
import ProductScreen from './Services/ProductScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Service = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Services" component={ServiceContainer} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
  </Stack.Navigator>
);

const Client = ({loading, logoutrequest}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={props => (
        <DrawerWithLogoutButton {...props} logoutrequest={logoutrequest} />
      )}>
      <Drawer.Screen name="Products" component={Service} />
    </Drawer.Navigator>
  );
};

export default Client;
