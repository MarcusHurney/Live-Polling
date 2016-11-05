import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class JoinSpeaker extends Component {
  joinSpeaker() {
    const { socket } = this.props;
    const speakerName = ReactDOM.findDOMNode(this.refs.name).value;
    const title = ReactDOM.findDOMNode(this.refs.title).value;
    socket.emit('speakerJoin', { speakerName, title });
    // save title in session storage incase of refresh
    sessionStorage.title = title;
  }

  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.joinSpeaker.bind(this)}>
        <div className="form-group">
          <label>Speaker's Name</label>
          <input
            ref="name"
            className="form-control"
            placeholder="John Smith"
            required
          />
        </div>

        <div className="form-group">
          <label>Presentation Title</label>
          <input
            ref="title"
            className="form-control"
            placeholder="Enter a presentation title"
            required
          />
        </div>
        <button className="form-control btn btn-warning">Join</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.connection.socket,
    audience: state.audience.audience
  };
};

export default connect(mapStateToProps, null)(JoinSpeaker);
