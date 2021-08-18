import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProductRadio = ({title, onChoix, item, current}) => {
  const col1Style = current === item ? styles.col_1_active : styles.col_1;
  const col2Style = current === item ? styles.col_2_active : styles.col_2;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onChoix}
      key={item}
      activeOpacity={1}>
      <View style={col1Style}>
        {current === item && <Icon name="check" size={15} color="#000" />}
      </View>
      <View style={col2Style}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    // width: 250,
    marginBottom: 35,
  },
  col_1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  col_2: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 25,
    paddingTop: 25,
  },
  col_1_active: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
  },
  col_2_active: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555',
    paddingBottom: 25,
    paddingTop: 25,
  },
  text: {
    color: '#000',
  },
});

export default ProductRadio;
