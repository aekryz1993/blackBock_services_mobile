import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const Bar = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'green',
    width: StatusBar.currentWidth,
    height: StatusBar.currentHeight * 1.5 || windowHeight * 0.05,
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 17,
  },
});

export default Bar;
