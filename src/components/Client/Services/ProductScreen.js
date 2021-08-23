import React, {useContext, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ClientScreen from '@components/ClientScreen';
import ProductRadio from '@components/material/ProductRadio';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';
import ProductCodeContainer from './productCode.js/ProductCodeContainer';

const ProductScreen = ({
  route,
  navigation,
  walletCredit,
  fetchcreditRequest,
}) => {
  const [state] = useContext(CurrencyContext);
  const {products, category} = route.params;
  const firstProductLabel = products.length > 0 ? products[0].label : '';
  const [current, setCurrent] = useState(firstProductLabel);

  const selectItem = product => {
    setCurrent(product);
  };

  return (
    <ClientScreen
      navigation={navigation}
      back={true}
      backAction={() => {}}
      fetchcreditRequest={fetchcreditRequest}
      walletCredit={walletCredit}>
      {category === 'id' ? (
        <View style={styles.container()}>
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
              <ProductCodeContainer route={route} navigation={navigation} />
            </View>
          </View>
        )
      )}
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: () => {
    return {
      margin: 20,
      marginTop: 0,
      borderWidth: 0.25,
      paddingHorizontal: 20,
    };
  },
  itemsContainer: {
    paddingVertical: 30,
  },
  bottomview: {
    height: 150,
    backgroundColor: '#000',
    marginBottom: 10,
  },
});

export default ProductScreen;
