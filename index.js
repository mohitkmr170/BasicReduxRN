/**
 * @format
 */
import React from 'react';
import {AppRegistry, ActivityIndicator} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import configureStore from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

const store = configureStore().store;
const persistor = configureStore().persistor;

console.disableYellowBox = true;

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
