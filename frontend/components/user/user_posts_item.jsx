import React from "react";
import {Link} from "react-router-dom";

class UserPostsItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    this.props.fetchPost(this.props.post.id)
      .then((res) => {
        this.setState({post: res.post})
      })
  }

  render() {
    const {post} = this.state
    if (!post) return null;
    return (
      // <div className="post-item-cont">
        <Link to={`/post/${post.id}`} className="post-item-cont">
          <img className="show-img" src={post.photoUrl} />
          <span className="show-title">{post.title}</span>
        </Link>
      // {/* </div> */}
    )
  }
}

export default UserPostsItem