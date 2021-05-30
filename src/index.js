import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import AppRouter from './Router';
import store from './Redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
