import React, { PropTypes } from 'react';
import  Answer  from './Answer.js';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RadioButton from 'material-ui/RadioButton/RadioButton.js';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup.js';

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

export default class AnswerList extends React.Component {

  state = {
    value : '0',
  };

  handleChange = (event,value) => {
    this.setState({value});
  };

  render() {
    let rows = [];
    this.props.answers.forEach(function(answerObject) {
        rows.push(<RadioButton value={answerObject.value} label={answerObject.text} key={answerObject.id} text={answerObject.text} ></RadioButton>);
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <RadioButtonGroup value={this.state.value} labelPosition='right' name={this.props.name} onChange={this.handleChange}>
          {rows}
        </RadioButtonGroup>
      </MuiThemeProvider>
    );
  }
}

AnswerList.propTypes = {
  name: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     id: PropTypes.string.isRequired,
     value: PropTypes.string.isRequired,
   }))
};
