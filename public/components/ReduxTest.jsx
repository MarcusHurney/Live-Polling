import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReduxTest extends Component {
  renderLanguages() {
    let { languages } = this.props.languages;

    if (languages.length) {
      return languages.map((language, index) => {
        return (
          <h3
            className="language"
            key={index}
            onClick={() => this.props.deleteLanguage(index)}>
          {language}
          </h3>
        );
      });
    } else {
      return <h1 className="success">You've tamed the computer!<i className="fa fa-check fa-3x"></i></h1>;
    }

  }
  render() {
    return (
      <div>
        {this.renderLanguages()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages
  };
};

export default connect(mapStateToProps, actions)(ReduxTest);
