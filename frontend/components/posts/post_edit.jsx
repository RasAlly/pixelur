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

              <div className="title-div">

                <input className="edit-title" type="text" placeholder='Give your post a title...' defaultValue={title ? title : ''} onChange={(e) => this.handleInput(e, 'title')} />

              </div>


              <div className="img-content">

                <div className="img-div">

                  <div className="img-wrapper">

                    <img className="edit-img" src={photoUrl} alt="edit-img" />

                  </div>
                  
                </div>

                <div className="description-div">

                  <div className="edit-description" contenteditable="true" placeholder="Add a description"  onInput={(e) => this.handleInput(e, 'description')} >{description ? description : ''}</div>

                </div>

              </div>

            </div>
              <button className="edit-submit" onClick={this.handleSubmit}>Post To Community</button>
          </div>
        )}
      </div>
    )
  }
}

export default PostEdit;