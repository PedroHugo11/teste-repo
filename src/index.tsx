import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import Routes from './routes/index';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);