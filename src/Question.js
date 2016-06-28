import React, {  PropTypes} from 'react';
// import  Answer  from './Answer.js';
import  AnswerList  from './AnswerList.js';
import  QuestionText  from './QuestionText.js';


export default class Question extends React.Component {
  render() {
    return (
      <div>
        <QuestionText text={this.props.text} id={this.props.questionId}/>
        <AnswerList answers={this.props.answers} name={this.props.questionId} />
      </div>
    );
  }
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     value: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired
   }))
};

Question.defaultProps = {};
