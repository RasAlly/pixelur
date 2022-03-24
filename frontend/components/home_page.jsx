import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PostsIndex from "./posts/posts_index";
// import PostsIndexColumnContainer from "./posts/posts_index_column_container";

const HomePage = () => {
  return (
    <>
      <NavBarContainer />
      <PostsIndex />
    </>
  )
}

export default HomePage;