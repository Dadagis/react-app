import React, { Component } from "react";

export default class Genres extends Component {
  render() {
    const {
      genreList,
      onGenreChange,
      currentGenre,
      textProperty,
      valueProperty,
    } = this.props;

    return (
      <div>
        <ul className="list-group">
          {genreList.map((genre) => (
            <li
              onClick={() => onGenreChange(genre)}
              key={genre[valueProperty]}
              className={
                genre === currentGenre
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {genre[textProperty]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Genres.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
