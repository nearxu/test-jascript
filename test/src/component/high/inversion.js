import React, { Component } from "react";

class Usual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usual: "usual"
    };
  }

  componentDidMount() {
    console.log("didMount");
  }

  render() {
    console.log(this.props);

    return <div>Usual</div>;
  }
}

const iiHoc = WrappedComponent =>
  class extends WrappedComponent {
    constructor(props) {
      super(props);
      this.state = {
        ...this.state
      };
    }

    alertFunc = () => {
      alert("HOC");
    };

    render() {
      console.log(...this.state, "stat");
      return <div>{super.render()}</div>;
    }
  };
export default iiHoc(Usual);
