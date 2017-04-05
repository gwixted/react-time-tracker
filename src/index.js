import React from 'react';
import { render } from 'react-dom';
import stores from './stores';
import App from './App';

const localStorage = require('mobx-localstorage');

render(
  <App data={localStorage.getItem('lsSet')} />,
  document.getElementById('App')
);
