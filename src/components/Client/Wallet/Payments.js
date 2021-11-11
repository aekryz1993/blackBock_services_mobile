import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Currency from '@components/Client/Currency';

const Payments = ({
  walletCredit,
  fetchcreditRequest,
  state,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Currency
          walletCredit={walletCredit}
          fetchcreditRequest={fetchcreditRequest}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          state={state}
        />
        <View style={styles.items}>
          {/* <FlatList
           
             
           /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Payments;
