import React, { Component } from 'react';
import Question from './Question.js';

export default class App extends Component {
  render() {
    let answers = [{
      'text' : 'a1',
      'value' : '1',
      'id' : '0',
      'name' : 'q1'
    },
    {
      'text' : 'a2',
      'value' : '0',
      'id' : '1',
      'name' : 'q1'

    }];

    return (
      <div>
        <h1>Question App with react</h1>
        <Question text='first question out there' answers={answers} />
      </div>
    );
  }
}
