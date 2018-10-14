import React, { Component } from 'react';
import './App.css';

import Inputwrapper from "./containers/InputWrapper"
import TableContainer from "./containers/TableContainer"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Inputwrapper />
        <TableContainer />
      </div>
    );
  }
}

export default App;
