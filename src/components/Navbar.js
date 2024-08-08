import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/cart">Book List</Link></li>
        <li><Link to="/list">Cart</Link></li>

   
      </ul>
    </nav>
  );
};

export default Navbar;
