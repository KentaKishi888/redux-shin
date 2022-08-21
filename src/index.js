import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//actions
const increment = () => {
  return {
    type:"INCREMENT",
    
  }
}
const decrement = () => {
  return {
    type:"DECREMENT",

  }
}


//reducer
const counterReducer = (state = 0, aciton) => {
  switch(aciton.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

// store 
let store = createStore(counterReducer);

// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

// console 
store.subscribe(() => console.log(store.getState()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

