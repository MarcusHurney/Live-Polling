import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js'
import Display from './common/Display';

class Board extends Component {
  state = { resultsArray: [] };

  componentWillMount() {
    this.formatData(this.props.results);
  }

  componentWillReceiveProps(nextProps) {
    this.formatData(nextProps.results);
  }

  formatData(results) {
    // convert results object into an array of its keys, then map over array
    const resultsArray = Object.keys(results).map(choice => {
        return results[choice];
    });
    return this.setState({
      resultsArray
    }, () => {
      this.drawChart();
    });
  }

  drawChart() {

    var ctx = document.getElementById('resultsChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['a', 'b', 'c', 'd'],
        datasets: [{
          label: 'Results for Multiple Choice',
          data: this.state.resultsArray,
          backgroundColor: "rgba(255,152,133, 0.9)"
        }]
      }
    });

	}
  render() {
    return (
      <div id="scoreboard">
        <Display if={this.props.connectionStatus === 'connected' && this.props.currentQuestion}>
          <h3>{this.props.currentQuestion.q}</h3>
          <canvas id="resultsChart"></canvas>
        </Display>

        <Display if={this.props.connectionStatus === 'connected' && !this.props.currentQuestion}>
          <h3>Awaiting a question from the speaker...</h3>
        </Display>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    connectionStatus: state.connection.status,
    currentQuestion: state.speaker.currentQuestion,
    results: state.audience.results
  };
};

export default connect(mapStateToProps, null)(Board);
