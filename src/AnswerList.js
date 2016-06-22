import React, { PropTypes } from 'react';
import  Answer  from './Answer.js';

export default class AnswerList extends React.Component {
  render() {
    let rows = [];
    this.props.answers.forEach(function(answerObject) {
        rows.push(<Answer text={answerObject.text} name={answerObject.name}  value={answerObject.value} key={answerObject.id}/> );
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     value: PropTypes.string.isRequired,
   }))
};
