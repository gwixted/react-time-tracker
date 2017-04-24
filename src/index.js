import React from 'react';
import { autorun } from 'mobx';
import { render } from 'react-dom';
import App from './App';

const localStorage = require('mobx-localstorage');

if ( !localStorage.getItem('taskData') ) {
  autorun(() => {
    localStorage.setItem('taskData',[]);
  });
}

render(
  <App data={localStorage.getItem('taskData')} />,
  document.getElementById('App')
);
