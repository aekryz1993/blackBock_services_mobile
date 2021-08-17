/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MyModal from './CustomModal';

const Dropdown = ({text, dispatch}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const _onChangeCurrency = (currency, setModalVisible, modalVisible) => {
    dispatch({type: currency});
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <TouchableOpacity
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
          {['EUR', 'USD', 'DZD'].map((currency, i) => (
            <>
              <TouchableOpacity
                key={i}
                style={styles.currencyItem}
                onPress={() =>
                  _onChangeCurrency(currency, setModalVisible, modalVisible)
                }>
                <Text>{currency}</Text>
              </TouchableOpacity>
              <View style={styles.line} />
            </>
          ))}
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
