import React, { Component } from 'react';

import TestQuiz from './TestQuiz.js';
import Question from './Question.js';
import TopBarAndMenu from './TopBarAndMenu.js';
import { Grid,Row,Col } from 'react-flexbox-grid/lib/index';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const QUESTIONS = [{
  'questionId' :'1',
  'questionText' : 'first question text here',
  'answers' : [{
    'text' : 'a1',
    'value' : '1',
    'id' : '0',
  },
  {
    'text' : 'a2',
    'value' : '0',
    'id' : '1',
  },
  {
    'text' : 'a3',
    'value' : '2',
    'id' : '2',
  }]
},
{
  'questionId' :'2',
  'questionText' : 'second question text here',
  'answers' : [{
    'text' : 'b1',
    'value' : '1',
    'id' : '0',
  },
  {
    'text' : 'b2',
    'value' : '0',
    'id' : '1',
  },
  {
    'text' : 'b3',
    'value' : '2',
    'id' : '2',
  }]
}];


export default class App extends Component {

  state = {
      test : "1",
  };

  render() {

    return (
      <Grid lg={12} >
        <Row>
          <Col xs={12} sm={12} md={12} lg={10} lgOffset={1} >
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <TopBarAndMenu />
              </Col>
              <Col xs={12} sm={12} md={12}  lg={12}  >
                <h1>Question App with react</h1>
              </Col>
              <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1} >
                <TestQuiz questions = {QUESTIONS} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
