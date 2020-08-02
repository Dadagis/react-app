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

  tableTitle = () => {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
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
    const { movies, onDelete, onLike } = this.props;

    return (
      <table className="table mt-4">
        {this.tableTitle()}
        {this.tableBody(movies, onLike, onDelete)}
      </table>
    );
  }
}
