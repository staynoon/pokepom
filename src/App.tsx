import * as React from 'react';
import logo from "./384.jpg"
import './App.css'

const App = () => (
  <div className="App">
    <h1 className="AppTitle">Pokepom</h1>
    <h2 className="Timer">25:00</h2>
    <img src={logo} alt="Pokeball" className="Pokeball"></img>
  </div>
);

export default App;