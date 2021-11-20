import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  Text,
} from 'react-native';

import ClientScreen from '@components/Client/ClientScreen';
import ProductRadio from '@components/material/ProductRadio';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';
import ProductCodeContainer from './productCode.js/ProductCodeContainer';
import SwipModal from '@components/material/SwipModal';
import {currentCurrencyStyle} from '@components/contexts/wallet/walletWatcher';
import Currency from '@components/Client/Currency';

const ProductScreen = ({
  route,
  navigation,
  walletCredit,
  fetchcreditRequest,
}) => {
  const [state, dispatch] = useContext(CurrencyContext);
  const {products, category, serviceName} = route.params;
  const firstProductLabel = products.length > 0 ? products[0].label : '';
  const [current, setCurrent] = useState(firstProductLabel);
  const [modalVisible, setModalVisible] = useState(false);

  const selectItem = product => {
    setCurrent(product);
  };

  const _onChangeCurrency = currency => {
    dispatch({type: currency});
    setModalVisible(!modalVisible);
  };

  return (
    <ClientScreen
      navigation={navigation}
      back={true}
      backAction={() => {}}
      fetchcreditRequest={fetchcreditRequest}
      walletCredit={walletCredit}>
      <Currency
        walletCredit={walletCredit}
        fetchcreditRequest={fetchcreditRequest}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        state={state}
      />
      {category === 'id' ? (
        <View style={styles.container}>
          <View style={styles.itemsContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {products.map((product, i) => {
                return (
                  <ProductRadio
                    key={i}
                    title={`${product.Price[state.attribute]} ${
                      state.currency
                    }`}
                    onChoix={() => selectItem(product.label)}
                    current={current}
                    item={product.label}
                    serviceName={serviceName}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      ) : (
        products.length !== 0 && (
          <View style={styles.container}>
            <View style={styles.itemsContainer}>
              <ProductCodeContainer
                route={route}
                navigation={navigation}
                serviceName={serviceName}
              />
            </View>
          </View>
        )
      )}
      <SwipModal isOpen={modalVisible} setisOpen={setModalVisible}>
        <View style={styles.modalView}>
          <View style={styles.handlerLine} />
          {['€', '$', 'دج'].map((currency, i) => {
            const currencyProp =
              currency === '€'
                ? 'euro'
                : currency === '$'
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
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  // container: () => {
  //   return {
  //     margin: 20,
  //     marginTop: 0,
  //     borderWidth: 0.25,
  //     paddingHorizontal: 20,
  //   };
  // },
  container: {
    flex: 1,
  },
  itemsContainer: {
    paddingVertical: 30,
  },
  bottomview: {
    height: 150,
    backgroundColor: '#000',
    marginBottom: 10,
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

export default ProductScreen;
