import {
    FETCH_BOOKS,
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    SET_LOADING,
    SET_ERROR,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY
  } from '../actions/cartactionTypes';
  
  const initialState = {
    books: [],
    cart: [],
    loading: false,
    error: null
  };
  
  export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case SET_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case FETCH_BOOKS:
        return {
          ...state,
          loading: false,
          books: action.payload
        };
      case ADD_BOOK:
        return {
          ...state,
          loading: false,
          books: [...state.books, action.payload]
        };
      case UPDATE_BOOK:
        return {
          ...state,
          loading: false,
          books: state.books.map(book =>
            book.id === action.payload.id ? action.payload : book
          )
        };
      case DELETE_BOOK:
        return {
          ...state,
          loading: false,
          books: state.books.filter(book => book.id !== action.payload)
        };
      case ADD_TO_CART:
        return {
          ...state,
          loading: false,
          cart: [...state.cart, action.payload],
          books: state.books.map(book =>
            book.id === action.payload.id
              ? { ...book, quantity: book.quantity - 1 }
              : book
          )
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          loading: false,
          cart: state.cart.filter(book => book.id !== action.payload),
          books: state.books.map(book =>
            book.id === action.payload
              ? { ...book, quantity: book.quantity + 1 }
              : book
          )
        };
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          loading: false,
          cart: state.cart.map(book =>
            book.id === action.payload.id ? action.payload : book
          ),
          books: state.books.map(book =>
            book.id === action.payload.id
              ? { ...book, quantity: book.quantity - action.payload.quantity }
              : book
          )
        };
      default:
        return state;
    }
  };
  