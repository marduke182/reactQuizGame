import React, {
  PropTypes,
} from 'react';

export default class Answer extends React.Component {
  render() {
    return (
      <label>
          {this.props.text}
          <input type='radio' value={this.props.value} name={this.props.name}></input>
      </label>
    );
  }
}

Answer.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Answer.defaultProps = {};
