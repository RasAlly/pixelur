import React from "react";
import{ Link, withRouter }from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      photoFile: null
    }
    this.handleFile = this.handleFile.bind(this)
  }

  handleFile(e) {
    //  this.setState({photoFile: e.currentTarget.files[0]}, this.handleSubmit(e))
     this.setState({photoFile: e.currentTarget.files[0]}, () => {
        let formData = new FormData();
        formData.append('post[photo]', this.state.photoFile)
        formData.append('post[title]', this.state.title)

        this.props.createPost(formData)
          .then(() => {
            const id = this.props.post.id
            this.props.history.push(`/post/${id}/edit`);
          })
     })
  }

  render() {
    return (
      <>
        <div className="modal-background"></div>

        <div className="modal-container-page-background">
          <div className="modal-container">

            <div className='upload-drop'>
              <svg className="observatory-svg" width="208" height="118" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.5 34L-25 0l-22 124.5h255L147 103 93.5 78.5 36.5 34z" fill="#37A6C3"/><path d="M36.5 34L-25 0l-7 18 36 4.5L36.5 34zm57 44.5h-67L63 82l14 20.5L71 83h7l12 39.5V83h3.5L114 96.5v28l20-23 74 23-61-21.5-53.5-24.5z" fill="#EFF1F4"opacity=".24"/><path fillRule="evenodd" clipRule="evenodd" d="M32.025 17.792c-.34-.054-1.091 29.067-.872 29.469.218.401 1.37.292 1.506-.08.049-.135-.294-29.335-.634-29.389z" fill="#4B391E"/><path fillRule="evenodd" clipRule="evenodd" d="M38.345 28.086c.618 6.653-1.912 10.003-6.453 10.003-4.182 0-7.138-3.358-6.452-10.003.597-5.791 4.269-11.956 5.862-14.2a.708.708 0 0 1 1.181 0c1.594 2.244 5.324 8.409 5.862 14.2z" fill="#257277"/><path fillRule="evenodd" clipRule="evenodd" d="M38.345 28.086c.618 6.653-1.912 10.003-6.453 10.003-4.182 0-7.138-3.358-6.452-10.003.597-5.791 4.269-11.956 5.862-14.2a.708.708 0 0 1 1.181 0c1.594 2.244 5.324 8.409 5.862 14.2z" fill="#000" fillOpacity=".48"/><path fillRule="evenodd" clipRule="evenodd" d="M24.746 25.81c-.34-.053-1.09 29.067-.872 29.469.219.401 1.371.292 1.507-.08.049-.134-.295-29.335-.635-29.388z" fill="#65442A"/><path fillRule="evenodd" clipRule="evenodd" d="M31.066 36.105c.618 6.653-1.912 10.003-6.453 10.003-4.182 0-7.138-3.358-6.453-10.003.598-5.792 4.269-11.957 5.863-14.2a.708.708 0 0 1 1.18 0c1.594 2.243 5.325 8.408 5.863 14.2z" fill="#257277"/><path fillRule="evenodd" clipRule="evenodd" d="M31.066 36.105c.618 6.653-1.912 10.003-6.453 10.003-4.182 0-7.138-3.358-6.453-10.003.598-5.792 4.269-11.957 5.863-14.2a.708.708 0 0 1 1.18 0c1.594 2.243 5.325 8.408 5.863 14.2z" fill="#000" fillOpacity=".4"/><path fillRule="evenodd" clipRule="evenodd" d="M112.913 82.7c-.251-.04-.805 21.462-.644 21.758.162.297 1.013.216 1.113-.059.036-.099-.218-21.66-.469-21.7z" fill="#4B391E"/><path fillRule="evenodd" clipRule="evenodd" d="M117.58 90.3c.456 4.913-1.412 7.387-4.765 7.387-3.088 0-5.271-2.48-4.764-7.386.441-4.276 3.152-8.829 4.328-10.486a.523.523 0 0 1 .872 0c1.177 1.657 3.932 6.21 4.329 10.486z" fill="#257277"/><path fillRule="evenodd" clipRule="evenodd" d="M117.58 90.3c.456 4.913-1.412 7.387-4.765 7.387-3.088 0-5.271-2.48-4.764-7.386.441-4.276 3.152-8.829 4.328-10.486a.523.523 0 0 1 .872 0c1.177 1.657 3.932 6.21 4.329 10.486z" fill="#000" fillOpacity=".48"/><path fillRule="evenodd" clipRule="evenodd" d="M122.182 91.86c-.252-.04-.806 21.462-.644 21.758.161.297 1.012.216 1.112-.059.036-.099-.217-21.66-.468-21.7z" fill="#65442A"/><path fillRule="evenodd" clipRule="evenodd" d="M126.848 99.46c.456 4.913-1.411 7.387-4.764 7.387-3.088 0-5.271-2.479-4.765-7.386.441-4.276 3.152-8.829 4.329-10.485a.523.523 0 0 1 .872 0c1.176 1.656 3.931 6.209 4.328 10.485z" fill="#257277"/><path fillRule="evenodd" clipRule="evenodd" d="M126.848 99.46c.456 4.913-1.411 7.387-4.764 7.387-3.088 0-5.271-2.479-4.765-7.386.441-4.276 3.152-8.829 4.329-10.485a.523.523 0 0 1 .872 0c1.176 1.656 3.931 6.209 4.328 10.485z" fill="#000" fillOpacity=".4"/><path fillRule="evenodd" clipRule="evenodd" d="M150.774 93.252c-.363-.057-1.165 31.047-.931 31.476.233.429 1.464.312 1.609-.086.052-.143-.315-31.333-.678-31.39z" fill="#65442A"/><path fillRule="evenodd" clipRule="evenodd" d="M157.525 104.248c.66 7.106-2.042 10.685-6.892 10.685-4.467 0-7.625-3.587-6.893-10.685.639-6.186 4.56-12.772 6.262-15.168a.757.757 0 0 1 1.262 0c1.702 2.397 5.687 8.982 6.261 15.168z" fill="#257277"/><path fillRule="evenodd" clipRule="evenodd" d="M157.525 104.248c.66 7.106-2.042 10.685-6.892 10.685-4.467 0-7.625-3.587-6.893-10.685.639-6.186 4.56-12.772 6.262-15.168a.757.757 0 0 1 1.262 0c1.702 2.397 5.687 8.982 6.261 15.168z" fill="#000" fillOpacity=".4"/><path d="M98.5 37.5v13a2.006 2.006 0 0 1-2 2h-2v-15a12.8 12.8 0 0 0-.96-4.92l-.06-.06 3.02-3.02a16.852 16.852 0 0 1 2 8z" fill="#EFF1F4"/><path d="M96.53 22.5c1.93 1.92 2.36 4.61.97 6-1.39 1.39-4.08.96-6-.97s-2.36-4.61-.97-6c1.39-1.39 4.08-.95 6 .97z" fill="#6FDEF9"/><path d="M97.5 28.5l-1 1-3.02 3.02-5.98 5.98V37a16.408 16.408 0 0 0-2.98-9.46l5.01-5.01 1-1c-1.39 1.39-.95 4.08.97 6s4.61 2.36 6 .97z" fill="#454545"/><path d="M94.5 37.5v15h-7v-14l5.98-5.98.06.06a12.8 12.8 0 0 1 .96 4.92z" fill="#D1D5E0"/><path d="M87.5 52.5h7a6 6 0 0 1-6 6h-24a6 6 0 0 1-6-6h29z" fill="#454545"/><path d="M93.52 58.5l-.01 9-5.68-2-11.33-4-12 4-5.99 2-.01-9h35.02z" fill="#D1D5E0"/><path d="M87.83 65.5l5.67 2v11h-4V71a2.5 2.5 0 0 0-5 0v7.5h-26v-11l6-2 12-4 11.33 4z" fill="#EFF1F4"/><path d="M89.53 22.53l-5.01 5.01A16.48 16.48 0 0 0 71 20.5h10.5c2.791-.006 5.54.681 8 2l.03.03z" fill="#D1D5E0"/><path d="M89.5 71v7.5h-5V71a2.5 2.5 0 0 1 5 0z" fill="#FF7E01"/><path d="M87.5 38.5v14h-8v-14a13 13 0 0 0-13-13h-7l-.17-.17a16.513 16.513 0 0 1 23.34 0A16.538 16.538 0 0 1 87.5 37v1.5z" fill="#EFF1F4"/><path d="M79.5 38.5v14h-9v-13a4 4 0 1 0-8 0v6h-8V37a16.479 16.479 0 0 1 4.83-11.67l.17.17h7a13 13 0 0 1 13 13z" fill="#D1D5E0"/><path d="M70.5 45.5h-4v7h4v-7zm0-6v6h-8v-6a4 4 0 1 1 8 0zm-4 6h-4v7h4v-7z" fill="#FF7E01"/><path d="M58.5 45.5h4v7h-8v-7h4z" fill="#D3D3D3"/><path d="M63.5 70.5h-2v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-24-25.312h-2v34.313h2V45.188z" fill="#454545"/><path d="M48.5 79.5h-2v-34a1 1 0 0 1 1-1h23v2h-22v33z" fill="#454545"/><path d="M71.5 51.5h-24v2h24v-2zm-17 4h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2zm5-30h-2v6h2v-6z" fill="#454545"/><path d="M71.5 52.5h-2v-13a3 3 0 0 0-6 0v13h-2v-13a5 5 0 1 1 10 0v13z" fill="#454545"/><path d="M67.5 45.5h-2v7h2v-7z" fill="#454545"/><path d="M76.5 48.5h-2v-10a8.009 8.009 0 0 0-8-8v-2a10.011 10.011 0 0 1 10 10v10z" fill="#EFF1F4"/><path d="M93.833 23.783l-1 1 1.414 1.414 1-1-1.414-1.414z" fill="#000" fillOpacity=".24"/></svg>
              <div className="drop-img-dashed" >
              </div>
                <span id="drop-img-text">Drop images here</span>
            </div>

            <div className="upload-input">

              <div className="options-cont" >
                <div className="choose-img-cont">
                    <label className="choose-img"> Choose Photo/Video
                      <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-photo.1ded6245836b46ed24022036f33a84e8.svg" id="icon"/>
                      <input type="file" onChange={this.handleFile} />
                    </label>
                </div>
                <div className="divider-cont pop-up-actions">
                  <span className="line-divider pop-up-actions"></span>
                    or                                                  
                  <span className="line-divider pop-up-actions"></span>
                </div>
              </div>
              <Link to='/' className="modal-exit-img">
                <img src="https://s.imgur.com/desktop-assets/desktop-assets/upload_dialog_close.a910cf045da9c85b3de5ba520f62b2d3.svg" className="modal-exit-img"/>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

export default withRouter(Modal);