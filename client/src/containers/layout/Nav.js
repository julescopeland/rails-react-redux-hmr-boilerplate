import React from 'react';
import { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NavActions from '../../actions/navActions';

class NavBar extends Component {
  render() {
    return (
      <div id="nav">
        <h1>App name</h1>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NavActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);