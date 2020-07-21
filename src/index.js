import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/';
import StoreProvider from './containers/StoreProvider';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
