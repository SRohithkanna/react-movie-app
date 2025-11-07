import "../css/MovieCard.css";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite, isFavorite } from "../services/favorites";

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isFavorite(movie.id)); // Check if movie is already liked
  }, [movie.id]);

  const onFavoriteClick = () => {
    if (liked) {
      removeFavorite(movie.id);
      setLiked(false);
    } else {
      addFavorite(movie); // stores movie with poster_path
      setLiked(true);
    }
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className={`fav-btn ${liked ? "liked" : ""}`}
            onClick={onFavoriteClick}
          >
            {liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
