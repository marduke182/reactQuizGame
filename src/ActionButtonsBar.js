import React, {  PropTypes} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import FinishIcon from 'material-ui/svg-icons/action/done';
import {deepOrange500} from 'material-ui/styles/colors';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const hideButton = {
  display: 'none',
};

const rightButton = {
  float: 'right',
}

export default class ActionButtonsBar extends React.Component {

  state = {
    finished : false,
  };

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <FloatingActionButton >
          <LeftIcon />
        </FloatingActionButton>

        <FloatingActionButton style={rightButton}>
          <RightIcon />
        </FloatingActionButton>

        <FloatingActionButton style={hideButton}>
          <FinishIcon />
        </FloatingActionButton>
      </div>
    );
  }
}

ActionButtonsBar.childContextTypes = {muiTheme: React.PropTypes.object};
