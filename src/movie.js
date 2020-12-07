import React from "react";
import PropTypes from "prop-types";
import "./App.css"

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title"> {title} </h3>
                <h4 className="movie_year">{year}</h4>
                <ul className="genres">{genres.map((genre, index) =>
                    <li key={index} className="genres_genre">
                        {genre} </li>
                )}</ul>
                <p className="movie_summary">{summary}</p>

            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,

    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}



export default Movie;