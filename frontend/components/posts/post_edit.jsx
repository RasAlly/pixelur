import React from "react";

class PostEdit extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    const {post} = this.props
    return(
      <div>
        {post && (
          <div className="">

            <input type="text" value={post.title} />
            <img src={post.photoUrl} alt="edit-img" />
            <textarea>{post.description}</textarea>

          </div>
        )}
      </div>
    )
  }
}

export default PostEdit;