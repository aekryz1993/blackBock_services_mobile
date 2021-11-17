import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Currency from '@components/Client/Currency';
import SectionList from '@components/material/SectionList';
import paymentsData from './helper/paymentsData';
import {fetchPayment} from '@components/contexts/wallet/walletWatcher';
import WalletProvider from '@components/contexts/wallet/WalletProvider';
import InnerPaymentsComponents from './helper/InnerPaymentsComponents';

const Payments = ({
  walletCredit,
  fetchcreditRequest,
  state,
  modalVisible,
  setModalVisible,
}) => {
  const [fetchPaymentsState, fetchPaymentsDispatch] = useContext(
    WalletProvider.FetchPayments.Context,
  );

  useEffect(
    () =>
      fetchPayment({
        currency: state.attribute,
        dispatch: fetchPaymentsDispatch,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(
    () => {
      fetchPaymentsDispatch({type: 'FETCHPAYMENTS_ENDED'});
      fetchPayment({
        currency: state.attribute,
        dispatch: fetchPaymentsDispatch,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.currency],
  );

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
          <SectionList
            data={paymentsData(fetchPaymentsState.payments)}
            InnerComponent={InnerPaymentsComponents}
            currency={state.currency}
          />
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
  content: {
    width: '100%',
  },
  items: {
    marginTop: 40,
  },
});

export default Payments;
