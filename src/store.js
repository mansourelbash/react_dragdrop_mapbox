import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modalSlice';
import widgetReducer from './widgetSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedModalReducer = persistReducer(persistConfig, modalReducer);
const persistedWidgetReducer = persistReducer(persistConfig, widgetReducer);

const store = configureStore({
  reducer: {
    modal: persistedModalReducer,
    widget: persistedWidgetReducer,
  },
});

export const persistor = persistStore(store);
export default store;
