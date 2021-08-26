import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';

const Loading = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading Screen</Text>
    </SafeAreaView>
  );
};

export default Loading;
