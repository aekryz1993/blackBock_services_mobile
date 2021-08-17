import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import ClientScreen from '@components/ClientScreen';
import ProductRadio from '@components/material/ProductRadio';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';

const ProductScreen = ({route, navigation}) => {
  const [state] = useContext(CurrencyContext);
  const {products, category} = route.params;
  const [current, setCurrent] = useState(products[0].label);

  const selectItem = product => {
    setCurrent(product);
  };

  return (
    <ClientScreen navigation={navigation}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>GO BACK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          {products.map((product, i) => {
            if (category === 'id') {
              return (
                <ProductRadio
                  key={i}
                  title={`${product.Price[state.attribute]} ${state.currency}`}
                  onChoix={() => selectItem(product.label)}
                  current={current}
                  item={product.label}
                />
              );
            } else if (category === 'code') {
              return (
                <Text key={i}>
                  {' '}
                  {`${product.Price[state.attribute]} ${state.currency}`}{' '}
                </Text>
              );
            }
          })}
        </View>
      </View>
      <View style={styles.bottomview} />
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
    borderWidth: 0.25,
    paddingHorizontal: 20,
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
