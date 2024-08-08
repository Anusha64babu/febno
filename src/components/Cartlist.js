import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cart-list">
      {books.map((book) => (
        <div key={book.id} className="card">
          <img src={book.image} alt={book.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <p className="card-text">{book.author}</p>
            <p className="card-text">Quantity: {book.quantity}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(book)}
              disabled={book.quantity <= 0}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFromCart(book.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
