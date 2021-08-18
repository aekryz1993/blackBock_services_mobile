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

const ProductItem = ({product, lastProduct, idx}) => {
  const [state] = useContext(CurrencyContext);
  const [quantity, setQuantity] = useState(0);

  const onQuantityChange = op => {
    switch (op) {
      case 'increament':
        setQuantity(quantity + 1);
        break;
      case 'decreament':
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
        break;
      default:
        setQuantity(quantity);
    }
  };

  return (
    <View key={product.id} style={styles.itemContainer}>
      <View style={styles.productItemContainer}>
        <View style={styles.leftFlex}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onQuantityChange('decreament')}>
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
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onQuantityChange('increament')}>
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
      {lastProduct !== idx && <View style={styles.line} />}
    </View>
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
          {products.map((product, idx) => (
            <ProductItem
              product={product}
              lastProduct={products.length - 1}
              idx={idx}
            />
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
    borderColor: '#aaa',
    marginHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: '50%',
  },
  productsContainer: {
    backgroundColor: '#ddd',
  },
  productItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftFlex: {
    flex: 1.4,
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
    flex: 2.7,
  },
  productPrice: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
  },
  quantityInput: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 8,
  },
  line: {
    borderWidth: 1,
    width: '95%',
    borderColor: '#777',
  },
});

export default ProductCode;
