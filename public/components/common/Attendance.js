import React, { Component } from 'react';
import { connect } from 'react-redux';

class Attendance extends Component {
  addMemberRow(member, index) {
    return (
      <tr key={index}>
        <td>{member.name}</td>
        <td>{member.id}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h2>Attendance - {this.props.audience.length} member(s)</h2>
        <table className="table table-inverse">
          <thead>
            <tr>
              <th>Audience Member</th>
              <th>Socket ID</th>
            </tr>
          </thead>
          <tbody>
            {this.props.audience.map(this.addMemberRow)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    audience: state.audience.audience
  };
};

export default connect(mapStateToProps, null)(Attendance);
