import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { makeConnection, disconnect, setTitle } from '../actions';
import Header from './common/Header';
import * as styles from '../css/styles.scss';

class App extends Component {
  componentWillMount() {
    // pass io the socket server it should connect to
    const socket = io();
    // define connect handler
    socket.on('connect', () => {
      this.props.makeConnection();
    });
    // define disconnect handler
    socket.on('disconnect', () => {
      this.props.disconnect();
    });
    // define welcome handler
    socket.on('welcome', ({ title }) => {
      this.props.setTitle(title);
    });
  }

  render() {
    return (
      <div className="container">
        <Header status={this.props.connectionStatus} title={this.props.presentationTitle} />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    connectionStatus: state.connection.status,
    presentationTitle: state.presenter.title
  };
};

export default connect(mapStateToProps, { makeConnection, disconnect, setTitle })(App);
