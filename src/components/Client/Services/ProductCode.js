import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProductItem = ({product}) => {
  const [state] = useContext(CurrencyContext);
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <View style={styles.productItemContainer} key={product.id}>
        <View style={styles.leftFlex}>
          <TouchableOpacity style={styles.quantityButton}>
            <View style={styles.quantityButtonContainer}>
              <Icon name="minus" size={10} color="#fff" />
            </View>
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            onChangeText={setQuantity}
            value={quantity.toString()}
            defaultValue={'0'}
            keyboardType="numeric"
            textAlign={'center'}
          />
          <TouchableOpacity style={styles.quantityButton}>
            <View style={styles.quantityButtonContainer}>
              <Icon name="plus" size={10} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rightFlex}>
          <View style={styles.productLabel}>
            <Text style={styles.label}>{product.label}</Text>
          </View>
          <View style={styles.productPrice}>
            <Text style={styles.price}>{`(${product.Price[state.attribute]} ${
              state.currency
            })`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
    </>
  );
};

const ProductCode = ({route, image}) => {
  const {products} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.productsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {products.map(product => (
            <ProductItem product={product} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.25,
    backgroundColor: '#ddd',
  },
  imageContainer: {},
  productsContainer: {},
  productItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightFlex: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productLabel: {
    flex: 2,
  },
  productPrice: {
    flex: 1,
  },
  line: {
    borderWidth: 1,
    borderColor: '#777',
  },
});

export default ProductCode;
