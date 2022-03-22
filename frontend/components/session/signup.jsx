import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      username: '',
      email: '',
      password: '',
      isErrors: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearErrors = this.handleClearErrors.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.history.push('/'))
    .catch(() => this.setState({isErrors: true}))
  }

  handleClearErrors() {
    this.setState({isErrors: false});
    this.props.clearErrors()
  }

  render() {
    return (
      <div className='session-bckg'>

        <div className='session-container'>
          <Link to='/' className='session-logo'>Pixelur</Link>
          <form className='session-form'>

            {
              this.state.isErrors ? <div className='session-errors'>{this.props.errors[0]}</div> : this.handleClearErrors
            }

              <input className='session-input' placeholder='Username' type="text" value={this.state.username} onChange={this.handleInput('username')}/>
           
            <br />
         
              <input className='session-input' placeholder='Email' type="text" value={this.state.email} onChange={this.handleInput('email')}/>
     
            <br />
     
              <input className='session-input' placeholder='Password' type="password" value={this.state.password} onChange={this.handleInput('password')}/>

            <br />
            
          </form>
            <button className='submit-button' onClick={this.handleSubmit}>Next</button>
            <Link to="/login" className='session-link'>sign in</Link>
        </div>
        
      </div>
    )
  }
}

export default Signup