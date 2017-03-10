import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Firestack from 'react-native-firestack';
import Orientation from 'react-native-orientation';

import reducers from './reducers';
import Router from './Router';

const configurationOptions = {
  debug: true
};
const firestack = new Firestack(configurationOptions);
firestack.on('debug', msg => console.log('Received debug message', msg));
firestack.database.setPersistence(true);

class App extends Component {
  componentDidMount() {
        Orientation.lockToPortrait();
    }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router firestack={firestack} />
      </Provider>
    );
  }
}

export default App;
