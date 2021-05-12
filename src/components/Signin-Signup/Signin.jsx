import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './Signin.scss';

class Signin extends React.Component {
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

  submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' }); 
      this.props.history.push('/shop');
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    const { email, password, emailFocus, passwordFocus } = this.state;
    return (
      <div className="Signin">
        <form onSubmit={this.submitHandler} className="signin-container">
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
            <button type="submit">Sign In</button>
            <button
              type="button"
              className="googleSignin"
              onClick={() =>
                signInWithGoogle().then(() => this.props.history.push('/shop'))
              }
            >
              Signin With Google
            </button>
          </div>

          <p className="signin-bottom">
            you don't have an account! <Link to="/signup">create one</Link>{' '}
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);
