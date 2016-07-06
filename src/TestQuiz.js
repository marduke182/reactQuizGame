import React, { PropTypes } from 'react';
import Question from './Question.js';
import ActionButtonsBar from './ActionButtonsBar.js';
import mui from 'material-ui';
import {deepOrange500} from 'material-ui/styles/colors';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Col, Row } from 'react-flexbox-grid/lib/index';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class TestQuiz extends React.Component {

  static defaultProps = {
     currentQuestion: 0,
     nextActivated: true,
     previousActivated: false,
  }

  state = {
    currentQuestion: this.props.currentQuestion,
    nextActivated: true,
    previousActivated: false,
  };

  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  nextQuestion = () => {
    this.setState({currentQuestion : this.state.currentQuestion+1});
    if(this.state.currentQuestion >= this.props.questions.length){
      this.setState({nextActivated : false});
    }
  }
  previousQuestion = () => {
    this.setState({currentQuestion : this.state.currentQuestion-1});
    if(this.state.currentQuestion <= 0 ){
      this.setState({previousActivated : false});
    }
  }

  render() {
    let rows = [];
    this.props.questions.forEach(function(question){
      rows.push(<Question text={question.questionText} answers={question.answers} key={question.questionId} questionId={question.questionId} />)
    });

    return (
      <Row around="lg">
        <Col xs={12} sm={12} md={12} lg={12} center="lg">
          {rows[this.state.currentQuestion]}
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} >
          <ActionButtonsBar  nextQuestion = {this.nextQuestion} previousQuestion = {this.previousQuestion}
            nextActivated={this.state.nextActivated} previousActivated={this.state.previousActivated}/>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} >
          <p>{this.state.currentQuestion + 1}/{rows.length}</p>
        </Col>
      </Row>
    );
  }
}

TestQuiz.propTypes = {
  currentQuestion : PropTypes.int,
  questions : PropTypes.arrayOf(PropTypes.shape({
    questionText: PropTypes.string.isRequired,
    questionId: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
       text: PropTypes.string.isRequired,
       value: PropTypes.string.isRequired,
       id: PropTypes.string.isRequired
     }))
   }))
};
TestQuiz.childContextTypes = {muiTheme: React.PropTypes.object};
