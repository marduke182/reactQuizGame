import React, {  PropTypes} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import FinishIcon from 'material-ui/svg-icons/action/done';
import {deepOrange500} from 'material-ui/styles/colors';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Col } from 'react-flexbox-grid/lib/index';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const hideButton = {
  display: 'none',
};
const margin = {
  padding : 25,
};

const rightButton = {
  float: 'right',
}

export default class ActionButtonsBar extends React.Component {

  state = {
    previousActivated: this.props.previousActivated,
    nextActivated: this.props.nextActivated
  };

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12} >
        <div style={margin} >
        <FloatingActionButton onClick={this.props.previousQuestion} disabled={!this.state.previousActivated} >
          <LeftIcon />
        </FloatingActionButton>

        <FloatingActionButton style={rightButton} onClick= {this.props.nextQuestion} disabled= {!this.state.nextActivated}>
          <RightIcon />
        </FloatingActionButton>

        <FloatingActionButton style={hideButton}>
          <FinishIcon />
        </FloatingActionButton>
        </div>
      </Col>
    );
  }
}

ActionButtonsBar.propTypes = {
  nextQuestion :PropTypes.function,
  previousQuestion: PropTypes.function,
  nextActivated: PropTypes.boolean,
  previousActivated: PropTypes.boolean
}


ActionButtonsBar.childContextTypes = {muiTheme: React.PropTypes.object};
