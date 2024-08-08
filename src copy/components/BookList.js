import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions/bookActions';
import './BookList.css'

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books); // Ensure state is correctly referenced
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="book-list">
    {books.map((book) => (
      <div key={book.id} className="card">
        <img src={book.image} alt={book.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">{book.author}</p>
          <p className="card-text">Quantity: {book.quantity}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default BookList;

