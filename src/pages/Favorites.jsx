import { useEffect, useState } from "react";
import { getFavorites } from "../services/favorites";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="favorites">
      <h2>Your Favorite Movies!!</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet. Like a movie to save it here!</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
