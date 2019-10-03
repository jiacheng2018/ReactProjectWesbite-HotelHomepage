import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './Context';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk';

const store=createStore(reducers,{},applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
      <RoomProvider>  
            <Router>
                    <App />
            </Router>
      </RoomProvider>
  </Provider>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
