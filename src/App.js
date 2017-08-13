import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="MainContainer">
        <h1>Welcome to React Transportation</h1>
        <p>The best place to buy vehicles online</p>
        <h2>Choose Options</h2>
        <p>New Only <input type="checkbox" name="vehicle" checked/> </p>
<p>Select Type
<select>
    <option value="" selected="selected">All</option>
    <option value="1">Cars</option>
    <option value="2">Trucks</option>
    <option value="3">Convertibles</option>
</select></p>
<div className="Cars">
<h2>Cars</h2>
<div className="ModelForCars">
<p>Year Model Price</p>
</div>
</div>


        </div>
      </div>
    );
  }
}

export default App;
