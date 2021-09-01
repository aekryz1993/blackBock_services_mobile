/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import ProfileDrawerItem from './drowerItems/ProfileDrawerItem';

const CustomDrawerItems = props => (
  <DrawerContentScrollView
    contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
    <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
      <ProfileDrawerItem currentUser={props.currentUser} />
      <DrawerItemList
        {...props}
        activeBackgroundColor="rgba(0, 0, 0, 0.7)"
        activeTintColor="#fff"
        inactiveBackgroundColor="transparent"
        inactiveTintColor="#fff"
        labelStyle={styles.drawerlabelitems}
        style={styles.drawerViewitems}
      />
    </SafeAreaView>
    <TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={props.logout}>
        <Text style={styles.label}>Sign Out</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  drawerlabelitems: {
    fontSize: 14,
  },
});

export default CustomDrawerItems;
