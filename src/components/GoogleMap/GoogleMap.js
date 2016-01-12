import React, {
  Component
}
from 'react/addons';
import {GeoMap} from 'components';
const und = 'undefined';
import {connect} from 'react-redux';

const geolocation = (
  und !== typeof window && navigator && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
    },
  }
);

export default class GoogleMap extends Component {
  state = {
    center: {
      lat: 49.249383,
      lng: -123.115676
    }
  }
  componentWillMount() {
    geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const centerNew = this.state.center;
      centerNew.lat = lat;
      centerNew.lng = lng;
      this.setState({
        center: centerNew
      });
    });
  }

  render() {
    const {
      center
    } = this.state;
    const zoom = 13;
    return (
      <div>
      {!this.props.userProfile &&
        <GeoMap center={center} zoom={zoom} />}
      </div>
    );
  }
}
