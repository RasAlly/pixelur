import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostShow from "./post_show";

class PostShowWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='show-cont'>
        <NavBarContainer />
        <PostShow store={this.props.state} match={this.props.match} fetchPost={this.props.fetchPost} currentUserId={this.props.currentUserId}/>
      </div>
    )
  }
}

export default PostShowWrapper;
