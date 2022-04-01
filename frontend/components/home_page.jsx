import React from "react";
import PostsIndexContainer from "./posts/posts_index_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <PostsIndexContainer />
      </>
    )
  }
}

export default HomePage;