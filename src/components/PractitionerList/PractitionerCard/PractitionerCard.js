import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {Card, CardActions, CardHeader, FlatButton, IconButton} from 'material-ui';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import moment from 'moment';
import {openInfoPanel} from 'redux/modules/infoPanel';
import {bindActionCreators} from 'redux';


@connect(
    state => ({}),
    dispatch => bindActionCreators({openInfoPanel}, dispatch))
export default class PractitionerCard extends Component {

  selectTime() {
    // TODOS:
    // 1. Send data query with selected params
    // 2. Route to booking page and open.
    console.log("Selecting this time and opening booking page!");
  }

  openBio() {
    this.props.openInfoPanel(this.props.practitioner, this.props.practitioner.Slots[0].bookingTime, 'info')
  }
  openMoreTimes() {
    this.props.openInfoPanel(this.props.practitioner, this.props.practitioner.Slots[0].bookingTime, 'times')
  }

  addToFavourites() {
    // TODOS:
    // 1. Add practitioner to profile's list of favourites.
    console.log("Adding to favourites!");
  }

  seeMoreTimes() {
    // TODOS:
    // 1. GET additional times. (i.e. from current search forward)
    // 2. Open additional times panel.
    console.log("Selecting more times!")
  }

  render() {
    const {practitioner, id} = this.props;
    const name = 'Dr ' + practitioner.FirstName + ' ' + practitioner.LastName
    const practiceName = practitioner.Practice.Name
    const time = moment(practitioner.Slots[0].bookingTime).format('h:mm a')
    const time2 = moment(practitioner.Slots[1].bookingTime).format('h:mm a')
    const moreTimes = 'More Times';
    const styles = {
      card: {
        marginTop: '1px'
      }
    }
    return (
      <Card style={styles.card}>
        <CardHeader
          title={name}
          subtitle={practiceName}
          avatar={"http://lorempixel.com/100/" + id+1 + "/nature/"}
          onClick={::this.openBio} />
        <CardActions>
          <div style={{verticalAlign: 'middle'}}>
            <IconButton onClick={this.addToFavourites} iconStyle={{fill: '#C54269', verticalAlign: 'super'}} tooltip="Save to favourites?" touch={true} tooltipPosition="top-right">
              <ActionFavorite />
             </IconButton>
             <FlatButton style={{verticalAlign: 'super'}} onClick={::this.openBio} label={time}/>
             <FlatButton style={{verticalAlign: 'super'}} onClick={::this.openBio} label={time2}/>
             <FlatButton style={{float: 'right', marginTop: '9px'}} onClick={::this.openMoreTimes} label={moreTimes}/>
          </div>
        </CardActions>
      </Card>
    );
  }
}
