import React, { Component } from "react";
/*


*/
class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <label id="username">账户</label>
          <input name="username" {...this.props.getField("username")} />
        </div>
        <div>
          <label id="password">密码</label>
          <input name="password" {...this.props.getField("password")} />
        </div>
        <div onClick={this.props.handleSubmit}>提交</div>
        <div>other content</div>
      </div>
    );
  }
}
const formCreate = WrappedComponent =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        fields: {}
      };
    }
    //是下面方法 getField()用到的
    onChange = key => e => {
      const { fields } = this.state;
      fields[key] = e.target.value;
      this.setState({
        fields
      });
    };

    handleSubmit = () => {
      console.log(this.state.fields);
    };

    getField = fieldName => {
      return {
        onChange: this.onChange(fieldName)
      };
    };

    render() {
      const props = {
        ...this.props,
        handleSubmit: this.handleSubmit,
        getField: this.getField
      };
      return <WrappedComponent {...props} />;
    }
  };

export default formCreate(Login);
