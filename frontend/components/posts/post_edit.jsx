import React from "react";

class PostEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {post: null}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
      .then(({post}) => this.setState({post}))
  }

  handleInput(e, handle) {
    console.log(e);  
    () => {
      this.setState({post: {[handle]: e.target.value }})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updatePost(this.state.post)
      .then(() => {
        console.log('updated');
      })
    
  }

  render() {
    const {post} = this.props

    if (!post || !this.state.post) {
      return null
    }

    const {title, description, photoUrl } = this.state.post;

    return(
      <div>
        {post && (
          <div className="edit-post">
            
            <div className='edit-post-cont'>

              <input className="edit-title" type="text" placeholder='add a title' defaultValue={title ? title : ''} onChange={(e) => this.handleInput(e, 'title')} />
              <img className="edit-img" src={photoUrl} alt="edit-img" />
              <textarea className="edit-description" defaultValue={description ? description : ''} onChange={(e) => this.handleInput(e, 'description')} />

            </div>
              <button className="edit-submit" onClick={this.handleSubmit}>Post To Community</button>
          </div>
        )}
      </div>
    )
  }
}

export default PostEdit;