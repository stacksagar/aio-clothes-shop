import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { signupStart } from '../../Redux/actions';
import './Signup.scss';

class Signup extends React.Component {
  state = {
    signup: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    displayNameFocus: false,
    emailFocus: false,
    passwordFocus: false,
    confirmPasswordFocus: false,
  };

  onChangeHandler = (e) => {
    const { signup } = this.state;
    const { id, value } = e.target;
    this.setState({ signup: { ...signup, [id]: value } });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state.signup;
    if (password !== confirmPassword) {
      alert("password does't match!");
      return;
    }
    
    this.props.signupStart({ email, password, displayName });
    
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDocument(user, { displayName });
    //   this.setState({
    //     signup: {
    //       displayName: '',
    //       email: '',
    //       password: '',
    //       confirmPassword: '',
    //     },
    //   });
    //   this.props.history.push('/shop');
    // } catch (e) {
    //   alert(e.message);
    // }


  };

  render() {
    const {
      displayNameFocus,
      confirmPasswordFocus,
      emailFocus,
      passwordFocus,
    } = this.state;
    const { displayName, email, password, confirmPassword } = this.state.signup;
    return (
      <div className="Signup">
        <form onSubmit={this.submitHandler} className="signup-container">
          <h2>Sign Up</h2>

          <div className="form-group">
            <label
              htmlFor="displayName"
              className={`${displayNameFocus ? 'focus' : ''}`}
            >
              Your Name
            </label>
            <input
              onChange={this.onChangeHandler}
              onFocus={() => this.setState({ displayNameFocus: true })}
              onBlur={() =>
                !displayName && this.setState({ displayNameFocus: false })
              }
              type="displayName"
              value={displayName}
              id="displayName"
            />
          </div>

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

          <div className="form-group">
            <label
              htmlFor="confirmPassword"
              className={`${confirmPasswordFocus ? 'focus' : ''}`}
            >
              Confirm Password
            </label>
            <input
              onChange={this.onChangeHandler}
              onFocus={() => this.setState({ confirmPasswordFocus: true })}
              onBlur={() =>
                !confirmPassword &&
                this.setState({ confirmPasswordFocus: false })
              }
              type="password"
              value={confirmPassword}
              id="confirmPassword"
            />
          </div>

          <div className="button-group">
            <button type="submit">Sign UP</button>
          </div>

          <p className="signin-bottom">
            If you have already an account
            <Link to="/signin"> signin here.</Link>{' '}
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signupStart: (val) => dispatch(signupStart(val)),
});

export default connect(null, mapDispatchToProps)(withRouter(Signup));
