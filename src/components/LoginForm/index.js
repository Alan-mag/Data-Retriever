import React from 'react';
import PropTypes from 'prop-types';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
// import ThemeDefault from '../../theme-default';

// may move to general styles
import './styles.scss';

// Components
import Registerform from '../RegisterForm';

// actions
import {startSignUp, login, startLogin} from '../../state/auth/actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);

    this.state = {
        email: props.email || '',
        password: props.password || '',
    }

    // class styles - try move to scss
     this.styles = {
      checkRemember: {
        labelStyle: {
          color: grey500,
        },
        iconStyle: {
          color: grey500,
          borderColor: grey500,
          fill: grey500
        }
      }
    };
  } // end constructor

  onLogin(e) {
    const {
      submitLogin,
      error
    } = this.props;
    e.preventDefault();

  //   if (this.error) { // needs to be more robust and specific
  //       console.log('error on login');
  //   } else {
      // this.setState(() => ({ error: '' }));
      submitLogin(this.state.email, this.state.password);
    //}
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  render() {
    return (
      <Paper className="paper-container">

        <form onSubmit={this.onLogin}>
          <span className="error-message">{this.props.error && <p className="form__error">{this.props.error}</p>}</span>
          <TextField
            type="text"
            autoFocus
            hintText="E-mail"
            floatingLabelText="E-mail"
            fullWidth={true}
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <TextField
            type="password"
            hintText="Password"
            floatingLabelText="Password"
            fullWidth={true}
            type="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <div>
            <Checkbox
              className="check-remember"
              label="Remember me"
              labelStyle={this.styles.checkRemember.labelStyle}
              iconStyle={this.styles.checkRemember.iconStyle}
            />

              <RaisedButton
                className="login-btn"
                label="Login"
                primary={true}
                type="submit" value="Submit"
              />
          </div>
        </form>
      </Paper>
    );
  }
  
};

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default LoginForm;