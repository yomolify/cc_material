import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import FlatButton from 'material-ui/lib/flat-button';
import {openLoginModal} from 'redux/modules/login';
import {openSignupModal} from 'redux/modules/signup';

@connect(
    state => ({}),
    dispatch => bindActionCreators({openLoginModal, openSignupModal}, dispatch))
export default class NavBar extends Component {
  static propTypes = {
  }

  render() {
    const {openLoginModal, openSignupModal} = this.props;
    const styles = {
    toolbar: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around'
    }
  }
    return (
      <Toolbar style={styles.toolbar}>
          <FlatButton label="I'm a Patient" />
          <FlatButton label="I'm a Provider" />
          <FlatButton onClick={openLoginModal} label="Log In" />
          <FlatButton onClick={openSignupModal} label="Sign Up" />
      </Toolbar>
    );
  }
}
