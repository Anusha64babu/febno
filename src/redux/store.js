import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { bookReducer } from './reducers/bookReducer';
import { cartReducer } from './reducers/cartReducers';

const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
