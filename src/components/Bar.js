/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const Bar = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'green',
    width: windowWidth,
    height: StatusBar.currentHeight * 2 || windowHeight * 0.05,
    marginBottom: StatusBar.currentHeight || windowHeight * 0.05,
  },
});

export default Bar;
