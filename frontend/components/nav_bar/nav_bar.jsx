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
        <Link to='/upload' className='upload-btn'>
          <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg" alt="upload_plus_symbol" className='upload_plus_symbol' />
          <span className='upload-text'>New post</span>
        </Link>
        {/* <span id='placeholder'>placeholder</span> */}
        {display}
      </div>
    </header>
  )
}

export default NavBar;