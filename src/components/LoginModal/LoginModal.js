import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import {hide, signin} from 'redux/modules/login';
import TextField from 'material-ui/lib/text-field';

@connect(
    state => ({loginModal: state.login.loginModal}),
    dispatch => bindActionCreators({hide, signin}, dispatch))
export default class LoginModal extends Component {
  static propTypes = {
  }

  handleClose() {
    this.props.hide()
  }
  handleSignin() {
    this.props.signin();
  }

  render() {
    const styles = {
      modal: {
        width: '16.7%'
      }
    };
    const {loginModal} = this.props
    console.log('loginModal', loginModal)
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={::this.handleClose} />,
      <FlatButton
        label="Log In"
        primary={true}
        keyboardFocused={true}
        onTouchTap={::this.handleSignin}
        type="submit" />,
    ];
    return (
      <Dialog

          title="Login"
          actions={actions}
          modal={false}
          open={loginModal}
          onRequestClose={::this.handleClose}
          contentStyle={styles.modal}>
          <form>
            <TextField ref="email" hintText="Email"/>
            <TextField ref="password" hintText="Password"/>
          </form>
          <br/>
          <br/>
        </Dialog>
    );
  }
}
