import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import {store, persistor } from './redux/store';
import App from './App';

import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ Provider>
  </StrictMode>,
  document.getElementById('root'),
);
