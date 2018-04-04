import React, { Component } from "react";
import Json from "../json/matchs";
export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let data = Json;
    console.log(data, "data111");
    let matchs = [55649, 55652, 55651, 55650];
    const maxSp = matchs.reduce((acc, d) => {
      let matchBetList = data.filter(s => s.id === d);
      console.log(matchBetList, "matchBetlist");
    });
  }

  render() {
    return <div className="App" />;
  }
}
