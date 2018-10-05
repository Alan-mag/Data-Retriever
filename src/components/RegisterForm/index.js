import React from "react";
import PropTypes from 'prop-types';
import moment from 'moment';
import {grey500} from 'material-ui/styles/colors';

// material components
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import FlatButton from 'material-ui/FlatButton';

// my material module doesn't include all of these
// import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
// import DialogActions from 'material-ui/DialogActions';
// import DialogContent from 'material-ui/DialogContent';
// import DialogTitle from 'material-ui/DialogTitle';

// import {Button,
//         Dialog,
//         DialogActions,
//         DialogContent,
//         DialogContentText,
//         DialogTitle,
//       } from 'material-ui';

// components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import User from '../../logics/User';

// styles
import './styles.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: props.user ? props.user.username : '',
      password: props.user ? props.user.password : '',
      email: props.user ? props.user.email : '',
      createdAt: props.user ? props.user.createdAt : moment().format(),
      error: '',
      open: false,
    }
  }

  handleSubmit(e) {
    const {
      submitSignUp,
    } = this.props;
    e.preventDefault();

    if (!this.state.username) {
      console.log('error');
      this.setState(() => ({ error: 'Please provide name and password' }));
    } else {
      this.setState(() => ({ error: '' }));

      const newPerson = new User({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        createdAt: moment().format(),
      });

      submitSignUp(newPerson);
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onNameChange = (e) => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  };

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
      <div>
        <FlatButton
          onClick={this.handleClickOpen}
          className="flat-button"
          label="Register"
          icon={<PersonAdd color={grey500} />}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          className="registration-window"
        >
          <form className="registration-form" onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <TextField 
              type="text"
              placeholder="Name"
              autoFocus
              className="text-input"
              value={this.state.username}
              onChange={this.onNameChange}
            />
            <TextField 
              type="password"
              placeholder="Password"
              className="text-input"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <TextField 
              type="email"
              placeholder="Email"
              className="text-input"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            <div className="form-buttons">
              <FlatButton
                className="register-btn"
                label="Register"
                primary={true}
                type="submit" value="Submit"
              />
              <FlatButton onClick={this.handleClose} color="primary">
                Cancel
              </FlatButton>
            </div>
          </form>
        </Dialog>
      </div>
    )
  }
};

Register.propTypes = {
  submitSignUp: PropTypes.func.isRequired,
};

export default Register;