import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Join extends Component {
  join() {
    const { socket } = this.props;
    const memberName = ReactDOM.findDOMNode(this.refs.name).value;
    socket.emit('join', { memberName });
  }

  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.join.bind(this)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            ref="name"
            className="form-control"
            placeholder="John Smith"
            required
          />
        </div>
        <button className="btn btn-warning">Join</button>
        <Link className="btn btn-warning" to="/speaker">Join as Speaker</Link>
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

export default connect(mapStateToProps, null)(Join);
