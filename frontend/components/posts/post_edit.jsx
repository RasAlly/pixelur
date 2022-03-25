import React from "react";

class PostEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      creator_id: null,
      id: null,
      description: null,
      photoUrl: null,
      title: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
      .then(({post}) => {
        this.setState({
          creator_id: post.creator_id,
          id: post.id,
          description: post.description,
          title: post.title,
          photoUrl: post.photoUrl
        })
      }) 
  }

  handleInput(e, handle) {
    console.log(this.state);
    this.setState({[handle]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const {title, description, id, creator_id} = this.state;
    this.props.updatePost({
      title: title,
      description: description,
      id: id, 
      creator_id: creator_id
    })
      .then(() => {
        console.log('updated');
      })
    
  }

  render() {
    const {post} = this.props

    if (!post || !this.state.id) {
      return null
    }

    const {title, description, photoUrl } = this.state;

    return(
      <div>
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

                  <input className="edit-description" placeholder="Add a description" onInput={(e) => this.handleInput(e, 'description')} defaultValue={description ? description : ''} />

                </div>

              </div>

            </div>
            <button className="edit-submit" onClick={this.handleSubmit}>Post To Community</button>
          </div>
      </div>
    )
  }
}

export default PostEdit;