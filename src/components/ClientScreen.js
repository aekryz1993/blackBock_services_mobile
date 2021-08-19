import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
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
  container: {},
});

export default ClientScreen;
