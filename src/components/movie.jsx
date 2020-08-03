import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    const { match, history } = this.props;

    return (
      <div>
        <h1>Movie {match.params.id}</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}
