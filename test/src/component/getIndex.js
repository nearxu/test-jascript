import React, { Component } from "react";
import Json from "../json/data";
export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let data = Json.data.data;
    let a = data.reduce((acc, d) => {
      let arr = acc.concat();
      let exitIndex = this.getArrIndex(arr, "date", d.saleDate);
      if (exitIndex < 0) {
        arr.push({
          date: d.saleDate,
          matchs: [d]
        });
      } else {
        arr[exitIndex].matchs.push(d);
      }
      return arr;
    }, []);
    console.log(a, "a");
  }
  getArrIndex(arr, key, time) {
    let index = -1;
    arr.forEach((a, i) => {
      if (a[key] === time) index = i;
    });
    return index;
  }
  render() {
    return <div className="App" />;
  }
}
