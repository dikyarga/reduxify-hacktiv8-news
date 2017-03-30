import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

const store = createStore(reducers)

import App from './App';
import './index.css';
import People from './components/People'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}></Route>
        <Route path="/news" component={App}></Route>
        <Route path="/people" component={People}></Route>
      </div>
    </Router>
  </Provider>,


  document.getElementById('root')
);
