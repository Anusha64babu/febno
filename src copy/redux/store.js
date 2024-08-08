import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { bookReducer } from './reducers/bookReducer';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
