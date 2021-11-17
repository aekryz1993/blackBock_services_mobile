import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MCIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default ({data, currency}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.amount}>{`${currency} ${data.amount}`}</Text>
        <Text style={styles.peymethod}>{data.peyMethod}</Text>
      </View>
      <View style={styles.rightSide}>
        {data.confirmed ? (
          <MCIcon
            style={styles.icon}
            name="checkcircleo"
            size={26}
            color={''}
          />
        ) : (
          <MCIcon
            style={styles.icon}
            name="progress-check"
            size={26}
            color="#ffcc33"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    borderColor: 'rgba(200, 200, 200, 1)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leftSide: {},
  amount: {
    fontSize: 18,
  },
  peymethod: {
    color: 'rgba(130, 130, 130, 1)',
  },
});
