import React from 'react';
import {Image} from 'react-native';

const TitleHeader = () => {
  return (
    <Image
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      style={{width: 50, height: 35}}
    />
  );
};

export default TitleHeader;
