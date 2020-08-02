import React, { Component } from "react";
import Like from "./common/like";

export default class MoviesTable extends Component {
  mapMovies = (movies, onLike, onDelete) => {
    return movies.map((movie) => (
      <tr key={movie._id}>
        <td className="">{movie.title}</td>
        <td className="">{movie.genre.name}</td>
        <td className="">{movie.numberInStock}</td>
        <td className="">{movie.dailyRentalRate}</td>
        <td>
          <Like liked={movie.liked} onClick={() => onLike(movie)} />
        </td>
        <td>
          <button onClick={() => onDelete(movie)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  tableTitle = (onSort) => {
    return (
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th>Like</th>
          <th></th>
        </tr>
      </thead>
    );
  };

  tableBody = (movies, onLike, onDelete) => {
    return <tbody>{this.mapMovies(movies, onLike, onDelete)}</tbody>;
  };

  render() {
    const { movies, onDelete, onLike, onSort } = this.props;

    return (
      <table className="table mt-4">
        {this.tableTitle(onSort)}
        {this.tableBody(movies, onLike, onDelete)}
      </table>
    );
  }
}
