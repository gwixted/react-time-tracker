import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';

import tdata from './tdata';

render(
  <App data={tdata} />,
  document.getElementById('App')
);
