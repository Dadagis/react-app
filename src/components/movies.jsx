import React, { Component } from "react";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import Genres from "./common/genres";
import MoviesTable from "./moviesTable";
import _ from "lodash";

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All genres",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres: genres });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  getPagedData = () => {
    const filtered =
      this.state.currentGenre && this.state.currentGenre._id
        ? this.state.movies.filter(
            (m) => m.genre._id === this.state.currentGenre._id
          )
        : this.state.movies;

    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) {
      return <p className="m-2">There are no movies in the database</p>;
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <main className="container row">
        <Genres
          genreList={this.state.genres}
          onGenreChange={this.handleGenreChange}
          currentGenre={this.state.currentGenre}
        />
        <div className="col-sm">
          <p className="m-2">Showing {totalCount} movies in the database</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </main>
    );
  }
}
