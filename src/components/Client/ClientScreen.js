import React, {useState, useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SwipModal from '@components/material/SwipModal';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';

import Header from './Header/Header';

const currentCurrencyStyle = (_currency, _state) => ({
  backgroundColor:
    _currency === _state.currency ? 'rgba(0, 0 , 0, 1)' : '#505050',
});

const ClientScreen = ({
  children,
  navigation,
  back,
  backAction,
  fetchcreditRequest,
  walletCredit,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, dispatch] = useContext(CurrencyContext);

  const _onChangeCurrency = currency => {
    dispatch({type: currency});
    setModalVisible(!modalVisible);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Header
        navigation={navigation}
        back={back}
        backAction={backAction}
        walletCredit={walletCredit}
        fetchcreditRequest={fetchcreditRequest}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        state={state}
      />
      {children}
      <SwipModal isOpen={modalVisible} setisOpen={setModalVisible}>
        <View style={styles.modalView}>
          <View style={styles.handlerLine} />
          {['EUR', 'USD', 'DZD'].map((currency, i) => {
            const currencyProp =
              currency === 'EUR'
                ? 'euro'
                : currency === 'USD'
                ? 'dollar'
                : 'dinnar';
            return (
              <View key={i}>
                <TouchableHighlight
                  activeOpacity={1}
                  style={[
                    styles.currencyItem,
                    currentCurrencyStyle(currency, state),
                  ]}
                  onPress={() => _onChangeCurrency(currency)}>
                  <Text
                    style={
                      styles.currencyItemText
                    }>{`${walletCredit[currencyProp]} ${currency}`}</Text>
                </TouchableHighlight>
              </View>
            );
          })}
        </View>
      </SwipModal>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  handlerLine: {
    alignSelf: 'center',
    width: '40%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 30,
  },
  currencyItem: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  currencyItemText: {
    color: '#fff',
  },
});

export default ClientScreen;
