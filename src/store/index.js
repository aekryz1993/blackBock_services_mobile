import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, createLogger()),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
