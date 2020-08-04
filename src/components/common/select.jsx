import React, { Component } from "react";

export default class Select extends Component {
  render() {
    const { name, value, label, options, onChange, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          autoFocus
          className="form-control"
        >
          <option value="" />
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}
