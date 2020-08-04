import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { name, label, value, error, type, onChange } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={onChange}
          autoFocus
          id={name}
          name={name}
          type={type}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}
