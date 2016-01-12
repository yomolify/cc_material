import React, { Component } from 'react';
import { Link } from 'react-router';
import { SearchBar, PractitionerList, GoogleMap, InfoPanel, LoginModal, SignupModal } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';


@connect(
    state => ({infoPanel: state.infoPanel.infoPanel}))
export default class Results extends Component {

  render() {
  	const {infoPanel} = this.props;
  	const styles = {
  		results: {
  			height: '0px'
  		},
  		practitionerList: {
  			position: 'absolute',
  			top: '110px',
  			bottom: '0',
  			overflow: 'scroll',
  			zIndex: '-1',
  			width: '25%',
  		},
  		googleMap: {
  			position: 'absolute',
  			left: '25%',
  			top: '111px',
  			width: '75%',
  			zIndex: '-2'
  		},
  		infoPanel: {
  			position: 'absolute',
  			top: '10.6%',
  			left: '25.5%',
  			width: '40%',
  			zIndex: '1',
  		}
  	}
    return (
      <div style={styles.results}>
      	<div>
	        <SearchBar/>
      	</div>
        <div style={styles.practitionerList}>
	        <PractitionerList/>
	    </div>
	    {infoPanel && <div style={styles.infoPanel}>
	    	<InfoPanel/>
	    </div>}
	    <div style={styles.googleMap}>
	    	<GoogleMap/>
	    </div>
	    <LoginModal/>
	    <SignupModal/>
      </div>
    );
  }
}
