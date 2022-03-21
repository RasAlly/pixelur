import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({username: 'demoUser', password: 'demoUser'})
  }

  render() {
    // console.log(this.props);
    return (
      <div className='session-bckg'>

        <div className="session-container">
          <Link to='/' className='session-logo'>Pixelur</Link>
          <form className='session-form'>

            <input className='session-input' placeholder='Username' type="text" value={this.state.username} onChange={this.handleInput('username')}/>
            
            <br />

            <input className='session-input' placeholder='Password' type="password" value={this.state.password} onChange={this.handleInput('password')}/>

            <button className='demo-user-btn' onClick={this.handleDemo}>Demo User</button>
          </form>
            <button className='submit-button' onClick={this.handleSubmit}>Sign In!</button>
            <Link to="/signup" className='session-link'>need an account?</Link>
        </div>
      </div>
    );
  }
}

export default Login;
