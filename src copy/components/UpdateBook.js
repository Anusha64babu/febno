import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBooks, updateBook } from '../redux/actions/bookActions';

const UpdateBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.books);
  const [book, setBook] = useState({ name: '', author: '', image: '', quantity: 0 });

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    } else {
      const bookToEdit = books.find(b => b.id === parseInt(id));
      setBook(bookToEdit);
    }
  }, [books, dispatch, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevBook => ({
      ...prevBook,
      [name]: name === 'quantity' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(book));
    navigate('/books');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h2>Update Book</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Book Name</label>
              <input name="name" value={book.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Author Name</label>
              <input name="author" value={book.author} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input name="image" value={book.image} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input type="number" name="quantity" value={book.quantity} onChange={handleChange} className="form-control" />
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">Update Book</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;

