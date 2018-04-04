import React, { Component } from "react";

function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

function withHeader(Innenr) {
  return class HeaderComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ""
      };
    }
    setTitle(title) {
      this.setState({ title });
    }
    render() {
      let { title } = this.state;
      return (
        <div>
          <Header {...this.state} />
          <Innenr setTitle={this.setTitle.bind(this)} />
        </div>
      );
    }
  };
}

class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setTitle("hello wo are title from hoc");
  }
  render() {
    return (
      <div>
        <h2>how use hoc</h2>
      </div>
    );
  }
}

export default withHeader(Index);
