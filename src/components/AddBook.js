import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/actions/bookActions';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { name, author, image, quantity };
    dispatch(addBook(newBook)).then(() => {
      navigate('/books');
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div >
          <div >
            <h2>Add Book</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Book Name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Author Name</label>
              <input value={author} onChange={e => setAuthor(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input value={image} onChange={e => setImage(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input type="number" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} className="form-control" />
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">Add Book</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
