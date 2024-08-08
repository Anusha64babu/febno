import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM
  } from './cartactionTypes';
  
  export const addToCart = (book) => ({
    type: ADD_TO_CART,
    payload: book
  });
  
  export const removeFromCart = (bookId) => ({
    type: REMOVE_FROM_CART,
    payload: bookId
  });
  
  export const updateCartItem = (bookId, quantity) => ({
    type: UPDATE_CART_ITEM,
    payload: { id: bookId, quantity }
  });
  