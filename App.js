import React, { Component } from 'react';

import reducers from './reducers';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Login from './src/screens/Login';

const composeEnhancers = compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))

);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}



export default App;