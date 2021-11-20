import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Loading Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
