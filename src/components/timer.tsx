import * as React from "react";

type Props = {
  startTimeSeconds: number;
};

type State = {
  timeRemainingSeconds: number;
  minute: number;
  second: number;
  timeString: string;
};

export class Timer extends React.Component<Props, State> {
  private timerID: any;

  numberforTimer = (number: number) => number < 0 ? '00' : number < 10 ? `0${number}` : number;

  constructor(props: Props) {
    super(props);
    this.state = {
      timeRemainingSeconds: props.startTimeSeconds,
      minute: Math.floor(props.startTimeSeconds/60),
      second: props.startTimeSeconds%60,
      timeString: `${Math.floor(props.startTimeSeconds/60)}:${this.numberforTimer(props.startTimeSeconds%60)}`
    };
  }

  tick = () => {
    let prev: number = this.state.timeRemainingSeconds - 1;
    let minuteNum: number = Math.floor((prev - 1)/60);
    let secondNum: number = prev%60;
    this.setState({
      timeRemainingSeconds: prev,
      minute: minuteNum,
      second: secondNum,
      timeString: `${minuteNum}:${this.numberforTimer(secondNum)}`
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  render() {
    return(
      <div>
        <h2>{this.state.timeString}</h2>
      </div>
    )
  }
}