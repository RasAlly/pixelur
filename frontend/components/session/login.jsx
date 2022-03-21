import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    // console.log(this.props);
    return (
      <div className='session-bckg'>

        <div className="session-container">
          <h2 className='signin-up-logo'>Pixelur</h2>
          <form className='signin-form'>

            <input className='session-input' placeholder='Username' type="text" value={this.state.username} onChange={this.handleInput('username')}/>
            
            <br />

            <input className='session-input' placeholder='Password' type="password" value={this.state.password} onChange={this.handleInput('password')}/>

          </form>
              <button className='submit-button' onClick={this.handleSubmit}>Sign In!</button>
        </div>
      </div>
    );
  }
}

export default Login;
