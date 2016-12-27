import React from 'react';
import { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/homeActions';

import NavBar from './layout/Nav'

class HomeApp extends Component {
  render() {
    return (
      <div id="home">
        <NavBar />
        <h1>Home app</h1>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp);