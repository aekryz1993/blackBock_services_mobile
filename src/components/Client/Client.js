/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {io} from 'socket.io-client';

import Loading from '@components/Loading';
import CustomDrawerItems from '@components/CustomDrawerItems';
import ServiceContainer from './Services/ServiceContainer';
import ProductScreenContainer from './Services/ProductScreenContainer';
import {CurrencyProvider} from '@components/contexts/CurrencyProvider';
import DisplayCodeContainer from './Services/productCode.js/DisplayCodeContainer';
import {OrderProvider} from '@components/contexts/OrderProvider';
import CommandsContainer from '@components/Client/Commands/CommandsContainer';
import {API_HOSTA} from '@env';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Products = () => (
  <OrderProvider>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProductScreen" component={ProductScreenContainer} />
      <Stack.Screen name="DisplayCodes" component={DisplayCodeContainer} />
    </Stack.Navigator>
  </OrderProvider>
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
  useEffect(() => {
    const socket = io(`${API_HOSTA}/treatedCommands`);
    socket.on('connect', () => {
      socket.on('send_command', command => {
        console.log(command);
      });
    });
    return () => socket.disconnect();
  });

  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    logoutrequest();
  };

  return (
    <CurrencyProvider>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#222',
        }}
        drawerPosition="right"
        drawerType={'back'}
        drawerContent={props => (
          <CustomDrawerItems
            {...props}
            logout={logout}
            currentUser={currentUser}
            profilePic={profilePic}
          />
        )}>
        <Drawer.Screen
          name="Products"
          component={Service}
          options={{
            drawerIcon: ({color, size}) => (
              <FeatherIcon name="shopping-bag" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Commands"
          options={{
            drawerIcon: ({color, size}) => (
              <FeatherIcon name="shopping-cart" size={size} color={color} />
            ),
          }}>
          {props => <CommandsContainer {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </CurrencyProvider>
  );
};

export default Client;
