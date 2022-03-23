import React from "react";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="posts-index-item">
        <img className='posts-index-img' src={this.props.post.photoUrl} />
        <p className="posts-index-title">{this.props.post.title}</p>
      </div>
    )
  }
  
}

export default PostIndexItem;