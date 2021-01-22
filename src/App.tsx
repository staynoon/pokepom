//import * as React from "react";
import lid from "./assets/pokeball/lid.svg";
import band from "./assets/pokeball/button.svg";
import base from "./assets/pokeball/base.svg";
import { Timer } from "./components/timer";
import startButton from "./assets/button/start.svg";

import "./App.css";

const App = () => (
  <body>
    <div className="App">
      <h1 className="AppTitle">Pokepom</h1>
      <Timer startTimeSeconds={1500} />
      <div className="Pokeball">
        <img src={lid} alt="lid"></img>
        <img src={base} alt="base"></img>
        <img src={band} alt="band" id="band"></img>
        <img src={startButton} alt="start button" id="startButton"></img>
      </div>
    </div>
  </body>  
);

export default App;
