import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/components/header/header'
import Schedule from './components/schedule'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default App;
