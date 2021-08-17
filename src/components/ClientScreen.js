import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from './Client/Header/Header';

const ClientScreen = ({children, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ClientScreen;
