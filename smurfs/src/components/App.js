import React, { Component } from "react";
import "./App.css";
import SmurfForm from '../components/SmurfForm';
import SmurfButton from '../components/SmurfButton';
import Smurfs from '../components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <h3>Have fun!</h3>
        <SmurfForm />
        <SmurfButton />
        <Smurfs />
      </div>
    );
  }
}

export default App;
