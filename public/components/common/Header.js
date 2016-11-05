import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="row marginTop">
        <div className="col-xs-10">
          <h1>{this.props.title}</h1>
          <h3>by {this.props.speaker}</h3>
        </div>
        <div className="col-xs-2">
          <div id="connection-status" className={this.props.status}></div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string,
  status: React.PropTypes.string,
  speaker: React.PropTypes.string
};

export default Header;
