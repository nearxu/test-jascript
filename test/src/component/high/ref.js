import React, { Component } from "react";

const refHoc = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      console.log(this.instanceComponent, "instanceComponent");
      this.instanceComponent.showAlert();
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={instanceComponent =>
            (this.instanceComponent = instanceComponent)
          }
        />
      );
    }
  };

class Index extends Component {
  constructor(props) {
    super(props);
  }
  showAlert() {
    alert("ref");
  }
  render() {
    return <div>hello ref</div>;
  }
}

export default refHoc(Index);
