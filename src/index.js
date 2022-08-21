import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import counterReducer from './reducers/counter';
import isLoginReducer from './reducers/isLogin';
import allReducers from './reducers';

const store = createStore(allReducers);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

