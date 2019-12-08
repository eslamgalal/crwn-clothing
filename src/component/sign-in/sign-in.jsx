import React from "react";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";
import CustomButton from "../custom-button/custom-button";
import "../custom-button/custom-button.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handelSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handelChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have account </h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            id="email"
            handelChange={this.handelChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            id="password"
            handelChange={this.handelChange}
            label="password"
            required
          />
        </form>
        <CustomButton type="submit">SIGN IN</CustomButton>
      </div>
    );
  }
}
export default SignIn;
