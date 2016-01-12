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
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker';

@connect(
    state => ({}),
    dispatch => bindActionCreators({}, dispatch))
export default class NavBar extends Component {
  static propTypes = {
  }

  render() {
    const styles = {
    toolbar: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around',
      boxShadow: '4px 10px 37px -19px rgba(0,0,0,0.6)'
    },
    field: {
      width: '20%'
    }
  }

    return (
      <Toolbar style={styles.toolbar}>
          <TextField style={styles.field} hintText="Dentist" />
          <DatePicker style={styles.field} hintText="Date" />
          <TimePicker style={styles.field}  format="ampm" hintText="Time" />
          <RaisedButton style={styles.field} label="Search" primary={true} />
      </Toolbar>
    );
  }
}
