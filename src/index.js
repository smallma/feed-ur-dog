import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
// import { Provider } from 'react-redux'
import { StoreContext } from 'redux-react-hook';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers'
import App from './component/App'
import './index.css';


export const store  = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <StoreContext.Provider value={store}>
      <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);