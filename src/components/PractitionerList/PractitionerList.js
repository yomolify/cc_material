import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import PractitionerCard from './PractitionerCard/PractitionerCard';

@connect(
    state => ({practitioners: state.practitioners.data}),
    dispatch => bindActionCreators({}, dispatch))

export default class PractitionerList extends Component {
  static propTypes = {
  };

  render() {
    let practitionerCardNodes;
    const {practitioners} = this.props;
    const styles = {
      practitionerList: {
        zIndex: '-1',
        position: 'relative',
      }
    }
    if (practitioners.constructor === Array) {
      practitionerCardNodes = practitioners.map(function(practitioner, index) {
        return (
          <PractitionerCard key={index} id={index} practitioner={practitioner}/>
        )
      })
    }
    return (
      <div style={styles.practitionerList}>
        {practitionerCardNodes}
      </div>
    );
  }
}
