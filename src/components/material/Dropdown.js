/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MyModal from './CustomModal';

const Dropdown = ({text, dispatch, currentCurrency}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const _onChangeCurrency = currency => {
    dispatch({type: currency});
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.container]}
        onPress={() => setModalVisible(!modalVisible)}>
        <IconFontAwesome5 name="wallet" size={15} color="#ffff" />
        <Text style={styles.text}>{text}</Text>
        <IconAntDesign name="down" size={10} color="#ffff" />
      </TouchableOpacity>
      <MyModal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        dismiss={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          {['EUR', 'USD', 'DZD'].map((currency, i) => {
            if (currency !== currentCurrency) {
              return (
                <View key={i}>
                  <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#999999"
                    style={styles.currencyItem}
                    onPress={() => _onChangeCurrency(currency)}>
                    <Text>{currency}</Text>
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
});

export default Dropdown;
