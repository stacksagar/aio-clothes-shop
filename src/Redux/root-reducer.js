import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userReducer from './reducers/user.reducer';
import cartReducer from './reducers/cart.reducer';
import localDatabaseReducer from './reducers/local.database'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  localDatabase: localDatabaseReducer
});

export default persistReducer(persistConfig, rootReducer);