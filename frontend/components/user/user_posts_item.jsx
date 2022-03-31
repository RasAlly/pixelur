import React from "react";

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
      <div className="post-item-cont">
        <img id="show-img" src={post.photoUrl} />
        <span>{post.title}</span>
      </div>
    )
  }
}

export default UserPostsItem