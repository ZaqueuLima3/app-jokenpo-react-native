import React, { Component } from 'react';
import './config/ReactotronConfig';

// import { View } from 'react-native';
import createNavigator from './routes';

export default class App extends Component {
  state = {};

  render() {
    const Routes = createNavigator();

    return <Routes />;
  }
}
