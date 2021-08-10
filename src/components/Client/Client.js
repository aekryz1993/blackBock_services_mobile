/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Loading from '@components/Loading';
import DrawerWithLogoutButton from '../DrawerWithLogoutButton';

const Drawer = createDrawerNavigator();

const Hello = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Client Screen</Text>
    </View>
  );
};

const Client = ({loading, logoutrequest}) => {
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
      <Drawer.Screen name="Clients" component={Hello} />
    </Drawer.Navigator>
  );
};

export default Client;
