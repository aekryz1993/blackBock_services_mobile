import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './Header/Header';

const ClientScreen = ({
  children,
  navigation,
  back,
  backAction,
  fetchcreditRequest,
  walletCredit,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        back={back}
        backAction={backAction}
        walletCredit={walletCredit}
        fetchcreditRequest={fetchcreditRequest}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ClientScreen;
