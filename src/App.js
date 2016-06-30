import React, { Component } from 'react';
import mui from 'material-ui';

import Question from './Question.js';
import TopBarAndMenu from './TopBarAndMenu.js';
import ActionButtonsBar from './ActionButtonsBar.js';


export default class App extends Component {
  render() {
    let questions =[{
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

    let rows = [];
    questions.forEach(function(question){
      rows.push(<Question text={question.questionText} answers={question.answers} questionId={question.questionId}/>)
    });

    return (
      <div>
        <TopBarAndMenu />
        <h1>Question App with react</h1>
          {rows}
        <ActionButtonsBar />
      </div>
    );
  }
}
