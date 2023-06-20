import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div key>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes;

export default Movie;
