import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
<<<<<<< HEAD
        <h2>Kesukaan kamu</h2>
=======
        <h2>Your Favorites</h2>
>>>>>>> 4807e53aa60031bd7d7497c142c7da05e3f03eb9
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
<<<<<<< HEAD
      <h2>Belum Ada Film Favorit</h2>
      <p>Mulai tambahkan film ke favorit dan film akan muncul di sini!</p>
=======
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
>>>>>>> 4807e53aa60031bd7d7497c142c7da05e3f03eb9
    </div>
  );
}

export default Favorites;
