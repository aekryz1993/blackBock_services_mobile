/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

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
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
});

export default DrawerWithLogoutButton;
