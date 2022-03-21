import React from 'react';
import { Link } from 'react-router-dom';

const NavBar =  ({ currentUser, logout }) => {
  const display = currentUser ? (
      <div className='nav-bar-right'>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div className='nav-bar-right'>
        <Link className="nav-bar-login" to="/login">Sign In</Link>
        <Link className="nav-bar-signup" to="/signup">Sign Up</Link>
      </div>
    );
  return (
    <header className="nav-bar">
      
      <div className='nav-bar-container'>
        <Link to='/' className='nav-bar-header'>Pixelur</Link>
        {display}
      </div>
    </header>
  )
}

export default NavBar;