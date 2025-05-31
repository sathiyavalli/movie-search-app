import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/mockApi';
import type { Movie } from '../types/Movie';
import { useFavorites } from '../context/FavoritesContext';

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { state, dispatch } = useFavorites();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getMovieDetails(id)
      .then((data) => {
        setMovie(data);
        dispatch({ type: 'ADD_RECENT', payload: data });
      })
      .catch(() => setError('Movie not found'))
      .finally(() => setLoading(false));
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie data.</p>;

  return (
    <div className='container'>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p><strong>Plot:</strong> {movie.plot}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
      <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>

      <button
       onClick={() => {
       const alreadyAdded = state.favorites.some(fav => fav.id === movie.id);
        if (alreadyAdded) {
         setMessage('Movie is already in favorites.');
        } else {
         dispatch({ type: 'ADD_FAVORITE', payload: movie });
         setMessage('Movie added to favorites!');
       }
       setTimeout(() => setMessage(''), 3000);
  }}
>
      Add to Favorites
      </button>
      {message && <p style={{ color: 'green', marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}
