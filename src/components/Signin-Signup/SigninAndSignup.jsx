import React from 'react';
import { Link } from 'react-router-dom';
import './SigninAndSignup.css';

export class SigninAndSignup extends React.Component {
  state = {
    email: '',
    password: '',
    emailFocus: false,
    passwordFocus: false,
  };

  onChangeHandler = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { email, password, emailFocus, passwordFocus } = this.state;
    return (
      <div className="SigninAndSignup">
        <div className="signin">
          <h2>Sign in</h2>

          <div className="form-group">
            <label htmlFor="email" className={`${emailFocus ? 'focus' : ''}`}>
              Email
            </label>
            <input
              onChange={this.onChangeHandler}
              onFocus={() => this.setState({ emailFocus: true })}
              onBlur={() => !email && this.setState({ emailFocus: false })}
              type="email"
              value={email}
              id="email"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="password"
              className={`${passwordFocus ? 'focus' : ''}`}
            >
              Password
            </label>
            <input
              onChange={this.onChangeHandler}
              onFocus={() => this.setState({ passwordFocus: true })}
              onBlur={() =>
                !password && this.setState({ passwordFocus: false })
              }
              type="password"
              value={password}
              id="password"
            />
       </div>
       
          <div className="button-group">
            <button type="submit">Sign in</button>
            <button type="button">Signin with google</button>
          </div>

          <p className="signin-bottom">
            you don't have an account! <Link to="/signup">create one</Link>{' '}
          </p>
        </div>
      </div>
    );
  }
}
