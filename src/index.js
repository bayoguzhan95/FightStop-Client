import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducers';


const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
  <Provider store ={store} >

    <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
