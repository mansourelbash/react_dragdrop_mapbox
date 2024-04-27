import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modalSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, modalReducer);

const store = configureStore({
  reducer: {
    modal: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
