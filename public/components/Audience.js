import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from './common/Display';
import Join from './common/Join';

class Audience extends Component {
  render() {
    return (
      <div>
        <Display if={this.props.connectionStatus === 'connected'}>
          <h1>Join the Session</h1>
          <Join />
        </Display>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { connectionStatus: state.connection.status };
};


export default connect(mapStateToProps, null)(Audience);
