import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Currency from '@components/Client/Currency';
import {createOrderApi} from '@apis/wallet';

const PAYMETHODS = currency => {
  switch (currency) {
    case 'dollar':
      return [
        {name: 'coinbase', label: 'Coinbase'},
        {name: 'binance', label: 'Binance'},
      ];
    case 'euro':
      return [];
    case 'dinnar':
      return [];
    default:
      return [];
  }
};

const PayingOff = ({
  walletCredit,
  fetchcreditRequest,
  state,
  modalVisible,
  setModalVisible,
  navigation,
}) => {
  const [amount, setAmount] = useState(0);
  const [payMethod, setPayMethod] = useState('');
  const [message, setmessage] = useState(null);

  const onConfirm = () => {
    (async () => {
      try {
        const response = await createOrderApi({amount, method: payMethod});
        if (response.data.success) {
          navigation.navigate('PeyMethodPanel', {
            uri: response.data.order.checkoutUrl,
          });
        }
      } catch (error) {
        setmessage(error.message);
      }
    })();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Currency
          walletCredit={walletCredit}
          fetchcreditRequest={fetchcreditRequest}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          state={state}
        />
        <View style={styles.bottomSide}>
          <View style={styles.amountContainer}>
            <Text style={styles.currency}>{state.currency}</Text>
            <TextInput
              style={styles.amount}
              value={amount.toString()}
              onChangeText={setAmount}
              keyboardType="numeric"
              onFocus={() => {
                if (amount === 0) {
                  setAmount('');
                }
              }}
              onEndEditing={() => {
                if (amount === '') {
                  setAmount(0);
                }
              }}
            />
          </View>
          <View style={styles.paymethods}>
            {PAYMETHODS(state.attribute) &&
              PAYMETHODS(state.attribute).map((method, index) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={index}
                  onPress={() => setPayMethod(method.name)}
                  style={[
                    styles.paymethodRow,
                    method.name === payMethod && styles.paymethodRow_active,
                  ]}>
                  <Text style={styles.paymethodText}>{method.label}</Text>
                </TouchableOpacity>
              ))}
          </View>
          <View style={styles.submitClmnn}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.confirmBtn}
              onPress={onConfirm}
              // disabled={payMethod && amount && amount !== '0' ? true : false}
            >
              <Text style={styles.confirmBtnLbl}>تأكيد</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  bottomSide: {
    marginTop: 40,
    alignItems: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currency: {
    fontSize: 32,
  },
  amount: {
    fontSize: 32,
  },
  paymethods: {
    marginTop: 24,
    width: '80%',
  },
  paymethodRow: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(255,255,255,1)',
    borderBottomWidth: 0.3,
    borderColor: 'rgba(200, 200, 200, 1)',
  },
  paymethodRow_active: {
    backgroundColor: 'rgba(190,190,190,1)',
  },
  paymethodText: {
    fontSize: 18,
  },
  submitClmnn: {
    marginTop: 72,
  },
  confirmBtn: {
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  confirmBtnLbl: {
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
});

export default PayingOff;
