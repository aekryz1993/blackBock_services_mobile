import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './Header/Header';

const AdminScreen = ({children, navigation, back, backAction}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} back={back} backAction={backAction} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default AdminScreen;
