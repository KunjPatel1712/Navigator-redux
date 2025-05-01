import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#343a40', color: 'white', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to='/about' style={{ color: 'white', textDecoration: 'none', marginLeft: '35%' }}>About</Link>
        <Link to='/product' style={{ color: 'white', textDecoration: 'none', marginLeft: '25%' }}>Product</Link>
        <Link to='/login' style={{ color: 'white', textDecoration: 'none', marginLeft: '22%' }}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
