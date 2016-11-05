import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from './common/Display';
import Join from './common/Join';

class Audience extends Component {
  render() {
    const { connectionStatus, userMember, audience } = this.props;
    return (
      <div>
        <Display if={connectionStatus === 'connected'}>
          <Display if={userMember.name}>
            <h2>Welcome {userMember.name}</h2>
            <h2>There currently {audience.length} active members in this presentation</h2>
            <h6>Questions will appear below</h6>
          </Display>

          <Display if={!userMember.name}>
            <h1>Join the Session</h1>
            <Join />
          </Display>
        </Display>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    connectionStatus: state.connection.status,
    userMember: state.audience.userMember,
    audience: state.audience.audience
  };
};


export default connect(mapStateToProps, null)(Audience);
