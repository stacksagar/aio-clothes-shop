import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { emailSigninStart, googleSigninStart } from '../../Redux/actions';
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
    const { emailSigninStart } = this.props;

    emailSigninStart(email, password);
  };

  render() {
    const { email, password, emailFocus, passwordFocus } = this.state;
    const { googleSigninStart } = this.props;
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
              onClick={googleSigninStart}
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

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(withRouter(Signin));
