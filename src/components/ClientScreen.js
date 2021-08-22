import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './Client/Header/Header';

const ClientScreen = ({children, navigation, back, backAction}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} back={back} backAction={backAction} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ClientScreen;
