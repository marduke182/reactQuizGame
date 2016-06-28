import React, { Component } from 'react';
import Question from './Question.js';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};
export default class App extends Component {
  render() {

    let answers = [{
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

    }
  ];

    return (
      <div>
        <AppBar   title="Title"   iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <h1>Question App with react</h1>
        <Question text='first question out there' answers={answers} questionId='1'/>
      </div>
    );
  }
}
