import React from "react";
import PostsIndexColumn from "./posts_index_column";


class PostsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newPostsArr: null,
      numColumns: 4
    }
  }

  componentDidMount() {
    const {fetchAllPosts} = this.props;
    
    fetchAllPosts().then(({posts}) => {
      this.createPostsColumns(posts, this.state.numColumns);
    })

    // on window width or height change update array length
  }

  // shouldComponentUpdate() {
  //   if (!this.state.newPostsArr) return true;
  //   return false;
  // }

  createPostsColumns(posts, numColumns) {
    const newPostsArr = [];
    if (numColumns < 1) return null;
    const columnLengths = Math.floor(posts.length / numColumns); // converts number of floors to length of each column

    for (let i = 0; i < posts.length; i += columnLengths) {
      const column = posts.slice(i, i + columnLengths);
      newPostsArr.push(column);
    }
    this.setState({numColumns: numColumns, newPostsArr: newPostsArr})
  }

  render() {
    if (!this.state.newPostsArr) return <div></div>;

    return (
      <div className="posts-index">
        {
          this.state.newPostsArr.map((posts, i) => {
            return <PostsIndexColumn postsColumn={posts} key={i} />
          })
        }
      </div>
    )
  }
}

export default PostsIndex;