/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MyModal from './CustomModal';

const Dropdown = ({
  text,
  dispatch,
  currentCurrency,
  fetchcreditRequest,
  walletCredit,
  state,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const _onChangeCurrency = currency => {
    dispatch({type: currency});
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    fetchcreditRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.container]}
        onPress={() => setModalVisible(!modalVisible)}>
        <IconFontAwesome5 name="wallet" size={15} color="#ffff" />
        <Text style={styles.text}>{`${walletCredit[state.attribute]} ${
          state.currency
        }`}</Text>
        <IconAntDesign name="down" size={10} color="#ffff" />
      </TouchableOpacity>
      <MyModal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        modalStyles={{
          modalContent: styles.modalContent,
          modalOverlay: styles.modalOverlay,
        }}
        dismiss={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          {['EUR', 'USD', 'DZD'].map((currency, i) => {
            const currencyProp =
              currency === 'EUR'
                ? 'euro'
                : currency === 'USD'
                ? 'dollar'
                : 'dinnar';
            if (currency !== currentCurrency) {
              return (
                <View key={i}>
                  <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#999999"
                    style={styles.currencyItem}
                    onPress={() => _onChangeCurrency(currency)}>
                    <Text>{`${walletCredit[currencyProp]} ${currency}`}</Text>
                  </TouchableHighlight>
                  <View style={styles.line} />
                </View>
              );
            }
          })}
        </View>
      </MyModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    marginRight: 6,
    marginLeft: 6,
    color: '#ffff',
  },
  modalView: {
    alignItems: 'stretch',
    shadowColor: '#000',
  },
  currencyItem: {
    backgroundColor: '#eee',
    padding: 5,
    paddingLeft: 50,
    paddingRight: 50,
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  modalContent: {
    position: 'absolute',
    right: 50,
    marginTop: StatusBar.currentHeight * 2,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Dropdown;
