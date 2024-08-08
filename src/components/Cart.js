import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem } from '../redux/actions/cartActions';


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; 
    dispatch(updateCartItem(id, quantity));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h5>{item.name}</h5>
                <p>{item.author}</p>
                <p>Quantity: 
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                </p>
              </div>
              <button onClick={() => handleRemove(item.id)} className="btn btn-danger">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
