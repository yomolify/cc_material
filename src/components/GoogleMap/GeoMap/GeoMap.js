import React, {
  Component, PropTypes
}
from 'react';
import {
  Gmaps, Marker, InfoWindow, Circle, Gps
}
from 'react-gmaps';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class GeoMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.any.isRequired,
      lng: PropTypes.any.isRequired,
    }),
    zoom: PropTypes.number.isRequired
  }
  state = {
    infoShow: false
  }

  componentWillReceiveProps(nextProps) {
    const newCenter = nextProps.center;
    this.setState({
      center: newCenter
    });
  }
  shouldComponentUpdate = shouldPureComponentUpdate;

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onMouseOver() {
    this.setState({
      infoShow: !this.state.infoShow
    });
  }
  onMapMouseOver() {
    this.setState({
      infoShow: true
    });
  }
  onMapMouseOut() {
    this.setState({
      infoShow: false
    });
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        styles={[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]}
        width={'100%'}
        height={'72.4em'}
        lat={this.props.center.lat}
        lng={this.props.center.lng - 0.075}
        zoom={this.props.zoom}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}
        scrollwheel={false}
        >
        <Gps
        lat={this.props.center.lat}
        lng={this.props.center.lng}
        onDragEnd={this.onDragEnd}
        onMouseOver={::this.onMouseOver} />
        <Marker
        lat={49.263081}
        lng={-123.122133}
        onDragEnd={this.onDragEnd}
        onMouseOver={::this.onMouseOver} />
        <Marker
        lat={49.279229}
        lng={-123.128414}
        onDragEnd={this.onDragEnd}
        onMouseOver={::this.onMouseOver} />
        <Marker
        lat={49.280811}
        lng={-123.017750}
        onDragEnd={this.onDragEnd}
        onMouseOver={::this.onMouseOver} />
      </Gmaps>
    );
  }
}
 //        <InfoWindow
 //          lat={this.props.center.lat}
 //          lng={this.props.center.lng}
 //          content={'You'}
 //          onCloseClick={::this.onCloseClick} />

 //        <InfoWindow
 //          lat={49.273667}
 //          lng={-123.122521}
 //          content={'Atlantis Dental Centre'}
 //          onCloseClick={::this.onCloseClick} />
 //        <InfoWindow
 //          lat={49.268360}
 //          lng={-123.166454}
 //          content={'Kitisilano Dental Group'}
 //          onCloseClick={::this.onCloseClick} />