/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

import Loading from '@components/Loading';
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

const DrawerWithLogoutButton = props => (
  <DrawerContentScrollView
    contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
    <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerItemList {...props} />
    </SafeAreaView>
    <TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.logoutrequest()}>
        <Text style={styles.label}>Logout</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Admin;
