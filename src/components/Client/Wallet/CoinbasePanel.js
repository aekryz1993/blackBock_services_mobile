import React from 'react';
import {WebView} from 'react-native-webview';

const CoinbasePanel = ({route}) => {
  const {uri} = route.params;
  return <WebView source={{uri}} />;
};

export default CoinbasePanel;
