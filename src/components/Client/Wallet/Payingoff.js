import React from 'react';
import {StyleSheet, View} from 'react-native';
import Currency from '@components/Client/Currency';

const PayingOff = ({
  walletCredit,
  fetchcreditRequest,
  state,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Currency
          walletCredit={walletCredit}
          fetchcreditRequest={fetchcreditRequest}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          state={state}
        />
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

export default PayingOff;
