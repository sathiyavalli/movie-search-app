import { useEffect, useMemo, useState } from 'react';
import { movies, searchMovies } from '../api/mockApi';
import type { Movie } from '../types/Movie';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [query, setQuery] = useState('');
  const [allResults, setAllResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  // Fetch on search input change with debounce and additional filters
  useEffect(() => {
    const delay = setTimeout(() => {
        setLoading(true);
        searchMovies(query).then(data => {
          setAllResults(data);
          setPage(1);
          setLoading(false);
        });
    }, 500);
    return () => clearTimeout(delay);
  }, [query]);  

  // Extract unique genres & years for filters
  const allGenres = useMemo(() => {
    const genreSet = new Set<string>();
    movies.forEach(movie => movie.genres.forEach(genre => genreSet.add(genre)));
    return Array.from(genreSet);
  }, [allResults]);

  const allYears = useMemo(() => {
    const yearSet = new Set<string>();
    movies.forEach(movie => yearSet.add(movie.releaseDate));
    return Array.from(yearSet).sort();
  }, [allResults]);

  // Apply filters
  const filteredResults = useMemo(() => {
    return allResults.filter(movie => {
      const matchGenre = selectedGenres.length === 0 || selectedGenres.every(g => movie.genres.includes(g));
      const matchYear = !selectedYear || movie.releaseDate === selectedYear;
      const matchRating = movie.rating === undefined || movie.rating >= selectedRating;
      return matchGenre && matchYear && matchRating;
    });
  }, [allResults, selectedGenres, selectedYear, selectedRating]);

  // Pagination
  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);
  const paginatedResults = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredResults.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredResults, page]);

  // Toggle genre checkbox
  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="container">
      <h2>Search Movies</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie title"
        type="text"
      />
      <h2>
       <button onClick={() => setShowFilters(prev => !prev)}>
         {showFilters ? 'Hide Filters' : 'Show Advanced Filters'}
       </button>
      </h2>
      {/* Filters */}
      {showFilters && (
       <div className="filter-section">
          <h4>Advanced Filters</h4> 
          {/* Genre Filter */}
          <div>
            <strong>Genres:</strong><br />
            {allGenres.map(genre => (
            <label key={genre} style={{ marginRight: '10px' }}>
              <input
              type="checkbox"
              value={genre}
              checked={selectedGenres.includes(genre)}
              onChange={() => toggleGenre(genre)}
              />
               {genre}
             </label>
           ))}
          </div>

          {/* Year Filter */}
          <div style={{ marginTop: '10px' }}>
            <strong>Release Year:</strong>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
             <option value="">All</option>
               {allYears.map(year => (
             <option key={year} value={year}>{year}</option>
            ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div style={{ marginTop: '10px' }}>
            <strong>Min Rating:</strong>
             <select value={selectedRating} onChange={(e) => setSelectedRating(Number(e.target.value))}>
              {[0, 7, 8, 8.5, 9].map(rating => (
              <option key={rating} value={rating}>{rating}+</option>
             ))}
            </select>
          </div>
        </div>
      )}

      {/* Loading and Results */}
       {loading ? (
         <p className="message">Loading movies...</p>
      ) : (
        (query || selectedGenres.length || selectedYear || selectedRating) ? (
        filteredResults.length > 0 ? (
      <>
        <ul>
          {paginatedResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <strong>{movie.title}</strong> ({movie.releaseDate})<br />
                <img src={movie.poster} alt={movie.title} />
              </Link>
            </li>
          ))}
        </ul>
        {/* Pagination Controls */}
        {filteredResults.length > ITEMS_PER_PAGE && (
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>Previous</button>
            <span style={{ margin: '0 10px' }}>Page {page} of {totalPages}</span>
            <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>Next</button>
          </div>
        )}
      </>
    ) : (
          <p className="message">No movies found matching your criteria.</p>
    )
      ) : (
          <p className="message">Use search or filters to find movies.</p>
    )
  )}
    </div>
  );
}
