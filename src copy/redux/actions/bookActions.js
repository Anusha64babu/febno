import axios from 'axios';
import {
  FETCH_BOOKS,
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  SET_LOADING,
  SET_ERROR
} from './actionTypes';

// Action creators
const setLoading = () => ({ type: SET_LOADING });
const setError = (error) => ({ type: SET_ERROR, payload: error });
const fetchBooksSuccess = (books) => ({ type: FETCH_BOOKS, payload: books });
const addBookSuccess = (book) => ({ type: ADD_BOOK, payload: book });
const updateBookSuccess = (book) => ({ type: UPDATE_BOOK, payload: book });
const deleteBookSuccess = (bookId) => ({ type: DELETE_BOOK, payload: bookId });

// Thunks

// Action creator for fetching books
export const fetchBooks = () => async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await axios.get('http://localhost:8000/books');
      console.log(response.data); // Check what data is being returned
      dispatch(fetchBooksSuccess(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  

export const addBook = (book) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post('http://localhost:8000/books', book);
    dispatch(addBookSuccess(response.data)); // Dispatch the added book
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const updateBook = (book) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.put(`http://localhost:8000/books/${book.id}`, book);
    dispatch(updateBookSuccess(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const deleteBook = (bookId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await axios.delete(`http://localhost:8000/books/${bookId}`);
    dispatch(deleteBookSuccess(bookId));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
