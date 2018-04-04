import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GetIndex from "./component/getIndex";
import GetMax from "./component/getMax";
import KeyBoard from "./component/keyboard";
import Hoc from "./component/high/inversion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <GetIndex /> */}
        {/* <GetMax /> */}
        {/* <KeyBoard /> */}
        <Hoc />
      </div>
    );
  }
}

export default App;
