import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PostsIndexContainer from "./posts/posts_index_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        {/* <NavBarContainer /> */}
        <PostsIndexContainer />
      </>
    )
  }
}

export default HomePage;