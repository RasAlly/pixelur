import React from "react";
import PostIndexItemContainer from "./post_index_item_container";

class PostsIndexColumn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {postsColumn} = this.props;
    if (!postsColumn) return null;
    console.log('postsColumn', this.props);
    
    return (
      <div className="posts-column">
        {
          postsColumn.map((post) => {
            return <PostIndexItemContainer key={post.id} post={post} />
          })
        }
      </div>
    )
  }
}

export default PostsIndexColumn