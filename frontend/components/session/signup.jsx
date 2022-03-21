import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='session-bckg'>

        <div className='session-container'>
          <h2 className='signin-up-logo'>Pixelur</h2>
          <form className='signin-form'>

           
              <input className='session-input' placeholder='Username' type="text" value={this.state.username} onChange={this.handleInput('username')}/>
           
            <br />
         
              <input className='session-input' placeholder='Email' type="text" value={this.state.email} onChange={this.handleInput('email')}/>
     
            <br />
     
              <input className='session-input' placeholder='Password' type="password" value={this.state.password} onChange={this.handleInput('password')}/>

            <br />
            
          </form>
              <button className='submit-button' onClick={this.handleSubmit}>Next</button>
        </div>
        
      </div>
    )
  }
}

export default Signup