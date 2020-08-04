import React, { Component } from "react";
import Joi, { schema } from "joi-browser";
import Input from "./common/input";

export default class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);

    if (!result.error) {
      return null;
    }

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;

    // Old code without Joi-browser
    // const errors = {};

    // const { account } = this.state;
    // if (account.username.trim() === "") {
    //   errors.username = "Username is required";
    // }
    // if (account.password.trim() === "") {
    //   errors.password = "Password is required";
    // }

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // errors || {} to avoid "can't read property of null
    this.setState({ errors: errors || {} });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // Old code without Joi-browser
    // if (name === "username") {
    //   if (value.trim() === "") {
    //     return "Username is required";
    //   }
    // }

    // if (name === "password") {
    //   if (value.trim() === "") {
    //     return "Password is required";
    //   }
    // }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
