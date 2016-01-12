import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {cancel} from 'redux/modules/infoPanel';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/lib/raised-button';
import moment from 'moment';

@connect(
    state => ({selectedPractitioner: state.infoPanel.selectedPractitioner, selectedTime: state.infoPanel.selectedTime, selectedType: state.infoPanel.selectedType}),
    dispatch => bindActionCreators({cancel}, dispatch))
export default class InfoPanel extends Component {
  static propTypes = {
  }

  state = {
    slideIndex: 0
  }

  handleTabChange = (value) => this.setState({slideIndex: value});

  render() {
    const {selectedPractitioner, selectedTime, selectedType, cancel} = this.props;
    const name = 'Dr. ' + selectedPractitioner.FirstName + ' ' + selectedPractitioner.LastName
    const specialization = selectedPractitioner.Specialization
    console.log(selectedPractitioner.Slots)
    const time = moment(selectedPractitioner.Slots[0].bookingTime).format('ddd, h A')
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      slide: {
        padding: 10,
      },
      tabContainer: {
        marginRight: '0px',
      },
      tabs: {
        color: 'black',
        marginRight: '0px',
        backgroundColor: 'rgba(200, 200, 200, 0.52)',
      },
      tabFont: {
        color: 'black'
      },
      bookNow: {
        width: '47.5%'
      },
      buttonRow: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        marginRight: '-0.45em'
      }
    };
    console.log(this.props)
    return (
       <Card>
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
          <CardTitle title={name} subtitle={specialization}/>
          <CardActions>
            <Tabs
              onChange={this.handleTabChange}
              value={this.state.slideIndex}
              tabItemContainerStyle={styles.tabs}
              style={styles.tabContainer}
            >
              <Tab label="Bio" value={0} />
              <Tab label="Practice" value={1} />
              <Tab label="More Times" value={2} />
            </Tabs>
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleTabChange}
            >
              <div>
                <h2 style={styles.headline}>Tabs with slide effect</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </div>
              <div style={styles.slide}>
                slide n°2

              </div>
              <div style={styles.slide}>
                slide n°3
              </div>
            </SwipeableViews>
          </CardActions>
          <CardActions style={styles.buttonRow}>
             <FlatButton onClick={cancel} style={styles.bookNow} label="Cancel" />
             <RaisedButton onClick={cancel} style={styles.bookNow} label={time} primary={true} />
          </CardActions>
        </Card>
    );
  }
}
