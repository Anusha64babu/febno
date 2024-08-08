import {
    FETCH_BOOKS,
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    SET_LOADING,
    SET_ERROR
  } from '../actions/actionTypes';
  
  const initialState = {
    books: [],
    loading: false,
    error: null
  };
  
  export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return { ...state, loading: true };
      case SET_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_BOOKS:
        return { ...state, loading: false, books: action.payload };
      case ADD_BOOK:
        return { ...state, loading: false, books: [...state.books, action.payload] };
      case UPDATE_BOOK:
        return {
          ...state,
          loading: false,
          books: state.books.map((book) =>
            book.id === action.payload.id ? action.payload : book
          )
        };
      case DELETE_BOOK:
        return {
          ...state,
          loading: false,
          books: state.books.filter((book) => book.id !== action.payload)
        };
      default:
        return state;
    }
  };
  