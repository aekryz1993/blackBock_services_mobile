/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Loading from '@components/Loading';
import CustomDrawerItems from '@components/CustomDrawerItems';
import ServiceContainer from './Services/ServiceContainer';
import ProductScreenContainer from './Services/ProductScreenContainer';
import {CurrencyProvider} from '@components/contexts/CurrencyProvider';
import DisplayCodeContainer from './Services/productCode.js/DisplayCodeContainer';
import {OrderProvider} from '@components/contexts/OrderProvider';
import CommandsContainer from './Commands/CommandsContainer';

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
          <CustomDrawerItems
            {...props}
            logoutrequest={logoutrequest}
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
          // component={() => <CommandsContainer render={true} />}
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
