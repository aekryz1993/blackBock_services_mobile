import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Header from './Header/Header';

const ClientScreen = ({children, navigation, back, backAction}) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Header navigation={navigation} back={back} backAction={backAction} />
      {children}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ClientScreen;
