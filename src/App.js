import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './styles.css'
import ThemeDefault from './theme-default';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/SourceDefinition';
import LayoutDefinition from './pages/LayoutDefinition';
import RecordTokenizer from './pages/RecordTokenizer';
import CenteredGrid from './../src/pages/CenteredGrid';
import Routes from './components/Routes';

export default class App extends Component {
  render() {
    var divStyle = {
      textAlign: 'right',
    };

    return (
      <div>
          <Routes/>
      </div>
    )
  }
}
