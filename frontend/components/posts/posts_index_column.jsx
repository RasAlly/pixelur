import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndexColumn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {limit: 2, currentPosts: []}
  }

  componentDidMount() {
    const {index, fetchAllPosts} = this.props

    fetchAllPosts(index, this.state.limit)
      .then(({posts}) => {
        this.setState({currentPosts: posts})
      })
  }

  render() {
    const {currentPosts} = this.state;

    return (
      <div className="posts-column">
        {
          currentPosts.length > 0 && currentPosts.map(post => {
            return <PostIndexItem key={post.id} post={post} />
          })
        }
      </div>
    )
  }
}

export default PostIndexColumn