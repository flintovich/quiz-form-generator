import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './routes';

import App from './App';

const RootApp = () => (
  <MuiThemeProvider>
    <Routes history={browserHistory} />
  </MuiThemeProvider>
);

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);
