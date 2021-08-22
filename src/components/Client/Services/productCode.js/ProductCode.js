import React, {useContext, useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from '@components/material/Modal';

const ProductItem = ({
  product,
  lastProduct,
  idx,
  getOrder,
  state,
  clear,
  setclear,
  totalAmount,
  settotalAmount,
  amount,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [prevQuantity, setPrevQuantity] = useState(Number(quantity));

  useEffect(() => {
    getOrder({
      label: product.label,
      id: product.id,
      quantity: Number(quantity),
      price: product.Price[state.attribute],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  useEffect(() => {
    if (idx === 0) {
      amount.current = Number(quantity) * product.Price[state.attribute];
    } else if (idx < lastProduct) {
      amount.current += Number(quantity) * product.Price[state.attribute];
    } else {
      settotalAmount(
        amount.current + Number(quantity) * product.Price[state.attribute],
      );
      amount.current = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    if (clear) {
      setQuantity(0);
      settotalAmount(0);
      setPrevQuantity(0);
      setclear(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear]);

  const onQuantityChange = op => {
    switch (op) {
      case 'increament':
        setQuantity(Number(quantity) + 1);
        setPrevQuantity(Number(quantity) + 1);
        settotalAmount(
          Number(totalAmount) -
            Number(quantity) * product.Price[state.attribute] +
            (Number(quantity) + 1) * product.Price[state.attribute],
        );
        break;
      case 'decreament':
        if (Number(quantity) > 0) {
          setPrevQuantity(Number(quantity) - 1);
          setQuantity(Number(quantity) - 1);
          settotalAmount(Number(totalAmount) - product.Price[state.attribute]);
        }
        break;
      case 'focus':
        setPrevQuantity(Number(quantity));
        settotalAmount(
          Number(totalAmount) -
            Number(quantity) * product.Price[state.attribute],
        );
        setQuantity('');
        break;
      case 'input':
        if (quantity === '') {
          setQuantity(prevQuantity);
          settotalAmount(
            Number(totalAmount) +
              Number(prevQuantity) * product.Price[state.attribute],
          );
        } else {
          settotalAmount(
            Number(totalAmount) +
              Number(quantity) * product.Price[state.attribute],
          );
        }
        break;
      default:
        setQuantity(Number(quantity));
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
            onEndEditing={() => onQuantityChange('input')}
            onFocus={() => onQuantityChange('focus')}
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

const ProductCode = ({
  route,
  message,
  orderRequest,
  orderFinished,
  navigation,
  fetchcreditRequest,
  walletCredit,
}) => {
  const [state] = useContext(CurrencyContext);
  const [clear, setclear] = useState(false);
  const [totalAmount, settotalAmount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [order, setorder] = useState([]);
  let amount = useRef(0);
  const {products, image} = route.params;

  const getOrder = product => {
    if (order.length === 0) {
      setorder([product]);
    }
    order.forEach((item, i) => {
      if (product.id === item.id) {
        order[i].quantity = product.quantity;
      } else {
        const existProduct = order.filter(val => val.id === product.id);
        if (existProduct.length === 0) {
          setorder([...order, product]);
        }
      }
    });
    return;
  };
  const openModal = () => {
    setModalVisible(!modalVisible);
  };
  const onClear = () => {
    setclear(true);
  };

  const onConfirm = () => {
    setclear(true);
    orderRequest({
      order: JSON.stringify(order),
      currency: state.attribute,
      amount: totalAmount,
      navigation: props =>
        navigation.navigate('Products', {
          screen: 'DisplayCodes',
          params: {
            navigation,
            orderFinished,
            fetchcreditRequest,
            walletCredit,
            ...props,
          },
        }),
    });
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.actionbutton} onPress={openModal}>
        <Text>confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionbutton} onPress={onClear}>
        <Text>clear</Text>
      </TouchableOpacity>
      <Text>{`${totalAmount} ${state.currency}`}</Text>
      <KeyboardAvoidingView behavior={'height'} style={styles.container}>
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
                    totalAmount={totalAmount}
                    settotalAmount={settotalAmount}
                    amount={amount}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
            {message && <Text>{message}</Text>}
            <Button title="Confirm" onPress={onConfirm} />
          </Modal>
        </View>
      </KeyboardAvoidingView>
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
    height: '23%',
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
