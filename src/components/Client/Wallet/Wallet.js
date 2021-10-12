import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ClientScreen from '@components/Client/ClientScreen';

const Wallet = ({
  navigation,
  walletCredit,
  fetchcreditRequest,
  createCoinbaseChargeRequest,
}) => {
  const [amount, setamount] = useState('0');

  const onSubmit = () => {
    createCoinbaseChargeRequest({
      amount: Number(amount),
      navigate: coinbasePayUrl =>
        navigation.navigate('Wallet', {
          screen: 'CoinbasePanel',
          params: {uri: coinbasePayUrl},
        }),
    });
    setamount('0');
  };

  return (
    <ClientScreen
      navigation={navigation}
      back={true}
      backAction={() => {}}
      fetchcreditRequest={fetchcreditRequest}
      walletCredit={walletCredit}>
      <View style={styles.container}>
        <View style={styles.credit}>
          <Text>555</Text>
        </View>
        {/* <TextInput
          style={styles.input}
          placeholder="أدخل السعر الذي تريد إضافته"
          onChangeText={text => setamount(text)}
          value={amount}
        />
        <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
          <Text style={styles.label}>إدفع</Text>
        </TouchableOpacity> */}
      </View>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 200,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    marginTop: 50,
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Wallet;
