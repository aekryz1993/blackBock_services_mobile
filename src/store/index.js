import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default function configureStore() {
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
    middlewares.push(createLogger());
  }
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
}
