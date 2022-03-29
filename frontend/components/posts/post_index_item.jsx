import React from "react";
import { withRouter } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {setCurrentPost, history, post} = this.props;
    setCurrentPost(post);
    history.push(`/post/${post.id}`)
  }

  render() {
    return(
      <div className="posts-index-item" onClick={this.handleClick}>
        <img className='posts-index-img' src={this.props.post.photoUrl} />
        <p className="posts-index-title">{this.props.post.title}</p>
      </div>
    )
  }
  
}

export default withRouter(PostIndexItem);