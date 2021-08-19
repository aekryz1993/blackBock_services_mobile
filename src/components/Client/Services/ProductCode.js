import React, {useContext, useState, useEffect} from 'react';
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
// import {fetchProductCodesOrder} from '@apis/products';

const ProductItem = ({
  product,
  lastProduct,
  idx,
  getOrder,
  state,
  clear,
  setclear,
}) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getOrder(
      {
        label: product.label,
        id: product.id,
        quantity: Number(quantity),
        price: product.Price[state.attribute],
      },
      Number(quantity),
    );
  });

  useEffect(() => {
    if (clear) {
      setQuantity(0);
      setclear(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear]);

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
    <>
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
    </>
  );
};

const ProductCode = ({route, image}) => {
  const [state] = useContext(CurrencyContext);
  const [clear, setclear] = useState(false);
  const {products} = route.params;
  let order = [];

  const getOrder = (product, quantity) => {
    if (order.length === 0) {
      order = [product];
    }
    order.forEach((item, i) => {
      if (product.id === item.id) {
        order[i].quantity = quantity;
      } else {
        const existProduct = order.filter(val => val.id === product.id);
        if (existProduct.length === 0) {
          order = [...order, product];
        }
      }
    });
    return;
  };

  const onConfirm = () => {
    // fetchProductCodesOrder({
    //   order: JSON.stringify(order),
    //   currency: state.attribute,
    // });
    console.log(order);
  };
  const onClear = () => {
    setclear(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.actionbutton} onPress={onConfirm}>
        <Text>confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionbutton} onPress={onClear}>
        <Text>clear</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.productsContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {products.map((product, idx) => (
              <View key={product.id} style={styles.itemContainer}>
                <ProductItem
                  product={product}
                  lastProduct={products.length - 1}
                  idx={idx}
                  getOrder={getOrder}
                  state={state}
                  clear={clear}
                  setclear={setclear}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottomContainer} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.25,
    borderColor: '#aaa',
    marginHorizontal: 20,
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  image: {
    width: '60%',
    height: '65%',
  },
  productsContainer: {
    backgroundColor: '#ddd',
    height: '29%',
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
  actionbutton: {
    marginBottom: 10,
  },
});

export default ProductCode;
