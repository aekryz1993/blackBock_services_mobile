import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import ClientScreen from '@components/Client/ClientScreen';
import MCIcon from 'react-native-vector-icons/dist/MaterialIcons';
import Payments from './Payments';
import Payingoff from './Payingoff';
import Support from './Support';
import {CurrencyContext} from '@components/contexts/CurrencyProvider';
import SwipModal from '@components/material/SwipModal';

const currentCurrencyStyle = (_currency, _state) => ({
  backgroundColor:
    _currency === _state.symbol ? 'rgba(0, 0 , 0, 1)' : '#505050',
});

const Wallet = ({navigation, walletCredit, fetchcreditRequest}) => {
  const [screen, setScreen] = useState('payments');
  const [state, dispatch] = useContext(CurrencyContext);
  const [modalVisible, setModalVisible] = useState(false);

  const _onChangeCurrency = currency => {
    dispatch({type: currency});
    setModalVisible(!modalVisible);
  };

  return (
    <ClientScreen navigation={navigation} back={true} backAction={() => {}}>
      <View style={styles.content}>
        {screen === 'payments' && (
          <Payments
            fetchcreditRequest={fetchcreditRequest}
            walletCredit={walletCredit}
            state={state}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
        {screen === 'payingoff' && (
          <Payingoff
            fetchcreditRequest={fetchcreditRequest}
            walletCredit={walletCredit}
            state={state}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            navigation={navigation}
          />
        )}
        {screen === 'support' && <Support />}
      </View>
      <View style={styles.tabNav}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.tabItem}
          onPress={() => setScreen('payments')}>
          <MCIcon
            style={styles.icon}
            name="payments"
            size={26}
            color={
              screen === 'payments'
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.4)'
            }
          />
          <Text
            style={screen === 'payments' ? styles.label_active : styles.label}>
            عمليات الدفع
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.tabItem}
          onPress={() => setScreen('payingoff')}>
          <MCIcon
            style={styles.icon}
            name="add-circle"
            size={26}
            color={
              screen === 'payingoff'
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.4)'
            }
          />
          <Text
            style={screen === 'payingoff' ? styles.label_active : styles.label}>
            تعبئة المحفظة
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.tabItem}
          onPress={() => setScreen('support')}>
          <MCIcon
            style={styles.icon}
            name="support"
            size={26}
            color={
              screen === 'support'
                ? 'rgba(255,255,255,1)'
                : 'rgba(255,255,255,0.4)'
            }
          />
          <Text
            style={screen === 'support' ? styles.label_active : styles.label}>
            مراسلة الدعم
          </Text>
        </TouchableOpacity>
      </View>
      <SwipModal isOpen={modalVisible} setisOpen={setModalVisible}>
        <View style={styles.modalView}>
          <View style={styles.handlerLine} />
          {['€', '$', 'دج'].map((currency, i) => {
            const currencyProp =
              currency === '€'
                ? 'euro'
                : currency === '$'
                ? 'dollar'
                : 'dinnar';
            return (
              <View key={i}>
                <TouchableHighlight
                  activeOpacity={1}
                  style={[
                    styles.currencyItem,
                    currentCurrencyStyle(currency, state),
                  ]}
                  onPress={() => _onChangeCurrency(currency)}>
                  <Text
                    style={
                      styles.currencyItemText
                    }>{`${walletCredit[currencyProp]} ${currency}`}</Text>
                </TouchableHighlight>
              </View>
            );
          })}
        </View>
      </SwipModal>
    </ClientScreen>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  tabNav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(255,255,255,0.4)',
  },
  label_active: {
    color: 'rgba(255,255,255,1)',
  },
  handlerLine: {
    alignSelf: 'center',
    width: '40%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 30,
  },
  currencyItem: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  currencyItemText: {
    color: '#fff',
  },
});

export default Wallet;
