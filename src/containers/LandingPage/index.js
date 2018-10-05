import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {grey500, white} from 'material-ui/styles/colors';
import Help from 'material-ui/svg-icons/action/help';
import ThemeDefault from '../../theme-default';

// Components
import Register from '../../components/RegisterForm';
import LoginForm from '../../components/LoginForm';

// may move to general styles
import './styles.scss';

// actions
import {startSignUp, login, startLogin} from '../../state/auth/actions';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error })
  }

  onSubmit = (user) => {
    console.log(user)
    this.props.startRegister(user);
  };

  onLogin = (email, password) => {
    const obj = {email: email, password: password};
    this.props.startLogin(obj);
  };
  
  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div className="login-container">
            <LoginForm error={this.props.error} submitLogin={this.onLogin} />
            <div className="buttons-div">
              <Register submitSignUp={this.onSubmit}></Register>
      
              <FlatButton
                className="flat-button"
                label="Forgot Password?"
                icon={<Help color={grey500}/>}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

const mapStateToProps = (state) => ({
  user: null,
  error: state.authReducer.error || '',
});

const mapDispatchToProps = (dispatch) => ({
  startRegister: (user) => dispatch(startSignUp(user)),
  startLogin: (user) => dispatch(startLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);