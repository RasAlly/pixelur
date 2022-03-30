import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import ModalContainer from "./modal_container";

class Upload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoFile: null,
    }
    this.handleFile = this.handleFile.bind(this)
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  componentDidMount() {
    const createPostButton = document.getElementsByClassName('upload-btn')[0];
    const navBar = document.getElementsByClassName('nav-bar-container')[0];
    if (createPostButton && navBar) {
      createPostButton.style.display = 'none';
      navBar.style.background = 'transparent';
    }
  }

  componentWillUnmount() {
    const createPostButton = document.getElementsByClassName('upload-btn')[0];
    const navBar = document.getElementsByClassName('nav-bar-container')[0];
    if (createPostButton && navBar) {
      createPostButton.style.display = 'flex';
      navBar.style.background = 'url(https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png)';
    }
  }

  render() {
    return (
      <>
        {/* <NavBarContainer /> */}
        <ModalContainer />
        {/* <input type="file" onChange={this.handleFile}/> */}
      </>
    )
  }
}

export default Upload;