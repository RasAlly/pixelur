import React from "react";
import UserPostsItem from "./user_posts_item";

class UserShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const navBar = document.getElementsByClassName('nav-bar-container')[0];
    if (navBar) {
      navBar.style.background = null;
      navBar.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://imgur.com/user/rasboss43/cover)';
    }
    this.props.fetchUser(this.props.match.params.id)
  }

  componentWillUnmount() {
    const navBar = document.getElementsByClassName('nav-bar-container')[0];
    if (navBar) {
      navBar.style.background = 'url(https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png)';
      navBar.style.backgroundImage = null;
    }
  }

  render() {
    if (!this.props.user || !this.props.user.posts) return null;
    return (
      <>
        <div className="user-profile-cont">
          <span className="show-username">{this.props.user.username}</span>
        </div>


        {/* <div className="users-posts-cont"> */}
          <div className="user-posts-cont">
            {
              this.props.user.posts.map(post => {
                return <UserPostsItem key={post.id} post={post} fetchPost={this.props.fetchPost}/>
              })
            }
          </div>
        {/* </div> */}
      </>
    )
  }
}

export default UserShow;