import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import * as actions from '../actions';
import * as styles from '../css/styles.scss';

import Header from './common/Header';

class App extends Component {
  // componentWillMount handles incoming data from server
  componentWillMount() {
    // pass io the socket server it should connect to
    const socket = io();

    // define connect handler
    socket.on('connect', () => {
      this.props.makeConnection(socket);

      // check to see if there is an existing userMember in storage
      if (sessionStorage.storedMember) {
        const storedMember = JSON.parse(sessionStorage.storedMember);
        if (storedMember.typeOfUser === 'speaker') {
          const speakerName = storedMember.name;
          const title = sessionStorage.title;
          socket.emit('speakerJoin', { speakerName, title });
        } else {
          // storedMember is just a member, not speaker
          const memberName = storedMember.name;
          // emit join with above data
          socket.emit('join', { memberName });
        }
      }
    });

    // define disconnect handler
    socket.on('disconnect', () => {
      this.props.disconnect();
    });

    // define welcome handler
    socket.on('welcome', ({ title, speaker, questions, currentQuestion, results }) => {
      this.props.setTitle(title);
      this.props.setSpeaker(speaker);
      this.props.setQuestions(questions);
      this.props.setCurrentQuestion(currentQuestion);
      this.props.updateResults(results);
    });

    // define joined handler
    socket.on('joined', userMember => {
      this.props.joinPresentationSuccess(userMember);

      // store new user in sessionStorage
      sessionStorage.storedMember = JSON.stringify(userMember);
    });

    socket.on('audienceUpdate', audience => {
      this.props.updateAudience(audience);
    });

    socket.on('startPresentation', ({ speaker, title }) => {
      this.props.setTitle(title);
      this.props.setSpeaker(speaker);
    });

    socket.on('ask', question => {
      this.props.setCurrentQuestion(question);
      this.props.updateCurrentAnswer('');
      this.props.updateResults({ a: 0, b: 0, c: 0, d: 0 });
      // reset user's previous answer in sessionStorage
      // when a new question is asked
      sessionStorage.answer = '';
    });

    socket.on('results', results => {
      this.props.updateResults(results);
    });

    socket.on('end', ({ title, speaker }) => {
      this.props.setTitle(title);
      this.props.setSpeaker(speaker);
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          status={this.props.connectionStatus}
          title={this.props.presentationTitle}
          speaker={this.props.speaker}
        />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    connectionStatus: state.connection.status,
    presentationTitle: state.speaker.title,
    speaker: state.speaker.speaker
  };
};

export default connect(mapStateToProps, actions)(App);
