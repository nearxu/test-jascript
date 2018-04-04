import React, { Component } from "react";
import "./index.css";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "" // 倍数
    };
  }
  changeBorad(m) {
    let { time } = this.state;
    if (time === "0") {
      time = "";
    } else {
      time = `${time}${m}`;
    }
    this.setState({ time });
  }
  decrease() {
    let { time } = this.state;
    time = parseInt(time);
    if (time >= 1) {
      time--;
    } else {
      time = 0;
    }
    this.setState({ time: time.toString() });
  }
  add() {
    let { time } = this.state;
    time = parseInt(time) + 1;
    this.setState({ time: time.toString() });
  }
  delete() {
    let { time } = this.state;
    this.setState({ time: time.substring(0, time.length - 1) });
  }
  render() {
    let { time } = this.state;
    return (
      <div>
        <h1>
          {" "}
          <b onClick={this.decrease.bind(this)}>-</b> {time}{" "}
          <b onClick={this.add.bind(this)}>+</b>{" "}
          <b onClick={this.delete.bind(this)}> {`<==`} </b>
        </h1>
        <Board changeBorad={this.changeBorad.bind(this)} />
      </div>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
  }
  change(m) {
    this.props.changeBorad(m);
  }
  render() {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, , 9];
    return (
      <div className="number">
        {number.map((m, i) => {
          return (
            <span className="num" key={i} onClick={() => this.change(m)}>
              {m}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Index;
