import {AsyncStorage} from 'react-native';
import {createStore, combineReducers} from 'redux';
import placeReducer from './reducers/placeReducer';
import {persistStore, persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  // rootReducer combines all different reducers
  places: placeReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  //it creates global store with rootReducer
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
