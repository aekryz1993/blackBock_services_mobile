import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MessageAlert from '@components/material/MessageAlert';
import {CategoryContext} from '@components/contexts/CategoryProduct';

const ProductOp = ({
  productCategoryRequestOp,
  productCategoryFinishedOp,
  success,
  message,
  product,
  category,
  serviceName,
  prices,
}) => {
  const [categoryState, categoryDispatch] = useContext(CategoryContext);

  const [text, ontextchange] = useState({
    label: product ? product.label : null,
    dollar: prices ? prices.dollar.toString() : null,
    euro: prices ? prices.euro.toString() : null,
    dinnar: prices ? prices.dinnar.toString() : null,
  });
  const [isAvailable, setIsAvailable] = useState(
    product ? product.isAvailable : true,
  );

  const onChange = (t, att) => {
    ontextchange({...text, [att]: t});
  };

  const onSubmit = () => {
    const body = {
      serviceName,
      label: text.label,
      dollar: text.dollar,
      euro: text.euro,
      dinnar: text.dinnar,
    };
    if (category === 'id') {
      body.isAvailable = isAvailable;
    }
    productCategoryRequestOp({
      body,
      category,
      categoryDispatch,
      serviceName,
      categoryState,
      id: product ? product.id : '',
    });
    if (!product) {
      ontextchange({
        label: null,
        dollar: null,
        euro: null,
        dinnar: null,
      });
    }
  };

  const onCloseAlert = () => {
    productCategoryFinishedOp();
  };

  return (
    <SafeAreaView style={styles.container}>
      {message && (
        <MessageAlert
          message={message}
          onCloseAlert={onCloseAlert}
          alertbcStyle={success ? styles.alertbcStyle : styles.alertErrobcStyle}
        />
      )}
      <View style={styles.nameContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={t => onChange(t, 'label')}
          value={text.label}
          placeholder="Category Label Name"
        />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.subTitle}>Prices</Text>
        <TextInput
          style={[styles.textInput, styles.price]}
          onChangeText={t => onChange(t, 'dollar')}
          value={text.dollar}
          placeholder="Dollar Price"
          keyboardType={'numeric'}
        />
        <TextInput
          style={[styles.textInput, styles.price]}
          onChangeText={t => onChange(t, 'euro')}
          value={text.euro}
          placeholder="Euro Price"
          keyboardType={'numeric'}
        />
        <TextInput
          style={[styles.textInput, styles.price]}
          onChangeText={t => onChange(t, 'dinnar')}
          value={text.dinnar}
          placeholder="Dinnar Price"
          keyboardType={'numeric'}
        />
      </View>
      {category === 'id' && (
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Available</Text>
          <Switch
            trackColor={{false: '#999', true: 'rgba(0,200,100,1)'}}
            thumbColor={'#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsAvailable(!isAvailable)}
            value={isAvailable}
          />
        </View>
      )}
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
          <Text style={styles.submitLbl}>حفظ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  nameContainer: {
    width: '80%',
    marginTop: 56,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: 'rgba(200,200,200,1)',
  },
  priceContainer: {
    width: '80%',
    marginVertical: 32,
  },
  price: {
    width: '40%',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 18,
  },
  switchContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 18,
  },
  submitContainer: {
    marginVertical: 72,
  },
  submitBtn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'rgba(0, 0, 0,1)',
    borderRadius: 5,
  },
  submitLbl: {
    color: 'rgba(255, 255, 255,1)',
    fontSize: 16,
  },
  alertbcStyle: {
    borderColor: 'rgba(20,170,50,1)',
    color: 'rgba(20,170,50,1)',
  },
  alertErrobcStyle: {
    borderColor: 'rgba(170,20,50,1)',
    color: 'rgba(170,20,50,1)',
  },
});

export default ProductOp;
