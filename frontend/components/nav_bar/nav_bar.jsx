import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar =  ({ currentUser, logout }) => {
  const [showActions, setShowActions] = useState(false)

  const profileClicked = () => {
    setShowActions((prev) => !prev)
  }


  const display = currentUser ? (
    <div className='profile-tab-cont'>

      <div onClick={profileClicked} id='profile-img'><span id='profile-letter'>D</span></div>
      
      {showActions && (
        <div className='actions-cont'>
          <svg width="24" height="8" viewBox="0 0 24 8" id="pointer-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>icon</title><path d="M10.3359 1.1094C11.3436 0.437601 12.6564 0.437601 13.6641 1.1094L24 8L3.05823e-09 8L10.3359 1.1094Z"></path></svg>

          <Link className='posts-tab' to='/'>Posts</Link> {/* change link to users show page */}

          <a className='github-tab' href="">My Github</a>

          <button className='logout-tab' onClick={logout}>Logout</button>
        </div>
      )}

    </div>
    ) : (
      <div className='session-buttons-cont'>
        <Link className="nav-bar-login" to="/login">Sign In</Link>
        <Link className="nav-bar-signup" to="/signup">Sign Up</Link>
      </div>
    );
  return (
      <div className='nav-bar-container'>
        <div className='link-wrapper'>
          <Link to='/' className='nav-bar-header'>Pixelur</Link>
          <Link to='/upload' className='upload-btn'>
            <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg" alt="upload_plus_symbol" className='upload_plus_symbol' />
            <span className='upload-text'>New post</span>
          </Link>
        </div>
        {display}
      </div>
  )
}

export default NavBar;