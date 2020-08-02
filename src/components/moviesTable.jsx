import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";
import TableBody from "./common/tableBody";

export default class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies } = this.props;

    return (
      <table className="table mt-4">
        <TableHeader
          columns={this.columns}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
        />
        <TableBody data={movies} columns={this.columns} />;
      </table>
    );
  }
}
