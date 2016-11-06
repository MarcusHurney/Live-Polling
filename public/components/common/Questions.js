import React, { Component } from 'react';
import { connect } from 'react-redux';

class Questions extends Component {
  askQuestion(question) {
    this.props.socket.emit('ask', question);
  }

  addQuestion(question, index) {
    // console.log("addQ", this);
    return (
      <div key={index} className="col-xs-12 col-sm-6 col-md-3">
        <span onClick={this.askQuestion.bind(this, question)}>
          {question.q}
        </span>
      </div>
    );
  }
  render() {
    // console.log("render", this.addQuestion);
    return (
      <div id="questions" className="row">
        <h2>Questions</h2>
        {this.props.questions.map(this.addQuestion, this)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.connection.socket,
    questions: state.speaker.questions
  };
};

export default connect(mapStateToProps, null)(Questions);
