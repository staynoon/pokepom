import * as React from "react";
import lid from "./assets/pokeball/lid.svg";
import band from "./assets/pokeball/button.svg";
import base from "./assets/pokeball/base.svg";
import startButton from "./assets/button/start.svg";

import "./App.css";

type Props = {}

type State = {
  timeString: string;
  secondsRemaining: number;
}

class App extends React.Component<Props,State> {
  private timerID: any;

  private stringforTimer (totalSeconds: number): string {
    let minutes: number = Math.floor(totalSeconds/60);
    let seconds: number = totalSeconds%60;

    let secondsString: string = seconds < 0 ? "00" : seconds < 10 ? `0${seconds}` : `${seconds}`;

    return (`${minutes}:` + secondsString);
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      secondsRemaining: 1500,
      timeString: this.stringforTimer(1500)
    }
  }

  handleTimerStart = () => {
    this.timerID = setInterval(() => this.tick(),1000);
  }

  private tick(): void {
    let updateSeconds: number = this.state.secondsRemaining - 1;
    this.setState({
      secondsRemaining: updateSeconds,
      timeString: this.stringforTimer(updateSeconds)
    });
  }

  render() {
    return (
      <body>
        <div className="App">
          <h1 className="AppTitle">Pokepom</h1>
          <h2>
            {this.state.timeString}
          </h2>
          <div className="Pokeball">
            <img src={lid} alt="lid"></img>
            <img src={base} alt="base"></img>
            <img src={band} alt="band" id="band"></img>
            <img src={startButton} alt="start button" id="startButton" onClick={this.handleTimerStart}></img>
          </div>
        </div>
      </body>
    )
  } 
};

export default App;
