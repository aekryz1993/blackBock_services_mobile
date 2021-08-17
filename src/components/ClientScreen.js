import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Header from './Client/Header/Header';

const ClientScreen = ({children, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginBottom: StatusBar.currentHeight * 2 || 30,
  },
});

export default ClientScreen;
