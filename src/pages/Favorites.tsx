import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { state, dispatch } = useFavorites();
  const { favorites, recentlyViewed } = state;

  return (
    <div className='container'>
      <h2>Favorites</h2>
      {favorites.length === 0 && <p>No favorite movies yet.</p>}
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong>
            <button onClick={() => dispatch({ type: 'REMOVE_FAVORITE', payload: movie.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h2>Recently Viewed</h2>
      {recentlyViewed.length === 0 && <p>No recently viewed movies.</p>}
      <ul>
        {recentlyViewed.map((movie) => (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
