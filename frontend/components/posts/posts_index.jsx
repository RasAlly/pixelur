import React from "react";
import PostsIndexColumn from "./posts_index_column";


class PostsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newPostsArr: null,
      allColumns: null,
      numColumns: 4
    }

    this.changeNumColumns = this.changeNumColumns.bind(this);
    this.updatePostsColumns = this.updatePostsColumns.bind(this);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.changeNumColumns)
  }

  componentDidMount() {
    const {fetchAllPosts} = this.props;
    
    fetchAllPosts().then(({posts}) => {
      this.createPostsColumns(posts, this.state.numColumns);
    })

    // on window width or height change update array length
    window.addEventListener('resize', (e) => {
       this.changeNumColumns(e.target.innerWidth);
    })
  }

  changeNumColumns(width) {
    let newNumColumns = 5;

    if (width < 700) {
      newNumColumns = 2;
    } else if (width < 900) {
      newNumColumns = 3;
    } else if (width < 1600) {
      newNumColumns = 4;
    };

    this.updatePostsColumns(newNumColumns)
  }

  updatePostsColumns(newNumColumns) {
    this.setState({
      newPostsArr: [...this.state.allColumns].slice(0, newNumColumns), 
      numColumns: newNumColumns
    });
  }

  createPostsColumns(posts, numColumns) {
    const newPostsArr = [];
    if (numColumns < 1) return null;
    const columnLengths = Math.round(posts.length / numColumns); // converts number of floors to length of each column
    for (let i = 0; i < posts.length; i += columnLengths) {
      const column = posts.slice(i, i + columnLengths);
      newPostsArr.push(column);
    }

    this.setState({numColumns: numColumns, newPostsArr: newPostsArr, allColumns: newPostsArr})
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