import React from "react";
import { Link } from "react-router-dom";

class PostShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const navBar = document.getElementsByClassName('nav-bar-container')[0]

    navBar.style.background = 'linear-gradient(180deg,rgba(37,38,41,.24) 26.22%,#27292d),linear-gradient(0deg,#171544,#171544)';

    this.props.fetchPost(this.props.match.params.id)
  }

  componentWillUnmount() {
    const navBar = document.getElementsByClassName('nav-bar-container')[0];
    if (navBar) {
      navBar.style.background = 'url(https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png)';
    }
  }

  componentDidUpdate() {
    if (this.props.currentPost.id != this.props.match.params.id) {
      this.props.fetchPost(this.props.match.params.id)
    }
      
  }

  render() {
    if (!this.props.currentPost) return null;
    const {id, title, photoUrl, description, creator_id, creator} = this.props.currentPost;
    return (
      <div className="show-cont">
        <div className="post-show-cont">

          <div className="title-next-cont">
            <span className="post-title">{title}</span>
          
            <Link to={`/post/${id + 1}`} className='next-post-link'>
              <button id="next-post-btn">Next
                <svg id="arrow-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" alt=">"><title>Chevron Pointing Right</title><path d="M6 12l4-3.996L6 4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </button>
            </Link>
          </div>

          <div className="user-edit-cont">
            <div className='user-info-cont'>
              <Link id="post-username" to={`/user/${creator_id}`}>
                {creator.username}
              </Link>
              {/* <span id="post-username">{creator.username}</span> */}
            </div>       

            { this.props.currentUserId && this.props.currentUserId.id === creator_id ?

              <div className="edit-post-symbol">
                <Link to={`/post/${id}/edit`}>
                  <img id="edit-img" src="/pixelur_images/edit_post_symbol.png" alt="image" />
                </Link>
              </div>
              :
              null
            }
          </div>


            
          <div className='img-cont'>

            <div id="photo-wrapper">
              <img id="img" src={photoUrl} alt="" />
            </div>
          </div>

          {description}
        </div>
      </div>
    )
  }
}

export default PostShow;