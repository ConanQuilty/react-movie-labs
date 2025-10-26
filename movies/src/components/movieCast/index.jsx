import React from "react";

const MovieCast = ({ cast = [] }) => {
  return (
    <div>
      <h3>Cast</h3>
      <div className="cast-grid">
        {cast.map((actor) => (
          <div key={actor.id} className="actor-card">
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
            />
            <h4>Name: {actor.name}</h4>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
