import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from './Display';
import { updateCurrentAnswer } from '../../actions';

class Ask extends Component {

  componentWillMount() {
    // if the user already answered the question,
    // reset the REDUX store with the answer in sessionStorage
    // this will prevent the user from answering the question twice
    this.props.updateCurrentAnswer(sessionStorage.answer);
  }

  addChoiceButton(choice, index) {
    const buttonTypes = ['primary', 'success', 'warning', 'danger'];
    return (
      <button
        key={index}
        className={`col-xs-12 col-sm-6 btn btn-${buttonTypes[index]}`}
        onClick={this.selectAnswer.bind(this, choice)}
      >
        {choice}: {this.props.currentQuestion[choice]}
      </button>
    );
  }

  selectAnswer(choice) {
    this.props.updateCurrentAnswer(choice);
    sessionStorage.answer = choice;

    this.props.socket.emit('answer', {
      question: this.props.currentQuestion,
      choice
    });
  }

  render() {
    return (
      <div id="currentQuestion">
        <h2>{this.props.currentQuestion.q}</h2>

        <Display if={this.props.currentAnswer}>
          <h3>Your Answer: {this.props.currentAnswer}</h3>
          <p>{this.props.currentQuestion[this.props.currentAnswer]}</p>
        </Display>

        <Display if={!this.props.currentAnswer}>
          <div className="row">
            {this.props.choices.map(this.addChoiceButton, this)}
          </div>
        </Display>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let choices = Object.keys(state.speaker.currentQuestion);
  // remove the q property (the question) so that only choices are left
  choices.shift();

  return {
    choices,
    currentQuestion: state.speaker.currentQuestion,
    socket: state.connection.socket,
    currentAnswer: state.audience.currentAnswer
  };
};

export default connect(mapStateToProps, { updateCurrentAnswer })(Ask);
