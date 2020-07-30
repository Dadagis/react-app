import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  mapMovies = () => {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td className="">{movie.title}</td>
        <td className="">{movie.genre.name}</td>
        <td className="">{movie.numberInStock}</td>
        <td className="">{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.handleDelete(movie)}
            className="btn btn-danger"
          >
            Salut
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
          <th></th>
        </tr>
      </thead>
    );
  };

  tableBody = () => {
    return <tbody>{this.mapMovies()}</tbody>;
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) {
      return <p>There are no movies in the database</p>;
    }
    return (
      <main className="container">
        <p>Showing {count} movies in the database</p>
        <table className="table">
          {this.tableTitle()}
          {this.tableBody()}
        </table>
      </main>
    );
  }
}
