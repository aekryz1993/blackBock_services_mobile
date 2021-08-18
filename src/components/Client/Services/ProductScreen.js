import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import ClientScreen from '@components/ClientScreen';
import ProductRadio from '@components/material/ProductRadio';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';
import ProductCode from './ProductCode';

const ProductScreen = ({route, navigation, image}) => {
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
        <View style={styles.container}>
          <View style={styles.itemsContainer}>
            <ProductCode route={route} image={image} />
          </View>
        </View>
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
