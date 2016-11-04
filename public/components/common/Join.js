import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Join extends Component {
  join() {
    const memberName = ReactDOM.findDOMNode(this.refs.name).value;
    alert(memberName);
  }
  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.join.bind(this)}>
        <label>Full Name</label>
        <input
          ref="name"
          className="form-control"
          placeholder="John Smith"
          required
        />
        <button className="btn btn-primary">Join</button>
      </form>
    );
  }
}

export default Join;
