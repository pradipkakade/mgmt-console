
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './styles.css'
import ThemeDefault from './theme-default';

const Routes=()=><div><MuiThemeProvider muiTheme={ThemeDefault}>

   <Router>
      <div id='container'>
        <aside>
          <ul className='menu vertical-menu'>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/Workflow">Workflow</Link>
            </li>
          </ul>
        </aside>
        <div id='content' style={divStyle}>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
             <Route
              exact
              path='/Workflow'
              component={Workflow}
            />
             <Route
              exact
              path="/LayoutDefinition"
              component={LayoutDefinition}
            />
            <Route
              exact
              path="/RecordTokenizer"
              component={RecordTokenizer}
            />   
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  </MuiThemeProvider>
  </div>
  export default Routes;