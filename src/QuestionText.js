import React, {
  PropTypes,
} from 'react';

export default class QuestionText extends React.Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

QuestionText.propTypes = {
  text: PropTypes.string.isRequired
};

QuestionText.defaultProps = {};
