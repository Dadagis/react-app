import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        name="query"
        value={value}
        placeholder="Search..."
        onChange={(e) => onChange(e.currentTarget.value)}
        className="form-control"
      />
    );
  }
}
