// Get all favorites from localStorage
export const getFavorites = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

// Save a movie to favorites
export const addFavorite = (movie) => {
  const favorites = getFavorites();
  const exists = favorites.some((fav) => fav.id === movie.id);
  if (!exists) {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

// Remove a movie from favorites
export const removeFavorite = (id) => {
  const favorites = getFavorites().filter((fav) => fav.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Check if a movie is already in favorites
export const isFavorite = (id) => {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.id === id);
};
