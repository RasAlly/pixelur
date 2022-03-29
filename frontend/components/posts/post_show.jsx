import React from "react";
import { Link } from "react-router-dom";

class PostShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const navBar = document.getElementsByClassName('nav-bar-container')[0]

    navBar.style.background = 'linear-gradient(180deg,rgba(37,38,41,.24) 26.22%,#27292d),linear-gradient(0deg,#171544,#171544)';

    console.log(this.props);
    this.props.fetchPost(this.props.store.posts.currentPost.id)
  }

  render() {
    if (!this.props.store.posts.currentPost) return null;
    const {id, title, photoUrl, description, creator_id} = this.props.store.posts.currentPost;
    return (
      <div className="post-show-cont">
        <div className="title-edit-cont">

          <span className="post-title">{title}</span>

          { this.props.currentUserId === creator_id ?

            <div className="edit-post-symbol">
              <Link to={`/post/${id}/edit`}>
                <img id="edit-img" src="/pixelur_images/edit_post_symbol.png" alt="image" />
                <span id="edit-symbol-text">edit</span> 
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
    )
  }
}

export default PostShow;