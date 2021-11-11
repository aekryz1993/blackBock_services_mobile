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
    <TouchableOpacity
      activeOpacity={5}
      style={[styles.container]}
      onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.leftside}>
        <IconFontAwesome5
          style={styles.icon}
          name="wallet"
          size={18}
          color="#ffff"
        />
        <Text style={styles.text}>{`${walletCredit[state.attribute]}`}</Text>
        <Text style={styles.symbol}>{`${state.symbol}`}</Text>
      </View>
      <View style={styles.rightside}>
        <IconAntDesign name="down" size={12} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftside: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    paddingHorizontal: 16,
    width: '60%',
    borderRadius: 20,
    backgroundColor: 'rgba(20, 20 , 20, 1)',
  },
  rightside: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '18%',
    backgroundColor: 'rgba(100, 100 , 100, 1)',
    marginLeft: -16,
    height: 38,
    paddingRight: 10,
    paddingLeft: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: -1,
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
  text: {
    fontSize: 18,
    color: '#ffff',
    textAlign: 'center',
  },
  symbol: {
    position: 'absolute',
    right: 30,
    fontSize: 18,
    color: '#ffff',
  },
});

export default Dropdown;
