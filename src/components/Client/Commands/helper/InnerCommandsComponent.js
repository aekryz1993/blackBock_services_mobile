import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default ({data}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.main}>{data.category}</Text>
        <Text style={styles.sub}>{data.serviceName}</Text>
        {/* <Text style={styles.sub}>{data.createdAt.split('T')[1]}</Text> */}
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.main}>{data.quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 70,
    borderBottomWidth: 0.3,
    borderColor: 'rgba(200, 200, 200, 1)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leftSide: {
    justifyContent: 'center',
  },
  rightSide: {
    justifyContent: 'flex-start',
  },
  main: {
    fontSize: 18,
  },
  sub: {
    color: 'rgba(130, 130, 130, 1)',
  },
});
