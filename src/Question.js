import React, {  PropTypes} from 'react';
// import  Answer  from './Answer.js';
import  AnswerList  from './AnswerList.js';
import  QuestionText  from './QuestionText.js';
import ActionButtonsBar from './ActionButtonsBar.js';
import mui from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Col } from 'react-flexbox-grid/lib/index';

import {deepOrange500} from 'material-ui/styles/colors';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Question extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <Col xs={12} sm={12} md={10} mdOffset={1} lg={8} lgOffset={2} >
      <Card>
        <CardHeader
          title="Test 1"
          subtitle="Basic knowledge"
          avatar="http://lorempixel.com/100/100/nature/"
        />

        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          <QuestionText text={this.props.text} id={this.props.questionId}/>
          <AnswerList answers={this.props.answers} name={this.props.questionId} />
        </CardText>
        <CardActions>
          <ActionButtonsBar />
        </CardActions>
      </Card>
    </Col>
    );
  }
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     value: PropTypes.string.isRequired,
     id: PropTypes.string.isRequired
   }))
};

Question.childContextTypes = {muiTheme: React.PropTypes.object};
