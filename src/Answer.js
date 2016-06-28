import React, {  PropTypes } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



export default class Answer extends React.Component {
  render() {
    return (
      <label>
        <p>
          <input type='radio' value={this.props.value} />
          {this.props.text}
        </p>
      </label>
    );
  }
}

Answer.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string.isRequired
};

Answer.defaultProps = {};
