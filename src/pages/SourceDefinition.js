import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './../theme-default';
import LayoutDefinition from './LayoutDefinition';

export default class SourceDefinition extends Component {
  render() {
    
    return (
      <div>
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <center>
          <Link to="/LayoutDefinition">
              <h3>Next-> Layout Definition</h3>
          </Link>      
              </center>
        </MuiThemeProvider>
      </div>

      
    )
  }
}
