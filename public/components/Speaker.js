import React, { Component } from 'react';
import { connect } from 'react-redux';

import Display from './common/Display';
import JoinSpeaker from './common/Join_Speaker';
import Attendance from './common/Attendance';
import Questions from './common/Questions';

class Speaker extends Component {
  render() {
    const { connectionStatus, userMember } = this.props;

    return (
      <div>
        <Display if={connectionStatus === 'connected'}>
          <Display if={userMember.name && userMember.typeOfUser === 'speaker'}>
            <Questions />
            <Attendance />
          </Display>

          <Display if={!userMember.name}>
            <h2>Set Up Your Presentation</h2>
            <JoinSpeaker />
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
  };
};

export default connect(mapStateToProps, null)(Speaker);
