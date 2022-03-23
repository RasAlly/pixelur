import React from "react";
import PostIndexColumnContainer from "./posts_index_column_container";


const PostsIndex = () => {
    return (
      <div className="posts-index">
        {
          [1, 2, 3, 4].map((ele, i) => {
            return <PostIndexColumnContainer key={ele} index={i}/>
          })
        }
      </div>
    )
}

export default PostsIndex;