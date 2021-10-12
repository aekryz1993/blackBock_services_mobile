/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Dropdown = ({
  fetchcreditRequest,
  walletCredit,
  state,
  modalVisible,
  setModalVisible,
}) => {
  useEffect(() => {
    fetchcreditRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TouchableOpacity
        activeOpacity={5}
        style={[styles.container]}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.leftside}>
          <IconFontAwesome5 name="wallet" size={15} color="#ffff" />
          <Text style={styles.text}>{`${walletCredit[state.attribute]} ${
            state.currency
          }`}</Text>
        </View>
        <View style={styles.rightside}>
          <IconAntDesign name="down" size={12} color="#fff" />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftside: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(20, 20 , 20, 1)',
  },
  rightside: {
    justifyContent: 'center',
    backgroundColor: 'rgba(100, 100 , 100, 1)',
    marginLeft: -16,
    height: 36,
    paddingRight: 10,
    paddingLeft: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: -1,
  },
  text: {
    marginRight: 6,
    marginLeft: 6,
    color: '#ffff',
  },
});

export default Dropdown;
