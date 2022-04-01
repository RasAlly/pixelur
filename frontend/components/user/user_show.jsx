import React from "react";
import UserPostsItem from "./user_posts_item";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleTabChange = this.handleTabChange.bind(this)
  }

  componentDidMount() {
    const navBar = document.getElementsByClassName('nav-bar-container')[0];
    const publicTab = document.getElementById('public');
    if (navBar && publicTab) {
      navBar.style.background = null;
      navBar.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://imgur.com/user/rasboss43/cover)';
      publicTab.style.color = 'green';
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

  handleTabChange(tab) {
    const tabEle = document.getElementById(tab);
    
    if (tab === 'all') {
      const publicTab = document.getElementById('public');
      const hidden = document.getElementById('hidden');
      publicTab.style.color = 'rgba(255, 255, 255, 0.756)';
      hidden.style.color = 'rgba(255, 255, 255, 0.756)';

    } else if (tab === 'public') {
      const all = document.getElementById('all');
      const hidden = document.getElementById('hidden');
      all.style.color = 'rgba(255, 255, 255, 0.756)';
      hidden.style.color = 'rgba(255, 255, 255, 0.756)';

    } else {
      const all = document.getElementById('all');
      const publicTab = document.getElementById('public');
      all.style.color = 'rgba(255, 255, 255, 0.756)';
      publicTab.style.color = 'rgba(255, 255, 255, 0.756)';
    }

    tabEle.style.color = 'green';
  } 

  render() {
    if (!this.props.user || !this.props.user.posts) return null;
    return (
      <>
        <div className="user-profile-cont">
          <div className="user-profile-info-cont">
            <div id="show-profile-img-cont"></div>
            <span className="show-username">{this.props.user.username}</span>
          </div>
        </div>

        <div className="user-show-tabs-cont">

          <div className="show-actions-cont">
            <span onClick={() => this.handleTabChange('all')} className="user-action-tabs" id="all">ALL</span>
            <span onClick={() => this.handleTabChange('public')} className="user-action-tabs" id="public">PUBLIC</span>
            <span className="user-action-tabs" id="hidden">HIDDEN</span>
          </div>

        </div>

        <div className="posts-bckg-cont">
            <div className="user-posts-cont">
              {
                this.props.user.posts.map(post => {
                  return <UserPostsItem key={post.id} post={post} fetchPost={this.props.fetchPost}/>
                })
              }
            </div>
        </div>
      </>
    )
  }
}

export default UserShow;