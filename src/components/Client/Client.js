/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from '@components/Loading';
import DrawerWithLogoutButton from '@components/DrawerWithLogoutButton';
import ServiceContainer from './Services/ServiceContainer';
import ProductScreenContainer from './Services/ProductScreenContainer';
import {CurrencyProvider} from '@components/contexts/CurrencyProvider';
import DisplayCodeContainer from './Services/productCode.js/DisplayCodeContainer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Products = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="ProductScreen" component={ProductScreenContainer} />
    <Stack.Screen name="DisplayCodes" component={DisplayCodeContainer} />
  </Stack.Navigator>
);

const Service = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Services" component={ServiceContainer} />
    <Stack.Screen name="Products" component={Products} />
  </Stack.Navigator>
);

const Client = ({loading, logoutrequest, currentUser, profilePic}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <CurrencyProvider>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#222',
        }}
        drawerPosition="right"
        drawerType={'back'}
        drawerContent={props => (
          <DrawerWithLogoutButton
            {...props}
            logoutrequest={logoutrequest}
            currentUser={currentUser}
            profilePic={profilePic}
          />
        )}>
        <Drawer.Screen name="Products" component={Service} />
      </Drawer.Navigator>
    </CurrencyProvider>
  );
};

export default Client;
