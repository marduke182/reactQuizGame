import React, {  PropTypes,} from 'react';
import mui from 'material-ui';

import {deepOrange500} from 'material-ui/styles/colors';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar/AppBar.js'
import MenuItem from 'material-ui/MenuItem/MenuItem.js'
import Drawer from 'material-ui/Drawer/Drawer.js'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class TopBarAndMenu extends React.Component {
  state = {
    open: false,
  };

  constructor(props) {
   super(props);
   this.state = {open: false};
 }

 handleToggle = () => this.setState({open: !this.state.open});
 handleClose = () => this.setState({open: false});
 getChildContext() {
   return { muiTheme: getMuiTheme(baseTheme) };
 }

 render() {
    return (
      <div>
        <header>
          <AppBar muiTheme={muiTheme} title="Title" onLeftIconButtonTouchTap={this.handleToggle} onClick={this.handleToggle} iconClassNameRight="muidocs-icon-navigation-expand-more" />
        </header>
        <Drawer
         docked={false}
         width={200}
         open={this.state.open}
         onRequestChange={(open) => this.setState({open:false})}>
         <MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}>Menu Item</MenuItem>
         <MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}>Menu Item 2</MenuItem>
       </Drawer>
      </div>
    );
  }
}


TopBarAndMenu.childContextTypes = {muiTheme: React.PropTypes.object};
