/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';

import AuthContainer from '@components/auth/AuthContainer';
import configStore from './store';

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  );
};

export default App;
